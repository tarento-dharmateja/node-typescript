
import { config } from 'dotenv';
config();

const envVars: { [key: string]: string | undefined } = {...process.env}
export default {
  NODE_ENV: envVars.NODE_ENV,
  PORT: envVars.port,
  API_BASE_PATH: envVars.API_BASE_PATH
}