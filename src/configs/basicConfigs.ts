import ColorPicker from '../components/core/ColorPicker';
import TextField from '../components/core/TextField';
import InputConfig from '../models/InputConfig';
import { validateInput } from '../utils';

const simpleConfigs: InputConfig[] = [
  {
    id: 'basic-color',
    name: 'Button Color',
    Component: ColorPicker,
    props: {
      placeholder: `Pick or type color (e.g., 'very dark', '#fff')`,
    },
    validate: (value: string) => validateInput('Color', value),
  },
  {
    id: 'basic-size',
    name: 'Button Size',
    Component: TextField,
    props: {
      placeholder: `Enter size (e.g., 'large', '100px', '2rem')`,
    },
    validate: (value: string) => validateInput('Size', value),
  },
  {
    id: 'basic-text',
    name: 'Button Text',
    Component: TextField,
    props: {
      placeholder: 'Enter button text',
    },
    validate: (value: string) => validateInput('Text', value),
  },
];

export default simpleConfigs;
