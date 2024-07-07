import { Button } from 'frames.js/next';
import { frames } from '../frames';

// Polygon, Polygon ZKEVM, Pulse
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
            src="https://github.com/heyJonBray/chain-logos/blob/master/png/polygonLogo.png?raw=true"
            alt="Polygon"
            style={{ width: '100px', height: '100px' }}
          />
          <img
            src="https://github.com/heyJonBray/chain-logos/blob/master/png/polygonzkevmLogo.png?raw=true"
            alt="Polygon ZKEVM"
            style={{ width: '100px', height: '100px' }}
          />
          <img
            src="https://github.com/heyJonBray/chain-logos/blob/master/png/pulseLogo.png?raw=true"
            alt="Pulse"
            style={{ width: '100px', height: '100px' }}
          />
          <div style={{ fontSize: '50px', lineHeight: '100px' }}>➡️</div>
        </div>
      </div>
    ),
    buttons: [
      <Button
        key="1"
        action="post"
        target={{ pathname: '/contract', query: { chain: 'Polygon' } }}
      >
        Polygon
      </Button>,
      <Button
        key="2"
        action="post"
        target={{ pathname: '/contract', query: { chain: 'Polygon ZKEVM' } }}
      >
        ZKEVM
      </Button>,
      <Button
        key="3"
        action="post"
        target={{ pathname: '/contract', query: { chain: 'Pulse' } }}
      >
        Pulse
      </Button>,
      <Button key="next" action="post" target="/chain6">
        ➡️
      </Button>,
    ],
  };
});

export const GET = handler;
export const POST = handler;
