import React from 'react';

export const ErrorFetchingData = ({ contract, normalizedChain }) => (
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
      Please try again in a few minutes. If the problem persists, please contact
      the dev for help with your error code.
    </p>
  </div>
);
