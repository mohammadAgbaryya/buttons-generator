import TextField from '../components/core/TextField';
import InputConfig from '../models/InputConfig';

const simpleConfigs: InputConfig[] = [
  {
    id: 'simple-color',
    name: 'Button Color',
    Component: TextField,
    props: {
      placeholder: "Enter a color (e.g. 'red')",
    },
    validate: (value: string) => (value ? '' : 'Color is required'),
  },
  {
    id: 'simple-size',
    name: 'Button Size',
    Component: TextField,
    props: {
      placeholder: "Enter a size (e.g. 'large')",
    },
    validate: (value: string) => (value ? '' : 'Size is required'),
  },
  {
    id: 'simple-text',
    name: 'Button Text',
    Component: TextField,
    props: {
      placeholder: 'Enter button text',
    },
    validate: (value: string) => (value ? '' : 'Text is required'),
  },
];

export default simpleConfigs;
