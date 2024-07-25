import { QuickIntelResponse } from './quickIntelTypes';

export function formatTokenDetails(
  details: QuickIntelResponse['tokenDetails']
) {
  return {
    name: details.tokenName,
    symbol: details.tokenSymbol,
    decimals: details.tokenDecimals,
    owner: details.tokenOwner,
    supply: details.tokenSupply.toLocaleString(),
    createdDate: new Date(details.tokenCreatedDate).toLocaleDateString(),
    quickiTokenHash: {
      exact: details.quickiTokenHash.exact_qHash,
      similar: details.quickiTokenHash.similar_qHash,
    },
  };
}

export function formatTokenDynamicDetails(
  details: QuickIntelResponse['tokenDynamicDetails']
) {
  return {
    lastUpdated: new Date(details.lastUpdatedTimestamp).toLocaleString(),
    isHoneypot: details.is_Honeypot ? 'Yes' : 'No',
    buyTax: `${details.buy_Tax}%`,
    sellTax: `${details.sell_Tax}%`,
    transferTax: `${details.transfer_Tax}%`,
    maxTransaction: details.max_Transaction,
    maxTransactionPercent: details.max_Transaction_Percent || 'N/A',
    maxWallet: details.max_Wallet,
    maxWalletPercent: `${details.max_Wallet_Percent}%`,
    tokenSupplyBurned: details.token_Supply_Burned.toLocaleString(),
    lpPair: details.lp_Pair,
    lpSupply: details.lp_Supply.toLocaleString(),
    lpBurnedPercent: `${details.lp_Burned_Percent}%`,
    lpLocks: details.lp_Locks,
    priceImpact: details.price_Impact,
    problem: details.problem ? 'Yes' : 'No',
    extra: details.extra,
  };
}

export function formatQuickiAudit(audit: QuickIntelResponse['quickiAudit']) {
  return {
    creator: audit.contract_Creator,
    owner: audit.contract_Owner,
    name: audit.contract_Name,
    chain: audit.contract_Chain,
    address: audit.contract_Address,
    renounced: audit.contract_Renounced ? 'Yes' : 'No',
    contractType: audit.contract_Type,
    delegatedOwnership: audit.has_Delegated_Ownership ? 'Yes' : 'No',
    hiddenOwner: audit.hidden_Owner ? 'Yes' : 'No',
    proxy: audit.is_Proxy ? 'Yes' : 'No',
    externalContractRisk: audit.has_External_Contract_Risk ? 'Yes' : 'No',
    mintingAllowed: audit.can_Mint ? 'Yes' : 'No',
    freezingAllowed: audit.can_Freeze_Trading ? 'Yes' : 'No',
    burningAllowed: audit.can_Burn ? 'Yes' : 'No',
    blacklistingAllowed: audit.can_Blacklist ? 'Yes' : 'No',
    whitelistingAllowed: audit.can_Whitelist ? 'Yes' : 'No',
    changeFeesAllowed: audit.can_Change_Fees ? 'Yes' : 'No',
    updateMaxWalletAllowed: audit.can_Update_Max_Wallet ? 'Yes' : 'No',
    updateMaxTxAllowed: audit.can_Update_Max_Tx ? 'Yes' : 'No',
    pauseTradingAllowed: audit.can_Pause_Trading ? 'Yes' : 'No',
    tradingCooldown: audit.has_Trading_Cooldown ? 'Yes' : 'No',
    suspiciousFunctions: audit.has_Suspicious_Functions ? 'Yes' : 'No',
    feeWarning: audit.has_Fee_Warning ? 'Yes' : 'No',
    modifiedTransferWarning: audit.has_ModifiedTransfer_Warning ? 'Yes' : 'No',
    generalVulnerabilities: audit.has_General_Vulnerabilities ? 'Yes' : 'No',
    scam: audit.has_Scams ? 'Yes' : 'No',
  };
}
