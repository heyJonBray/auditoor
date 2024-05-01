import { kv } from '@vercel/kv';

// API details
const API_URL =
  process.env.QUICKINTEL_API_QUICK_AUDIT_FULL_URL ||
  'https://api.quickintel.io/v1/getquickiauditfull';
const API_KEY = process.env.QUICKINTEL_API_KEY || 'INVALID API KEY';

// Send request to QuickIntel API
export async function sendQuickIntelRequest(
  chain: string,
  tokenAddress: string
): Promise<any> {
  try {
    // Log the details of the request
    console.log('Sending request to URL:', API_URL);
    console.log('Using API Key:', API_KEY);
    console.log('Request Body:', { chain, tokenAddress });

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-QKNTL-KEY': API_KEY,
      },
      body: JSON.stringify({ chain, tokenAddress }),
    });

    // Log the response status
    console.log('Response Status:', response.status);

    if (!response.ok) {
      const errorBody = await response.text(); // Capturing the response body for non-200 responses
      console.error('API Request Failed:', errorBody);
      throw new Error(
        `API request failed with status ${response.status}: ${errorBody}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error('Error during API request:', error);
    throw error; // Rethrow to handle error further up in the call stack
  }
}

export function parseTokenDetails(data: any) {
  if (!data || !data.tokenDetails) {
    console.error('No token details data available');
    return null;
  }

  const { tokenName, tokenSymbol, tokenDecimals, tokenOwner } =
    data.tokenDetails;
  return {
    tokenName,
    tokenSymbol,
    tokenDecimals: `${tokenDecimals} decimals`,
    tokenOwnerStatus:
      tokenOwner === '0x0000000000000000000000000000000000000000'
        ? '✅ Renounced'
        : tokenOwner,
  };
}
