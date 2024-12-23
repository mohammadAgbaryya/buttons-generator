import Select from '../components/core/Select';
import TextField from '../components/core/TextField';
import InputConfig from '../models/InputConfig';
import { validateInput } from '../utils';

const advancedConfigs: InputConfig[] = [
  {
    id: 'theme-style',
    name: 'Button Style',
    Component: Select,
    props: {
      defaultValue: 'modern',
      placeholder: 'Select button style',
      options: [
        { value: 'modern', label: 'Modern' },
        { value: 'minimal', label: 'Minimal' },
        { value: 'cute', label: 'Cute' },
      ],
    },
    validate: (value: string) => validateInput('Style', value),
  },
  {
    id: 'theme-text',
    name: 'Button Text',
    Component: TextField,
    props: {
      placeholder: 'Enter button text',
    },
    validate: (value: string) => validateInput('Text', value),
  },
];

export default advancedConfigs;
