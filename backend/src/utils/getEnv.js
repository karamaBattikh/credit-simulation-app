import dotenv from 'dotenv';

dotenv.config();

export default function getEnv(varName) {
  return process.env[varName];
}
