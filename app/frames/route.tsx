import { frames } from './frames';
import { Button } from 'frames.js/next';
import {
  AllowListCriteriaEnum as AllowListCriteria,
  allowListFramesjsMiddleware as allowList,
  TokenBlockchain,
} from '@airstack/frames';

const handler = frames(
  async (ctx) => {
    // Use 'ctx.isAllowed' to check if the user is allowed to access the frame
    // based on the Farcaster followers count
    console.log(ctx.isAllowed);
    return {
      // todo: update this to a splash screen
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
      // Allow List Middleware
      allowList({
        apiKey: process.env.NEXT_PUBLIC_AIRSTACK_API_KEY as string,
        criteria: {
          or: [
            // Only allow holders of this token on Base
            [
              AllowListCriteria.TOKEN_MINT,
              {
                chain: TokenBlockchain.Base,
                address: '0x4c17ff12d9a925a0dec822a8cbf06f46c6268553',
              },
            ],
          ],
        },
      }),
    ],
  }
);

export const GET = handler;
export const POST = handler;
