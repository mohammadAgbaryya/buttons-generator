import ColorPicker from '../components/core/ColorPicker';
import Select from '../components/core/Select';
import TextField from '../components/core/TextField';
import SelectOption from './SelectOption';

type ComponentType = typeof TextField | typeof Select | typeof ColorPicker;

type Props = {
  defaultValue?: string;
  placeholder?: string;
  label?: string;
  options?: SelectOption[];
};

interface InputConfig {
  id: string;
  name: string;
  Component: ComponentType;
  props: Props;
  validate: (value: string) => string;
}
export default InputConfig;
