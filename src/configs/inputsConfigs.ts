import InputConfig from '../models/InputConfig';
import Mode from '../models/Mode';
import basicConfigs from './basicConfigs';
import themeConfigs from './themeConfigs';

const inputsConfigs: Record<Mode, InputConfig[]> = {
  [Mode.BASIC]: basicConfigs,
  [Mode.THEME]: themeConfigs,
};

export default inputsConfigs;
