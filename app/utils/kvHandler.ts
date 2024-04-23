import { kv } from '@vercel/kv';

export async function setKV(key: string, value: any) {
  return await kv.set(key, JSON.stringify(value));
}

export async function getKV(key: string) {
  const data = await kv.get(key);
  return data ? JSON.parse(data as string) : null;
}
