import { frames } from '../frames';
import { Button } from 'frames.js/next';
import {
  AllowListCriteriaEnum as AllowListCriteria,
  allowListFramesjsMiddleware as allowList,
  TokenBlockchain,
} from '@airstack/frames';

// testing addresses, comment out the one that isn't needed
// isAllowed = true
const nftAddress = '0xec5461aa3a8cac1095b04d00ac7cabab87a2a7ec';
// isAllowed = false
// const nftAddress = '0xec5461aa3a8cac1095b04d00ac7cabab87a2a7ee';

const handler = frames(
  async (ctx) => {
    console.log(ctx.isAllowed); // check if user is allowed to access frame

    if (ctx.isAllowed) {
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
            <h1
              style={{
                fontSize: '40px',
                position: 'absolute',
                top: '20px',
                left: '20px',
                marginTop: 20,
                marginLeft: 20,
              }}
            >
              The Growth Cult
            </h1>
            <h1
              style={{
                fontSize: '75px',
                marginTop: '30px',
                color: 'lightblue',
              }}
            >
              Anti Rug System
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
              plz do not rely solely on outputs from the ARS, scammers gonna
              scam!
            </p>
          </div>
        ),
        buttons: [
          <Button
            key="start"
            action="post"
            target={{ pathname: '/chain1', query: { foo: 'bar' } }}
          >
            Start
          </Button>,
        ],
      };
    } else {
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
            <h1
              style={{
                fontSize: '40px',
                position: 'absolute',
                top: '20px',
                left: '20px',
                marginTop: 20,
                marginLeft: 20,
              }}
            >
              The Growth Cult
            </h1>
            <h1
              style={{
                fontSize: '75px',
                marginTop: '30px',
                color: 'lightblue',
              }}
            >
              Anti Rug System
            </h1>
            <h1 style={{ fontSize: '40px', marginTop: '10px' }}>
              This service is only available to ARS Pass holders. Please
              purchase a pass to continue.
            </h1>
            <p
              style={{
                position: 'absolute',
                right: '25px',
                top: '85%',
                transform: 'translateX(48%)',
                textAlign: 'center',
                width: '50%',
                fontSize: 50,
              }}
            >
              ⬇️
            </p>
          </div>
        ),
        buttons: [
          <Button key="refresh" action="post" target={{ pathname: '/begin' }}>
            Refresh
          </Button>,
          <Button
            key="subscribe"
            action="link"
            target={'https://example.com/subscribe'} // Replace with NFT mint URL
          >
            Purchase
          </Button>,
        ],
      };
    }
  },
  {
    middleware: [
      allowList({
        apiKey: process.env.AIRSTACK_API_KEY as string,
        criteria: {
          or: [
            [
              AllowListCriteria.TOKEN_HOLD,
              {
                chain: TokenBlockchain.Base,
                tokenAddress: nftAddress,
              },
            ],
          ],
        },
      }) as unknown as any,
    ],
  }
);

export const GET = handler;
export const POST = handler;
