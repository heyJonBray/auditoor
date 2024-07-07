import { Button } from 'frames.js/next';
import { frames } from '../frames';

// Results page for formatted API results
const handler = frames(async (ctx) => {
  const { contract, chain } = ctx.searchParams;
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
            style={{ width: '50px', height: '50px' }}
          />
          <div
            style={{ marginLeft: '20px', fontSize: '35px', fontWeight: 'bold' }}
          >
            {contract}
          </div>
        </div>
        <h2>RESULTS GO HERE</h2>{' '}
        {/* TODO: Fill in with QuickIntel API results */}
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
        key="scan-again"
        action="post"
        target={{ pathname: '/contract', query: { contract, chain } }}
      >
        Scan Again
      </Button>,
      <Button key="tip" action="link" target="https://warpcast.com/jonbray.eth">
        Tip Dev 🎩
      </Button>,
      // todo: add a share button that returns a frame with the action link
      <Button
        key="share"
        action="link"
        target="https://warpcast.com/jonbray.eth"
      >
        ❓
      </Button>,
    ],
  };
});

export const GET = handler;
export const POST = handler;
