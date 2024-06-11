import { kv } from '@vercel/kv';

const API_URL = 'https://api.quickintel.io/v1/getquickiauditfull';

// Send request to QuickIntel API
export async function sendQuickIntelRequest(
  chain: string,
  tokenAddress: string
): Promise<any> {
  // const API_KEY = process.env.QUICKINTEL_API_KEY;
  const API_KEY = '2c9c22386a5547968e3b20753abef614';

  if (!API_KEY) {
    console.error('API Key is missing!');
    throw new Error('API Key is missing');
  }

  console.log('Preparing to send API request', {
    API_URL,
    API_KEY,
    chain,
    tokenAddress,
  });

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-QKNTL-KEY': API_KEY, // Safe to use API_KEY here as we've checked it's not undefined
      },
      body: JSON.stringify({ chain, tokenAddress }),
    });

    console.log('API Response Received', { status: response.status });

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

    const responseData = await response.json();
    console.log('API Response Data', responseData);
    return responseData;
  } catch (error) {
    console.error('Error during API request:', error);
    throw error;
  }
}

// apiUtils.ts
export function parseTokenDetails(data: any) {
  if (!data || !data.tokenDetails) {
    console.error('Invalid or missing token details', data);
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
