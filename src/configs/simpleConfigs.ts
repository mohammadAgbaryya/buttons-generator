import TextField from '../components/core/TextField';
import InputConfig from '../models/InputConfig';

const simpleConfigs: InputConfig[] = [
  {
    id: 'color',
    name: 'Color',
    Component: TextField,
    placeholder: "Enter a color (e.g., 'red')",
    validator: (value: string) => (value ? '' : 'Color is required'),
  },
  {
    id: 'size',
    name: 'Size',
    Component: TextField,
    placeholder: "Enter a size (e.g., 'large')",
    validator: (value: string) => (value ? '' : 'Size is required'),
  },
  {
    id: 'text',
    name: 'Button Text',
    Component: TextField,
    placeholder: 'Enter button text',
    validator: (value: string) => (value ? '' : 'Text is required'),
  },
];

export default simpleConfigs;
