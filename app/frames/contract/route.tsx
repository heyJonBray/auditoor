import { Button } from 'frames.js/next';
import { frames } from '../frames';

// valid contract address for testing
// 0x9e13480a81af1dea2f255761810ef8d6cbf21735

const handler = frames(async (ctx) => {
  const chain = ctx.searchParams.chain;
  const contract = ctx.message?.inputText;
  const normalizedChain = chain ? chain.toLowerCase().replace(/\s/g, '') : '';

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
        <img
          src={`https://github.com/heyJonBray/chain-logos/blob/master/png/${normalizedChain}Logo.png?raw=true`}
          alt={`${chain} Logo`}
          style={{
            width: '100px',
            height: '100px',
            marginBottom: '20px',
          }}
        />
        <h2 style={{ marginTop: '50px', lineHeight: '0.2' }}>
          Enter the contract address on
        </h2>
        <h2 style={{ marginBottom: '50px', lineHeight: '0.2' }}> {chain}</h2>
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
    textInput: '0x69...420' || contract,
    buttons: [
      <Button
        key="scan"
        action="post"
        target={{ pathname: '/waiting', query: { contract, chain } }}
      >
        Scan
      </Button>,
      <Button key="back" action="post" target={`/chain1`}>
        ↩️
      </Button>,
    ],
  };
});

export const GET = handler;
export const POST = handler;
