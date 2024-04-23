import { Button } from 'frames.js/next';
import { frames } from '../frames';
//import { sendRequest } from '../../utils/apiUtils';

/**
 * Waiting page with refresh for API calls
 * TODO: Implement KV store
 */
const handler = frames(async (ctx) => {
  const chain = ctx.searchParams.chain;
  const contract = ctx.message?.inputText;
  const isValidContract = contract
    ? /^0x[a-fA-F0-9]{40}$/.test(contract)
    : false;
  const normalizedChain = chain ? chain.toLowerCase().replace(/\s/g, '') : '';

  // Fire off request, hope for the best.
  // $DEGEN CA: 0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed
  // sendRequest(chain, contract).catch(console.error);

  return {
    image: isValidContract ? (
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
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '25px',
            left: '25px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img
            src={`https://github.com/heyJonBray/chain-logos/blob/master/png/${normalizedChain}Logo.png?raw=true`}
            alt={`${chain} Logo`}
            style={{
              width: '80px',
              height: '80px',
            }}
          />
          <div
            style={{
              marginLeft: '20px',
              fontSize: '35px',
              fontWeight: 'bold',
            }}
          >
            {contract}
          </div>
        </div>
        <h2>Audit submitted!</h2>
        <h3>Please wait 5 seconds, then refresh the frame.</h3>
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
    ) : (
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
        <h3 style={{ margin: '0', padding: '0', lineHeight: '1.2' }}>
          {contract}
        </h3>
        <h3 style={{ margin: '20px 0', padding: '0', lineHeight: '1.2' }}>
          🤔 Are you sure about that?
        </h3>
        <h3
          style={{ marginTop: '50px', marginBottom: '20px', lineHeight: '1.2' }}
        >
          Go back and enter a valid contract address.
        </h3>
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
    buttons: isValidContract
      ? [
          <Button
            action="post"
            target={{ pathname: '/results', query: { contract, chain } }}
          >
            🔃 Refresh
          </Button>,
        ]
      : [
          <Button
            action="post"
            target={{ pathname: '/contract', query: { contract, chain } }}
          >
            ⬅️ Go Back
          </Button>,
        ],
  };
});

export const GET = handler;
export const POST = handler;
