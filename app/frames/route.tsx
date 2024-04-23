import { frames } from './frames';
import { Button } from 'frames.js/next';

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
        <h1 style={{ fontSize: '60px', marginTop: '30px' }}>
          Don't get $FCKN scammed!
        </h1>
        <h1 style={{ fontSize: '40px', marginTop: '10px' }}>
          Audit tokens before you buy.
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
        target={{ pathname: '/chain1', query: { foo: 'bar' } }}
      >
        Start
      </Button>,
      <Button action="link" target={'https://warpcast.com/jonbray.eth'}>
        FAQ
      </Button>,
    ],
  };
});

export const GET = handler;
export const POST = handler;
