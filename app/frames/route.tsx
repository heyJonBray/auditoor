import { frames } from './frames';
import { Button } from 'frames.js/next';

const logoUrl =
  'https://aquamarine-evil-bedbug-307.mypinata.cloud/ipfs/QmdJc9iofMdwvym8Fg3kKDu3V5REdVu5FszYFdm6DWLeg4';

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
          background: '#2e2e2e',
          color: 'white',
          padding: '20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            padding: '20px',
          }}
        >
          <h1 style={{ fontSize: '35px', color: 'white', marginTop: '0' }}>
            The Growth Cult
          </h1>
          <div style={{ padding: '5px 0' }}></div>
          <h1
            style={{
              fontSize: '75px',
              fontWeight: 'bold',
              color: 'lightblue',
              margin: '-20px 0 0 0',
              padding: 0,
            }}
          >
            Anti
          </h1>
          <h1
            style={{
              fontSize: '75px',
              fontWeight: 'bold',
              color: 'lightblue',
              margin: '-30px 0 0 0',
              padding: 0,
            }}
          >
            Rug
          </h1>
          <h1
            style={{
              fontSize: '75px',
              fontWeight: 'bold',
              color: 'lightblue',
              margin: '-30px 0 40px 0',
              padding: 0,
            }}
          >
            System
          </h1>
          <p
            style={{ fontSize: '30px', color: 'white', margin: 0, padding: 0 }}
          >
            he inspecc
          </p>
          <p
            style={{
              fontSize: '30px',
              color: 'white',
              margin: '-5px 0',
              padding: 0,
            }}
          >
            he protecc
          </p>
          <p
            style={{
              fontSize: '30px',
              color: 'white',
              margin: '-5px 0',
              padding: 0,
            }}
          >
            but mostly, he help u not get rekt
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '50%',
          }}
        >
          <img
            src={logoUrl}
            alt="Logo"
            style={{
              width: '250px',
              height: '250px',
            }}
          />
        </div>
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
