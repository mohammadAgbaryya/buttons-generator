import { useState } from 'react';
import InputConfig from '../models/InputConfig';
import Mode from '../models/Mode';
import generateButtonWithAI from '../utils/openai';

const getInitialValues = (configs: InputConfig[]): Record<string, string> => {
  const initialValues: Record<string, string> = {};
  configs.forEach((input) => {
    initialValues[input.id] = input.props?.defaultValue || '';
  });
  return initialValues;
};

const useButtonGenerator = (inputsConfigs: Record<string, InputConfig[]>) => {
  const [mode, setMode] = useState(Mode.BASIC);
  const [values, setValues] = useState<Record<string, string>>(
    getInitialValues(inputsConfigs[Mode.BASIC])
  );
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [generatedHTML, setGeneratedHTML] = useState<string | null>(null);

  const handleInputChange = (id: string, value: string): void => {
    setValues((prev) => ({ ...prev, [id]: value }));
    const inputConfig = inputsConfigs[mode].find((input) => input.id === id);
    if (inputConfig) {
      const error = inputConfig.validate(value);
      setErrors((prev) => ({ ...prev, [id]: error }));
    }
  };

  const isValid = (): boolean => {
    const newErrors: Record<string, string> = {};
    inputsConfigs[mode].forEach((input) => {
      const error = input.validate(values[input.id]);
      if (error) newErrors[input.id] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generate = async (): Promise<void> => {
    if (!isValid()) return;

    setIsLoading(true);

    const inputs = inputsConfigs[mode]
      .map((input) => `${input.name}: ${values[input.id]}`)
      .join('\n');

    try {
      const response = await generateButtonWithAI(inputs);
      setGeneratedHTML(response);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Update values when mode changes
  const handleModeChange = (newMode: Mode) => {
    setMode(newMode);
    setValues(getInitialValues(inputsConfigs[newMode]));
    setErrors({});
  };

  return {
    mode,
    values,
    errors,
    isLoading,
    generatedHTML,
    setMode: handleModeChange,
    handleInputChange,
    generate,
  };
};

export default useButtonGenerator;
