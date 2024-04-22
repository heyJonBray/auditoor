// File: /app/frames/contract/route.tsx
import { Button } from 'frames.js/next';
import { frames } from '../frames'; // Verify import path
import { Input } from 'postcss';

const handler = frames(async (ctx) => {
  const chain = ctx.searchParams.chain; // Retrieves the chain from query parameters
  const contract = ctx.message?.inputText; // Retrieves the contract address from the message
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
          background: '#432889',
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
        <h2>Enter the contract address on {chain}</h2>
      </div>
    ),
    textInput: '0x69...420' || contract,
    buttons: [
      <Button
        action="post"
        target={{ pathname: '/waiting', query: { contract, chain } }}
      >
        Scan
      </Button>,
      <Button action="post" target={`/chain1`}>
        ↩️
      </Button>,
    ],
  };
});

export const GET = handler;
export const POST = handler;
