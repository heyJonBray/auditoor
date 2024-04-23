// File: /app/frames/contract/route.tsx
import { Button } from 'frames.js/next';
import { frames } from '../frames'; // Verify import path

const handler = frames(async (ctx) => {
  const chain = ctx.searchParams.chain; // Retrieves the chain from query parameters
  const contract = ctx.message?.inputText; // Retrieves the contract address from the message
  const isValidContract = contract
    ? /^0x[a-fA-F0-9]{40}$/.test(contract)
    : false; // Contract regex check
  const normalizedChain = chain ? chain.toLowerCase().replace(/\s/g, '') : '';

  return {
    image: isValidContract ? (
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
            top: '25px',
            left: '25px',
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
        <h2>Audit submitted!</h2>
        <h3>Please wait 30 seconds, then refresh the frame.</h3>
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
    ) : (
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
        }}
      >
        <h3 style={{ margin: '0', padding: '0', lineHeight: '1.2' }}>
          Are you sure about that?
        </h3>
        <h3 style={{ margin: '20px 0', padding: '0', lineHeight: '1.2' }}>
          {contract}
        </h3>
        <h3 style={{ margin: '0', padding: '0', lineHeight: '1.2' }}>
          doesn't look right...
        </h3>
        <h3
          style={{ marginTop: '50px', marginBottom: '20px', lineHeight: '1.2' }}
        >
          Go back and enter a valid contract address.
        </h3>
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
    buttons: isValidContract
      ? [
          <Button
            action="post"
            target={{ pathname: '/results', query: { contract, chain } }}
          >
            🔃 Refresh
          </Button>,
        ]
      : [
          <Button
            action="post"
            target={{ pathname: '/contract', query: { contract, chain } }}
          >
            ⬅️ Go Back
          </Button>,
        ],
  };
});

export const GET = handler;
export const POST = handler;
