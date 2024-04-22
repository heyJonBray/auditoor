// File: /app/frames/contract/route.tsx
import { Button } from 'frames.js/next';
import { frames } from '../frames'; // Verify import path

const handler = frames(async (ctx) => {
  const chain = ctx.searchParams.chain; // Retrieves the chain from query parameters
  const contract = ctx.message?.inputText; // Retrieves the contract address from the message
  const normalizedChain = chain ? chain.toLowerCase().replace(/\s/g, '') : '';

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
          position: 'relative', // Allows absolute positioning inside
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img
            src={`https://github.com/heyJonBray/chain-logos/blob/master/png/${normalizedChain}Logo.png?raw=true`}
            alt={`${chain} Logo`}
            style={{
              width: '80px',
              height: '80px',
            }}
          />
          <div
            style={{
              marginLeft: '20px',
              fontSize: '30px',
              fontWeight: 'bold',
            }}
          >
            {contract}
          </div>
        </div>
        <h2>Submitting results</h2>
        <h3>Please wait 30 seconds, then refresh the frame.</h3>
        <p
          style={{
            position: 'absolute',
            bottom: '10px',
            right: '25px',
            fontWeight: 'bold',
            fontSize: 'smaller',
          }}
        >
          Powered by QuickIntel API
        </p>
      </div>
    ),

    buttons: [
      <Button
        action="post"
        target={{ pathname: '/results', query: { contract, chain } }}
      >
        🔃 Refresh
      </Button>,
    ],
  };
});

export const GET = handler;
export const POST = handler;
