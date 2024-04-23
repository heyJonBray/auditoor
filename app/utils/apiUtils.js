// File: /app/utils/apiUtils.js

async function sendRequest(chain, tokenAddress) {
  const url = 'https://api.quickintel.io/v1/getquickiauditfull';
  const headers = {
    'Content-Type': 'application/json',
    'X-QKNTL-KEY': process.env.QUICKINTEL_API_KEY, // Ensure you're loading the API key securely.
  };
  const body = JSON.stringify({ chain, tokenAddress });

  try {
    const response = await fetch(url, { method: 'POST', headers, body });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`API error: ${response.status} - ${errorData.error}`);
    }
    return await response.json();
  } catch (error) {
    console.error('API request failed:', error);
    throw error; // Rethrowing the error to be handled by the caller.
  }
}

function parseResponse(data) {
  // Implement validation and parsing logic here
  return data;
}

function calculateScores(data) {
  // Implement scoring logic here, based on your criteria
  const scores = {};
  // Example scoring
  scores['tokenName'] = data.tokenDetails.tokenName.length; // Just an example
  return scores;
}

export { sendRequest, parseResponse, calculateScores };
