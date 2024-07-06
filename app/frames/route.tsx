import { frames } from './frames';
import { Button } from 'frames.js/next';
import Image from 'next/image';
import imageSrc from './assets/anti-rug-splash.png';

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
        <Image
          src={imageSrc}
          alt="The Growth Cult - Anti Rug System splash screen"
          layout="fill"
          width={1000}
          height={500}
        />
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
