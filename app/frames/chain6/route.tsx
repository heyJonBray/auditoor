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
            src="https://github.com/heyJonBray/chain-logos/blob/master/png/scrollLogo.png?raw=true"
            alt="Scroll"
            style={{ width: '100px', height: '100px' }}
          />
          <img
            src="https://github.com/heyJonBray/chain-logos/blob/master/png/zksyncLogo.png?raw=true"
            alt="zkSync"
            style={{ width: '100px', height: '100px' }}
          />
          <img
            src="https://github.com/heyJonBray/chain-logos/blob/master/png/zoraLogo.png?raw=true"
            alt="Zora"
            style={{ width: '100px', height: '100px' }}
          />
          <div style={{ fontSize: '60px', lineHeight: '100px' }}>↩️</div>
        </div>
      </div>
    ),
    buttons: [
      <Button
        action="post"
        target={{ pathname: '/contract', query: { chain: 'Scroll' } }}
      >
        Scroll
      </Button>,
      <Button
        action="post"
        target={{ pathname: '/contract', query: { chain: 'zkSync' } }}
      >
        zkSync
      </Button>,
      <Button
        action="post"
        target={{ pathname: '/contract', query: { chain: 'Zora' } }}
      >
        Zora
      </Button>,
      <Button action="post" target="/chain1">
        ↩️
      </Button>,
    ],
  };
});

export const GET = handler;
export const POST = handler;
