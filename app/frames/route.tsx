import { frames } from './frames';
import { Button } from 'frames.js/next';

const handler = frames(async () => {
  return {
    // todo: update this to a splash screen
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
        <h1 style={{ fontSize: '60px', marginTop: '30px' }}>
          The Growth Cult Auditoor
        </h1>
        <h1 style={{ fontSize: '40px', marginTop: '10px' }}>
          Run a security check on tokens before you buy! Start now or mint.
        </h1>
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
        target={{ pathname: '/begin', query: { foo: 'bar' } }}
      >
        Start
      </Button>,
      <Button action="link" target={'https://warpcast.com/jonbray.eth'}>
        Mint
      </Button>,
      <Button action="link" target={'https://warpcast.com/jonbray.eth'}>
        FAQ
      </Button>,
      <Button action="link" target={'https://warpcast.com/jonbray.eth'}>
        dev
      </Button>,
    ],
  };
});

export const GET = handler;
export const POST = handler;
