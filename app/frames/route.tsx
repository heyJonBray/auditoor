/* eslint-disable react/jsx-key */
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
          height: '100vh', // Full viewport height
          width: '100vw',
          background: 'linear-gradient(to right, #432889, #17101F)',
          color: 'white',
          textAlign: 'center',
          padding: '20px',
        }}
      >
        <h1 style={{ fontSize: '60px', marginTop: '30px' }}>
          Need a $FCKN contract audited?
        </h1>
        <p
          style={{
            fontSize: '30px',
            fontStyle: 'italic',
            fontWeight: 'bold',
            position: 'absolute',
            bottom: '25px',
            right: '25px',
          }}
        >
          Powered by QuickIntel API
        </p>
      </div>
    ),
    buttons: [
      // With query params
      <Button
        action="post"
        target={{ pathname: '/chain1', query: { foo: 'bar' } }}
      >
        Start
      </Button>,
      // Without query params
      <Button action="link" target={'https://warpcast.com/jonbray.eth'}>
        FAQ
      </Button>,
    ],
  };
});

export const GET = handler;
export const POST = handler;
