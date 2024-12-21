import { useState } from 'react';
import InputConfig from '../models/InputConfig';

const useDynamicForm = (
  inputsConfig: InputConfig[]
): {
  formValues: Record<string, string>;
  errors: Record<string, string>;
  handleInputChange: (id: string, value: string) => void;
  validateForm: () => boolean;
} => {
  const [formValues, setFormValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (id: string, value: string): void => {
    setFormValues((prev) => ({ ...prev, [id]: value }));
    const inputConfig = inputsConfig.find((input) => input.id === id);
    if (inputConfig) {
      const error = inputConfig.validate(value);
      setErrors((prev) => ({ ...prev, [id]: error }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    inputsConfig.forEach((input) => {
      const error = input.validate(formValues[input.id] || input.props.defaultValue || '');
      if (error) newErrors[input.id] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return {
    formValues,
    errors,
    handleInputChange,
    validateForm,
  };
};

export default useDynamicForm;
