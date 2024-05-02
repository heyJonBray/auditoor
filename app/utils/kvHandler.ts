import { kv } from '@vercel/kv';

/**
 * Sets a value in the Vercel KV store.
 * @param key Key for the data
 * @param value Data to store
 */
export async function setKV(key: string, value: any) {
  try {
    await kv.set(key, JSON.stringify(value));
    console.log(`Data stored in KV for key: ${key}`);
  } catch (error) {
    console.error(`Failed to store data in KV for key: ${key}`, error);
    throw error;
  }
}

/**
 * Retrieves a value from the Vercel KV store.
 * @param key Key for the data
 * @returns The retrieved data or null if not found or any error occurs.
 */
export async function getKV(key: string): Promise<any | null> {
  try {
    const data = await kv.get(key);
    if (data) {
      console.log(`Data retrieved from KV for key: ${key}`);
      return JSON.parse(data as string);
    } else {
      console.log(`No data found in KV for key: ${key}`);
      return null;
    }
  } catch (error) {
    console.error(`Failed to retrieve data from KV for key: ${key}`, error);
    return null;
  }
}
