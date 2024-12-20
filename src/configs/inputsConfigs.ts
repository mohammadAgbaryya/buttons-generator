import InputConfig from '../models/InputConfig';
import Mode from '../models/Mode';
import advancedConfigs from './advancedConfigs';
import simpleConfigs from './simpleConfigs';

const inputsConfigs: Record<Mode, InputConfig[]> = {
  [Mode.SIMPLE]: simpleConfigs,
  [Mode.ADVANCED]: advancedConfigs,
};

export default inputsConfigs;
