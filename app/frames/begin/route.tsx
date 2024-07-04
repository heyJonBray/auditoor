import { frames } from '../frames';
import { Button } from 'frames.js/next';
import {
  AllowListCriteriaEnum as AllowListCriteria,
  allowListFramesjsMiddleware as allowList,
  TokenBlockchain,
} from '@airstack/frames';

const handler = frames(
  async (ctx) => {
    console.log(ctx.isAllowed); // check if user is allowed to access frame
    return {
      // todo: alt image if no NFT
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
          <h1 style={{ fontSize: '60px', marginTop: '30px' }}>
            Contract Auditoor Frame
          </h1>
          <h1 style={{ fontSize: '40px', marginTop: '10px' }}>
            Run a security check on tokens before you buy!
          </h1>
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
          target={{ pathname: '/chain1', query: { foo: 'bar' } }}
        >
          Start
        </Button>,
        <Button action="link" target={'https://warpcast.com/jonbray.eth'}>
          FAQ
        </Button>,
      ],
    };
  },
  {
    middleware: [
      allowList({
        apiKey: process.env.NEXT_PUBLIC_AIRSTACK_API_KEY as string,
        criteria: {
          or: [
            [
              AllowListCriteria.TOKEN_HOLD,
              {
                chain: TokenBlockchain.Base,
                tokenAddress: '0xec5461aa3a8cac1095b04d00ac7cabab87a2a7ec', // paid group stub (test)
              },
            ],
          ],
        },
      }) as unknown as any, // force compatible type
    ],
  }
);

export const GET = handler;
export const POST = handler;
