import { kv } from '@vercel/kv';

const API_URL =
  process.env.QUICKINTEL_API_QUICK_AUDIT_FULL_URL ||
  'https://api.quickintel.io/v1/getquickiauditfull';
const API_KEY = process.env.QUICKINTEL_API_KEY || 'INVALID API KEY';

export async function sendQuickIntelRequest(
  chain: string,
  tokenAddress: string
): Promise<any> {
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
        'X-QKNTL-KEY': API_KEY,
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
