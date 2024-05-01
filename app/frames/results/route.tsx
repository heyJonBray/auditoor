// results/route.tsx
import { Button } from 'frames.js/next';
import { frames } from '../frames';
import { sendQuickIntelRequest, parseTokenDetails } from '../../utils/apiUtils';

const handler = frames(async (ctx) => {
  const contract = ctx.searchParams.contract || '';
  const chain = ctx.searchParams.chain || '';
  const normalizedChain = chain.toLowerCase().replace(/\s/g, '');

  let tokenDetails;
  try {
    const apiResponse = await sendQuickIntelRequest(chain, contract);
    tokenDetails = parseTokenDetails(apiResponse);
    if (!tokenDetails) throw new Error('Failed to parse token details.');
  } catch (error) {
    console.error('API request or parsing failed:', error);
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
            background: '#D32F2F',
            color: 'white',
            textAlign: 'center',
            padding: '20px',
            position: 'relative',
          }}
        >
          <h3>Failed to retrieve audit data. Please try again.</h3>
          <p>Error: API request failed.</p>
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
          background: '#432889',
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
        <p>{tokenDetails.tokenDecimals}</p>
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
