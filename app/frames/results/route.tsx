// results/route.tsx
import { Button } from 'frames.js/next';
import { frames } from '../frames';
import { parseTokenDetails } from '../../utils/apiUtils';
import { getKV } from '../../utils/kvHandler';

const handler = frames(async (ctx) => {
  const contract = ctx.searchParams.contract || '';
  const chain = ctx.searchParams.chain || '';
  const normalizedChain = chain.toLowerCase().replace(/\s/g, '');
  const kvKey = `quickIntel_${normalizedChain}_${contract}`;

  let tokenDetails;
  try {
    const cachedData = await getKV(kvKey);
    if (!cachedData) {
      throw new Error('No cached data available.');
    }
    tokenDetails = parseTokenDetails(cachedData);
    if (!tokenDetails) {
      throw new Error('Failed to parse token details.');
    }
  } catch (error) {
    console.error('Error retrieving or parsing data from KV:', error);
    return {
      image: (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            width: '100vw',
            background: '#D32F2F', // Using the reddish color for error states
            color: 'white',
            textAlign: 'center',
            padding: '20px',
            position: 'relative',
          }}
        >
          <h3>Failed to retrieve audit data for:</h3>
          <p>{contract}</p>
          <p>{chain}</p>
          <p>Please try again.</p>
        </div>
      ),
      buttons: [
        <Button
          action="post"
          target={{ pathname: '/contract', query: { contract, chain } }}
        >
          ⬅️ Try Again
        </Button>,
      ],
    };
  }

  return {
    image: (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          width: '100vw',
          background: '#432889', // Standard blue background
          color: 'white',
          textAlign: 'center',
          padding: '20px',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '25px',
            left: '25px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img
            src={`https://github.com/heyJonBray/chain-logos/blob/master/png/${normalizedChain}Logo.png?raw=true`}
            alt={`${chain} Logo`}
            style={{ width: '80px', height: '80px' }}
          />
          <div
            style={{ marginLeft: '20px', fontSize: '35px', fontWeight: 'bold' }}
          >
            {contract}
          </div>
        </div>
        <h1>
          {tokenDetails.tokenName} ({tokenDetails.tokenSymbol})
        </h1>
        <p>{tokenDetails.tokenDecimals} decimals</p>
        <p>Ownership Status: {tokenDetails.tokenOwnerStatus}</p>
        <p
          style={{
            position: 'absolute',
            bottom: '10px',
            right: '25px',
            fontWeight: 'bold',
            fontSize: '25px',
          }}
        >
          Powered by QuickIntel API
        </p>
      </div>
    ),
    buttons: [
      <Button
        action="post"
        target={{ pathname: '/results2', query: { contract, chain } }}
      >
        Continue
      </Button>,
    ],
  };
});

export const GET = handler;
export const POST = handler;
