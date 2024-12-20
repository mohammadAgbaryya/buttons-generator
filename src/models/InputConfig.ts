import TextField from '../components/core/TextField';

type ComponentType = typeof TextField;

interface InputConfig {
  id: string;
  name: string;
  Component: ComponentType;
  placeholder?: string;
  validator: (value: string) => string;
}
export default InputConfig;
