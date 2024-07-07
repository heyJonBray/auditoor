// results/route.tsx
import { Button } from 'frames.js/next';
import { frames } from '../frames';
import { supabase } from '../../utils/supabaseClient';

const handler = frames(async (ctx) => {
  const contract = ctx.searchParams.contract || '';
  const chain = ctx.searchParams.chain || '';
  const responseId = ctx.searchParams.id;
  const normalizedChain = chain.toLowerCase().replace(/\s/g, '');

  // if responseId is undefined, display 404 error
  if (!responseId) {
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
              alt=""
              style={{ width: '50px', height: '50px' }}
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
          <h2>Error: Unable to fetch Request ID</h2>
          <h3>Code 404</h3>
          <p>
            Please try again in a few minutes. If the problem persists please
            contact the dev for help with your error code.
          </p>
        </div>
      ),
      buttons: [
        <Button key="retry" action="post" target={{ pathname: '/begin' }}>
          Retry
        </Button>,
        <Button
          key="help"
          action="link"
          target={'https://warpcast.com/jonbray.eth'}
        >
          dev
        </Button>,
      ],
    };
  }

  const { data, error } = await supabase
    .from('quickintel_results')
    .select('response')
    .eq('id', responseId)
    .single();

  // if unable to contact supabase, display 403 error
  if (error) {
    console.error('Error fetching data from Supabase:', error);
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
              alt=""
              style={{ width: '50px', height: '50px' }}
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
          <h2>Error: Unable to fetch data from database</h2>
          <h3>Code 404</h3>
          <p>
            Please try again in a few minutes. If the problem persists please
            contact the dev for help with your error code.
          </p>
        </div>
      ),
      buttons: [
        <Button key="retry" action="post" target={{ pathname: '/begin' }}>
          Retry
        </Button>,
        <Button
          key="help"
          action="link"
          target={'https://warpcast.com/jonbray.eth'}
        >
          dev
        </Button>,
      ],
    };
  }

  const responseData = data.response;
  const tokenDetails = responseData.tokenDetails;
  const quickiAudit = responseData.quickiAudit;

  // all good response
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
            alt=""
            style={{ width: '50px', height: '50px' }}
          />
          <div
            style={{ marginLeft: '20px', fontSize: '35px', fontWeight: 'bold' }}
          >
            {contract}
          </div>
        </div>
        <img
          src={tokenDetails.tokenLogo}
          alt={contract}
          style={{ width: '20px', height: '20px' }}
        ></img>
        <h2>
          {tokenDetails.tokenName} | {tokenDetails.tokenSymbol}
        </h2>
        <p>{tokenDetails.tokenDecimals} decimals</p>
        <p>
          Ownership Status:{' '}
          {quickiAudit.contract_Renounced
            ? 'Renounced'
            : `Owned (${quickiAudit.contract_Owner})`}
        </p>
        <p>Supply: {tokenDetails.tokenSupply}</p>
        <p>
          Ownership Status:{' '}
          {quickiAudit.contract_Renounced
            ? 'Renounced'
            : `Owned (${quickiAudit.contract_Owner})`}
        </p>
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
        key="next"
        action="post"
        target={{ pathname: '/results2', query: { contract, chain } }}
      >
        Continue
      </Button>,
    ],
  };
});

export const GET = handler;
export const POST = handler;
