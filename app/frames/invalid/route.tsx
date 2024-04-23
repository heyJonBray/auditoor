import { Button } from 'frames.js/next';
import { frames } from '../frames'; // Verify import path

const handler = frames(async (ctx) => {
  const chain = ctx.searchParams.chain; // Retrieves the chain from query parameters
  const contract = ctx.message?.inputText; // Retrieves the contract address from the message
  const normalizedChain = chain ? chain.toLowerCase().replace(/\s/g, '') : '';

  // Contract regex check
  const isValidContract = contract
    ? /^0x[a-fA-F0-9]{40}$/.test(contract)
    : false;

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
        <h2>{contract} is not a valid address</h2>
        <h2>Enter a valid address on {chain}</h2>
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
        action="post"
        target={
          isValidContract
            ? { pathname: '/waiting', query: { contract, chain } }
            : { pathname: '/invalid' }
        }
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
