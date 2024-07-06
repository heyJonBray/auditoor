import { frames } from './frames';
import { Button } from 'frames.js/next';

const logoUrl =
  'https://aquamarine-evil-bedbug-307.mypinata.cloud/ipfs/QmVr4zKLB96MUKuRYCAAjjLhQrn6c3k1fUVh7LVkynbSk5';

const backgroundImageUrl =
  'https://aquamarine-evil-bedbug-307.mypinata.cloud/ipfs/QmYUb8YoQp5EPGYCrZjKFppepsAP5DENn6qHa97DnH8Ytg';

const handler = frames(async () => {
  return {
    image: (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100vh',
          width: '100vw',
          color: 'white',
          padding: '20px',
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
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
