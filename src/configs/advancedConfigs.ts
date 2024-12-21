import Select from '../components/core/Select';
import TextField from '../components/core/TextField';
import InputConfig from '../models/InputConfig';

const advancedConfigs: InputConfig[] = [
  {
    id: 'advanced-style',
    name: 'Button Style',
    Component: Select,
    props: {
      defaultValue: 'modern',
      placeholder: 'Enter button text',
      options: [
        { value: 'modern', label: 'Modern' },
        { value: 'minimal', label: 'Minimal' },
        { value: 'cute', label: 'Cute' },
      ],
    },
    validate: (value: string) => (value ? '' : 'Style is required'),
  },
  {
    id: 'advanced-text',
    name: 'Button Text',
    Component: TextField,
    props: {
      placeholder: 'Enter button text',
    },
    validate: (value: string) => (value ? '' : 'Text is required'),
  },
];

export default advancedConfigs;
