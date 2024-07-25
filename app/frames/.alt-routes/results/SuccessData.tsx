import React from 'react';

export const SuccessData = ({
  contract,
  normalizedChain,
  tokenDetails,
  quickiAudit,
}) => (
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
      <div style={{ marginLeft: '20px', fontSize: '35px', fontWeight: 'bold' }}>
        {contract}
      </div>
    </div>
    {tokenDetails.tokenLogo && (
      <img
        src={tokenDetails.tokenLogo}
        alt={contract}
        style={{ width: '20px', height: '20px' }}
      />
    )}
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
);
