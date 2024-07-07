import { QuickIntelResponse } from './quickIntelTypes';

const API_URL = 'https://api.quickintel.io/v1/getquickiauditfull';
const API_KEY = process.env.QUICKINTEL_API_KEY;

// Ensure API key is available
if (!API_KEY) {
  throw new Error('Missing API key for QuickIntel');
}

// Send request to QuickIntel API
export async function fetchAuditData(
  chain: string,
  tokenAddress: string
): Promise<QuickIntelResponse> {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-QKNTL-KEY': API_KEY,
      } as HeadersInit,
      body: JSON.stringify({ chain, tokenAddress }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error('API Request Failed', {
        status: response.status,
        errorBody,
      });
      throw new Error(
        `API request failed with status ${response.status}: ${errorBody}`
      );
    }

    const responseData: QuickIntelResponse = await response.json();
    console.log('API Response Data', responseData);

    return responseData;
  } catch (error) {
    console.error('Error during API request:', error);
    throw error;
  }
}
