// results/route.tsx
import { Button } from 'frames.js/next';
import { frames } from '../frames';

const handler = frames(async (ctx) => {
  const contract = ctx.searchParams.contract || '';
  const chain = ctx.searchParams.chain || '';
  const normalizedChain = chain.toLowerCase().replace(/\s/g, '');

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
          background: '#2e2e2e',
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
            alt=""
            style={{ width: '50px', height: '50px' }}
          />
          <div
            style={{ marginLeft: '20px', fontSize: '35px', fontWeight: 'bold' }}
          >
            {contract}
          </div>
        </div>
        <h2>TokenName | TokenSymbol</h2>
        <p>N decimals</p>
        <p>Ownership Status: Renounced | or Owned (address)</p>
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
        key="next"
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
