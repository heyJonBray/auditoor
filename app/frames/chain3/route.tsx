import { frames } from '../frames';
import { Button } from 'frames.js/next';

// Degen, Ethereum, Fantom
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
          background: '#432889',
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
            src="https://github.com/heyJonBray/chain-logos/blob/master/png/degenLogo.png?raw=true"
            alt="Arbitrum"
            style={{ width: '100px', height: '100px' }}
          />
          <img
            src="https://github.com/heyJonBray/chain-logos/blob/master/png/ethereumLogo.png?raw=true"
            alt="Avalanche"
            style={{ width: '100px', height: '100px' }}
          />
          <img
            src="https://github.com/heyJonBray/chain-logos/blob/master/png/fantomLogo.png?raw=true"
            alt="Base"
            style={{ width: '100px', height: '100px' }}
          />
          <div style={{ fontSize: '50px', lineHeight: '100px' }}>➡️</div>
        </div>
      </div>
    ),
    buttons: [
      // With query params
      <Button
        action="post"
        target={{ pathname: '/contract', query: { chain: 'Degen' } }}
      >
        Degen
      </Button>,
      <Button
        action="post"
        target={{ pathname: '/contract', query: { chain: 'Ethereum' } }}
      >
        Ethereum
      </Button>,
      <Button
        action="post"
        target={{ pathname: '/contract', query: { chain: 'Fantom' } }}
      >
        Fantom
      </Button>,
      // Without query params
      <Button action="post" target="/chain4">
        ➡️
      </Button>,
    ],
  };
});

export const GET = handler;
export const POST = handler;
