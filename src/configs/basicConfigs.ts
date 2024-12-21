import ColorPicker from '../components/core/ColorPicker';
import Select from '../components/core/Select';
import TextField from '../components/core/TextField';
import InputConfig from '../models/InputConfig';

const simpleConfigs: InputConfig[] = [
  {
    id: 'simple-color',
    name: 'Button Color',
    Component: ColorPicker,
    props: {
      placeholder: 'Pick the color',
      defaultValue: '#ffffff',
    },
    validate: (value: string) => (value ? '' : 'Color is required'),
  },
  {
    id: 'simple-size',
    name: 'Button Size',
    Component: Select,
    props: {
      defaultValue: 'medium',
      placeholder: 'Select the size',
      options: [
        { value: 'small', label: 'Small' },
        { value: 'medium', label: 'Medium' },
        { value: 'Large', label: 'Large' },
      ],
    },
    validate: (value: string) => (value ? '' : 'Size is required'),
  },
  {
    id: 'simple-text',
    name: 'Button Text',
    Component: TextField,
    props: {
      placeholder: 'Enter the text',
    },
    validate: (value: string) => (value.trim() ? '' : 'Text is required'),
  },
];

export default simpleConfigs;
