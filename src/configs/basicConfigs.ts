import ColorPicker from '../components/core/ColorPicker';
import TextField from '../components/core/TextField';
import InputConfig from '../models/InputConfig';

const simpleConfigs: InputConfig[] = [
  {
    id: 'simple-color',
    name: 'Button Color',
    Component: ColorPicker,
    props: {
      placeholder: `Pick a color or type (e.g., 'red', '#fff', 'dark blue')`,
    },
    validate: (value: string) => (value ? '' : 'Color is required'),
  },
  {
    id: 'simple-size',
    name: 'Button Size',
    Component: TextField,
    props: {
      placeholder: `Enter size (e.g., 'large', '100px', '2rem')`,
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
    validate: (value: string) => (value.trim() ? '' : 'Text is required'),
  },
];

export default simpleConfigs;
