import { ConfigTemplate } from './template';
import { projectConfig } from '../environments/environment';
declare const require: any;

const AppConfig = require('./' + projectConfig).default;

export const AppCustomConfig = AppConfig as ConfigTemplate;
