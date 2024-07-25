import { QuickIntelResponse } from './quickIntelTypes';
import { QuickIntelResponseType } from './quickIntelEnums';

export function parseQuickIntelResponse(
  response: QuickIntelResponse,
  chain: string
) {
  return {
    ...formatTokenDetails(response[QuickIntelResponseType.TokenDetails], chain),
    ...formatTokenDynamicDetails(
      response[QuickIntelResponseType.TokenDynamicDetails],
      response[QuickIntelResponseType.TokenDetails].tokenSymbol
    ),
    ...formatQuickiAudit(
      response[QuickIntelResponseType.QuickiAudit],
      response[QuickIntelResponseType.TokenDetails].tokenSymbol
    ),
  };
}

function formatTokenDetails(
  details: QuickIntelResponse['tokenDetails'],
  chain: string
) {
  const {
    tokenName,
    tokenSymbol,
    tokenOwner,
    tokenSupply,
    tokenLogo,
    tokenCreatedDate,
  } = details;

  const daysOld = Math.floor(
    (Date.now() - tokenCreatedDate) / (1000 * 60 * 60 * 24)
  );
  const tokenLogoUrl =
    tokenLogo ||
    `https://github.com/heyJonBray/chain-logos/blob/master/png/${chain.toLowerCase()}Logo.png?raw=true`;
  const ownershipStatus = tokenOwner
    ? `⚠️ Owner: ${tokenOwner}`
    : '✅ Renounced';

  return {
    tokenName,
    tokenSymbol,
    ownershipStatus,
    supply: `Supply: ${tokenSupply.toLocaleString()}`,
    tokenLogo: tokenLogoUrl,
    createdDate: `🕑 ${daysOld} days old`,
  };
}

function formatTokenDynamicDetails(
  details: QuickIntelResponse['tokenDynamicDetails'],
  tokenSymbol: string
) {
  const {
    is_Honeypot,
    buy_Tax,
    sell_Tax,
    transfer_Tax,
    post_Cooldown_Tax,
    max_Transaction,
    max_Wallet,
    token_Supply_Burned,
    lp_Burned_Percent,
    lp_Locks,
  } = details;

  return {
    honeypotStatus: is_Honeypot ? '⛔ Honeypot' : '✅ Not a Honeypot!',
    buyTax: buy_Tax ? `💸 ${buy_Tax}% Buy Tax` : '✅ No Buy Tax',
    sellTax: sell_Tax ? `💸 ${sell_Tax}% Sell Tax` : '✅ No Sell Tax',
    transferTax: transfer_Tax
      ? `💸 ${transfer_Tax}% Transfer Tax`
      : '✅ No Transfer Tax',
    postCooldownTax: post_Cooldown_Tax
      ? `⚠️ ${post_Cooldown_Tax}% Post Cooldown Tax`
      : '✅ No Post Cooldown Tax',
    maxTransaction: max_Transaction
      ? `⚠️ ${parseInt(max_Transaction, 10)} per transaction`
      : '✅ No Max Tx',
    maxWallet: max_Wallet
      ? `⚠️ ${parseInt(max_Wallet, 10)} per wallet`
      : `✅ No Max ${tokenSymbol} per Wallet`,
    supplyBurned: token_Supply_Burned
      ? `🔥 ${token_Supply_Burned.toLocaleString()} ${tokenSymbol} burned`
      : '',
    lpBurnedPercent: `🔥 ${lp_Burned_Percent}% of LPs burned`,
    lpLocks: formatLPLocks(lp_Locks),
  };
}

function formatLPLocks(
  lpLocks: QuickIntelResponse['tokenDynamicDetails']['lp_Locks']
) {
  if (!lpLocks) return '🔓 LP lock not found';

  if (lpLocks.pinksale) {
    return '🔒 LP locked with Pinksale';
  } else if (lpLocks.dxsale) {
    return '🔒 LP locked with DxSale';
  } else if (lpLocks.onlymoons) {
    return `🔒 ${lpLocks.onlymoons.percentageLocked}% locked until ${new Date(
      lpLocks.onlymoons.unlockDate
    ).toLocaleDateString()}`;
  } else {
    return '🔓 LP lock not found';
  }
}

function formatQuickiAudit(
  audit: QuickIntelResponse['quickiAudit'],
  tokenSymbol: string
) {
  return {
    verificationStatus: audit.contract_Renounced
      ? '✅ Verified'
      : '⚠️ Unverified',
    hiddenOwnerStatus: audit.hidden_Owner
      ? '⚠️ Hidden owner'
      : '✅ No hidden owner',
    proxyStatus: audit.is_Proxy ? '⚠️ Proxy Contract' : '✅ No Proxy',
    externalContractRisk: audit.has_External_Contract_Risk
      ? '⚠️ External Contract Risk'
      : '✅ No external contract risk',
    mintableStatus: formatMintableStatus(
      audit.can_Mint,
      audit.cant_Mint_Renounced
    ),
    blacklistStatus: formatBlacklistStatus(
      audit.can_Blacklist,
      audit.cant_Blacklist_Renounced,
      audit.can_MultiBlacklist
    ),
    whitelistStatus: formatWhitelistStatus(
      audit.can_Whitelist,
      audit.cant_Whitelist_Renounced
    ),
    feeChangeStatus: audit.can_Change_Fees
      ? '⚠️ Can Change Fees'
      : '✅ Cannot Change Fees',
    feeUpdateStatus: audit.can_Update_Fees
      ? '⚠️ Can Update Fees'
      : '✅ Cannot Update Fees',
    ownerPermissions: formatOwnerPermissions(audit, tokenSymbol),
    suspiciousFunctions: audit.has_Suspicious_Functions
      ? '⚠️ Suspicious Internal Functions'
      : '✅ No Suspicious Functions',
    modifiedTransferFunctions:
      audit.modified_Transfer_Functions?.length > 0
        ? '⚠️ Modified Transfer Functions'
        : '✅ No Modified Transfer Functions',
    scamStatus: formatScamStatus(
      audit.has_Scams,
      audit.matched_Scams,
      audit.scam_Functions
    ),
    immutabilityStatus: audit.is_Mutable ? '⚠️ Mutable' : '✅ Immutable',
    generalVulnerabilities: audit.has_General_Vulnerabilities
      ? '⚠️ General Vulnerabilities'
      : '✅ No General Vulnerabilities',
  };
}

function formatMintableStatus(
  canMint: boolean,
  cantMintRenounced: boolean | null
) {
  return canMint
    ? cantMintRenounced
      ? '✅ Non-Mintable'
      : '⚠️ Mintable'
    : '✅ Non-Mintable';
}

function formatBlacklistStatus(
  canBlacklist: boolean,
  cantBlacklistRenounced: boolean,
  canMultiBlacklist: boolean
) {
  if (canBlacklist && !cantBlacklistRenounced) return '⚠️ Can Blacklist';
  if (canBlacklist && cantBlacklistRenounced) return '✅ No Blacklist';
  return canMultiBlacklist ? '⚠️ Can Multi-Blacklist' : '✅ No Blacklist';
}

function formatWhitelistStatus(
  canWhitelist: boolean,
  cantWhitelistRenounced: boolean
) {
  return canWhitelist
    ? cantWhitelistRenounced
      ? '✅ No Whitelist'
      : '⚠️ Can Whitelist'
    : '✅ No Whitelist';
}

function formatOwnerPermissions(audit: any, tokenSymbol: string) {
  const permissions = [
    audit.can_Update_Max_Wallet && !audit.cant_Update_Max_Wallet_Renounced,
    audit.can_Update_Max_Tx && !audit.cant_Update_Max_Tx_Renounced,
    audit.can_Pause_Trading && !audit.cant_Pause_Trading_Renounced,
    audit.has_Trading_Cooldown,
    audit.can_Update_Wallets,
  ];

  return permissions.some(Boolean)
    ? `⚠️ Owner can change how ${tokenSymbol} is transacted`
    : '✅ No Owner Permissions';
}

function formatScamStatus(
  hasScams: boolean,
  matchedScams: string | null,
  scamFunctions: string[]
) {
  return hasScams || matchedScams || (scamFunctions && scamFunctions.length > 0)
    ? '⛔ Known Scam!'
    : '✅ No Known Scams';
}
