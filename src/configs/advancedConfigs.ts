import TextField from '../components/core/TextField';
import InputConfig from '../models/InputConfig';

const advancedConfigs: InputConfig[] = [
  {
    id: 'text',
    name: 'Button Text',
    Component: TextField,
    placeholder: 'Enter button text',
    validator: (value: string) => (value ? '' : 'Text is required'),
  },
];

export default advancedConfigs;
