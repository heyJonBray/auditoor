import { Button } from 'frames.js/next';
import { frames } from '../frames';
import { supabase } from '../../utils/supabaseClient';
import { parseQuickIntelResponse } from '../../utils/quickIntelFormatter';

const handler = frames(async (ctx) => {
  const contract = ctx.searchParams.contract || '';
  const chain = ctx.searchParams.chain || '';
  const responseId = ctx.searchParams.responseId;
  const normalizedChain = chain.toLowerCase().replace(/\s/g, '');

  const { data, error } = await supabase
    .from('quickintel_results')
    .select('response')
    .eq('id', responseId)
    .single();

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
          <h3>Code 403</h3>
          <p>
            Please try again in a few minutes. If the problem persists, please
            contact the dev for help with your error code.
          </p>
        </div>
      ),
      buttons: [
        <Button key="back" action="post" target={{ pathname: '/begin' }}>
          ↩️
        </Button>,
        <Button key="retry" action="post" target={{ pathname: '/results' }}>
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

  const {
    tokenSymbol,
    tokenLogo,
    ownerPermissions,
    transferTax,
    postCooldownTax,
    maxTransaction,
    maxWallet,
    modifiedTransferFunctions,
  } = parseQuickIntelResponse(data.response, chain);

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
            style={{ marginLeft: '20px', fontSize: '25px', fontWeight: 'bold' }}
          >
            {contract}
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            top: '0px',
            right: '0px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img
            src={tokenLogo}
            alt={contract}
            style={{ width: '150px', height: '150px', borderRadius: '20px' }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '50px',
          }}
        >
          <h2 style={{ margin: '20px 0' }}>{tokenSymbol} Transfer Data</h2>

          <p style={{ margin: '5px 0' }}>
            {transferTax} / {postCooldownTax}
          </p>
          <p style={{ margin: '5px 0' }}></p>
          <p style={{ margin: '5px 0' }}>{maxTransaction}</p>
          <p style={{ margin: '5px 0' }}>{maxWallet}</p>
          <p style={{ margin: '5px 0' }}>{modifiedTransferFunctions}</p>
          <p style={{ margin: '5px 0' }}>{ownerPermissions}</p>
        </div>
      </div>
    ),
    buttons: [
      <Button key="next" action="post" target={{ pathname: '/begin' }}>
        Scan Again
      </Button>,
      <Button
        key="dev"
        action="link"
        target={'https://warpcast.com/jonbray.eth'}
      >
        Contact Dev
      </Button>,
    ],
  };
});

export const GET = handler;
export const POST = handler;
