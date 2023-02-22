import { Logger } from 'tslog';
import { shouldDebugLog } from './config/logger';

export const BotLog = new Logger({ minLevel: (shouldDebugLog() ? 0 : 3) });
