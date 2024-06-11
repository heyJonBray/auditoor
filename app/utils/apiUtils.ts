import { supabase } from './supabaseClient';
const API_URL = 'https://api.quickintel.io/v1/getquickiauditfull';

interface TokenDetails {
  tokenName: string;
  tokenSymbol: string;
  tokenDecimals: number;
  tokenOwner: string;
}

interface QuickIntelResponse {
  tokenDetails: TokenDetails;
}

// Send request to QuickIntel API
export async function sendQuickIntelRequest(
  chain: string,
  tokenAddress: string
): Promise<QuickIntelResponse> {
  const API_KEY = process.env.QUICKINTEL_API_KEY;

  if (!API_KEY) {
    console.error('API Key is missing!');
    throw new Error('API Key is missing');
  }

  console.log('Preparing to send API request', {
    API_URL,
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

    const responseData: QuickIntelResponse = await response.json();
    console.log('API Response Data', responseData);

    // Store the response data in Supabase
    const { data, error } = await supabase
      .from('quickintel_results')
      .insert([{ chain, tokenAddress, response: responseData }]);

    if (error) {
      console.error('Error storing data in Supabase:', error);
      throw error;
    }
    return responseData;
  } catch (error) {
    console.error('Error during API request:', error);
    throw error;
  }
}

// Parse token details from the API response
export function parseTokenDetails(data: QuickIntelResponse) {
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
