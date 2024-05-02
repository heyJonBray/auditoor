import { kv } from '@vercel/kv';

export async function setKV(
  key: string,
  value: any,
  expiryInSeconds: number = 120
) {
  try {
    const stringValue =
      typeof value === 'string' ? value : JSON.stringify(value);
    await kv.set(key, stringValue, { ex: expiryInSeconds });
    console.log(`Set ${key} in KV store.`);
  } catch (error) {
    console.error(`Error setting ${key} in KV store:`, error);
    throw error;
  }
}

export async function getKV(key: string) {
  try {
    const data = await kv.get(key);
    if (typeof data === 'string') {
      console.log(`Retrieved ${key} from KV store:`, data);
      return JSON.parse(data);
    } else {
      console.error(`Retrieved data for ${key} is not a string:`, data);
      return null;
    }
  } catch (error) {
    console.error(`Error retrieving ${key} from KV store:`, error);
    throw error;
  }
}
