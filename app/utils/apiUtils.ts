import { kv } from '@vercel/kv';

// API details
const API_URL = 'https://api.quickintel.io/v1/getquickiauditfull';
const API_KEY = 'your_api_key_here';

// Send request to QuickIntel API
export async function sendQuickIntelRequest(
  chain: string,
  tokenAddress: string
): Promise<any> {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-QKNTL-KEY': API_KEY,
      },
      body: JSON.stringify({ chain, tokenAddress }),
    });

    if (!response.ok) {
      throw new Error(
        `API request failed with status ${
          response.status
        }: ${await response.text()}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error('Error during API request:', error);
    throw error; // Rethrow to handle error further up in the call stack
  }
}

// Store data in KV with eqpiry
export async function storeDataInKV(
  key: string,
  data: any,
  expiryInSeconds: number = 120
): Promise<void> {
  try {
    await kv.set(key, data, { ex: expiryInSeconds });
  } catch (error) {
    console.error('Error storing data in KV:', error);
    throw error; // Rethrow to handle error further up in the call stack
  }
}
