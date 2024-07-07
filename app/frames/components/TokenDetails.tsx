import React from 'react';
import { QuickIntelResponse } from '../../utils/quickIntelTypes';

interface TokenDetailsProps {
  details: QuickIntelResponse['tokenDetails'];
}

const TokenDetails: React.FC<TokenDetailsProps> = ({ details }) => {
  return (
    <div>
      <h2>
        {details.tokenName} ({details.tokenSymbol})
      </h2>
      <p>Decimals: {details.tokenDecimals}</p>
      <p>Owner: {details.tokenOwner}</p>
      <p>Supply: {details.tokenSupply}</p>
      <p>Created: {new Date(details.tokenCreatedDate).toLocaleString()}</p>
      <p>Exact qHash: {details.quickiTokenHash.exact_qHash}</p>
      <p>Similar qHash: {details.quickiTokenHash.similar_qHash}</p>
    </div>
  );
};

export default TokenDetails;
