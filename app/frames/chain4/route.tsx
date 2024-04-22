import { Button } from 'frames.js/next';
import { frames } from '../frames';

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
            src="https://github.com/heyJonBray/chain-logos/blob/master/png/kavaLogo.png?raw=true"
            alt="Kava"
            style={{ width: '100px', height: '100px' }}
          />
          <img
            src="https://github.com/heyJonBray/chain-logos/blob/master/png/lineaLogo.png?raw=true"
            alt="Linea"
            style={{ width: '100px', height: '100px' }}
          />
          <img
            src="https://github.com/heyJonBray/chain-logos/blob/master/png/optimismLogo.png?raw=true"
            alt="Optimism"
            style={{ width: '100px', height: '100px' }}
          />
          <div style={{ fontSize: '50px', lineHeight: '100px' }}>➡️</div>
        </div>
      </div>
    ),
    buttons: [
      <Button
        action="post"
        target={{ pathname: '/contract', query: { chain: 'Kava' } }}
      >
        Kava
      </Button>,
      <Button
        action="post"
        target={{ pathname: '/contract', query: { chain: 'Linea' } }}
      >
        Linea
      </Button>,
      <Button
        action="post"
        target={{ pathname: '/contract', query: { chain: 'Optimism' } }}
      >
        Optimism
      </Button>,
      <Button action="post" target="/chain5">
        ➡️
      </Button>,
    ],
  };
});

export const GET = handler;
export const POST = handler;
