import { frames } from '../frames';
import { Button } from 'frames.js/next';

// Arbitrum, Avalanche, Base
const handler = frames(async () => {
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
        }}
      >
        <h2>Select a chain</h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: '30px',
            marginBottom: '50px',
            width: '100%',
          }}
        >
          <img
            src="https://github.com/heyJonBray/chain-logos/blob/master/png/arbitrumLogo.png?raw=true"
            alt="Arbitrum"
            style={{ width: '100px', height: '100px' }}
          />
          <img
            src="https://github.com/heyJonBray/chain-logos/blob/master/png/avalancheLogo.png?raw=true"
            alt="Avalanche"
            style={{ width: '100px', height: '100px' }}
          />
          <img
            src="https://github.com/heyJonBray/chain-logos/blob/master/png/baseLogo.png?raw=true"
            alt="Base"
            style={{ width: '100px', height: '100px' }}
          />
          <div style={{ fontSize: '50px', lineHeight: '100px' }}>➡️</div>
        </div>
      </div>
    ),
    buttons: [
      <Button
        action="post"
        target={{ pathname: '/contract', query: { chain: 'Arbitrum' } }}
      >
        Arbitrum
      </Button>,
      <Button
        action="post"
        target={{ pathname: '/contract', query: { chain: 'Avalanche' } }}
      >
        Avalanche
      </Button>,
      <Button
        action="post"
        target={{ pathname: '/contract', query: { chain: 'Base' } }}
      >
        Base
      </Button>,
      <Button action="post" target="/chain2">
        ➡️
      </Button>,
    ],
  };
});

export const GET = handler;
export const POST = handler;
