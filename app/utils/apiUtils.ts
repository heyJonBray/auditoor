import { supabase } from './supabaseClient';
import { QuickIntelResponse } from './quickIntelTypes';

const API_URL = 'https://api.quickintel.io/v1/getquickiauditfull';
const API_KEY = process.env.NEXT_PUBLIC_QUICKINTEL_API_KEY;

if (!API_KEY) {
  throw new Error('Missing API key for QuickIntel');
}

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
      throw new Error(
        `API request failed with status ${response.status}: ${errorBody}`
      );
    }

    const responseData: QuickIntelResponse = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error during API request:', error);
    throw error;
  }
}

export async function saveAuditDataToSupabase(
  chain: string,
  tokenAddress: string,
  responseData: QuickIntelResponse
) {
  const { data, error } = await supabase
    .from('quickintel_results')
    .insert([{ chain, tokenAddress, response: responseData }])
    .select();

  if (error) {
    throw new Error(`Error storing data in Supabase: ${error.message}`);
  }

  return data[0].id; // Assuming `id` is the primary key and is returned after insertion
}
