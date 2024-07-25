export interface QuickIntelResponse {
  tokenDetails: {
    tokenName: string; // display as is
    tokenSymbol: string; // display as is
    tokenDecimals: number; // display as is
    tokenOwner: string; // if zero address, display as "✅ Renounced", else display as "⚠️ Owner: <tokenOwner>"
    tokenSupply: number; // display as "Supply: <tokenSupply>"
    tokenLogo: string; // display as is, unless null, then display: " tokenLogo: details.tokenLogo || `https://github.com/heyJonBray/chain-logos/blob/master/png/${chain.toLowerCase()}Logo.png?raw=true`,"
    tokenCreatedDate: number; // this returns a unix value, convert to number of days since, display as "Created: <days> ago"
    quickiTokenHash: {
      // ignore
      exact_qHash: string;
      similar_qHash: string;
    };
  };
  tokenDynamicDetails: {
    lastUpdatedTimestamp: number; // ignore
    is_Honeypot: boolean; // if true display as "⛔ Honeypot", if false display as "✅ Not a Honeypot!"
    buy_Tax: string; // if null display "✅ No Buy Tax", else display as "⚠️ <buyTax>% Buy Tax"
    sell_Tax: string; // if null display "✅ No Sell Tax", else display as "⚠️ <sellTax>% Sell Tax"
    transfer_Tax: string; // if null display "✅ No Transfer Tax", else display as "⚠️ <transferTax>% Transfer Tax"
    post_Cooldown_Tax: string; // if null display "✅ No Post Cooldown Tax", else display as "⚠️ <postCooldownTax>% Post Cooldown Tax"
    max_Transaction: string; // if null display "✅ No Max Tx", else display as "⚠️ <maxTransaction> per transaction" - show only the value before the decimals (ex. 500000 not 500000.00000000)
    max_Transaction_Percent: string | null; // ignore
    max_Wallet: string; // if null display "✅ No Max <tokenSymbol> per Wallet", else display as "⚠️ <maxWalletAmount> <tokenSymbol> per wallet" - show only the value before the decimals (ex. 500000 not 500000.00000000)
    max_Wallet_Percent: string; // ignore
    token_Supply_Burned: number; // if null, ignore. else "🔥 <value> <tokenSymbol> burned"
    lp_Pair: string; // ignore
    lp_Supply: number; // ignore
    lp_Burned_Percent: string; // display: "🔥 <value>% of LPs burned"
    lp_Locks: {
      // if null, display: "⚠️ LP lock not found", if pinksale display as "🔑 LP locked with Pinksale", if dxsale display as "🔑 LP locked with DxSale", if onlymoons display "🔑 <percentageLocked>% locked until <unlockDate>" - unlockDate is unix timestamp, convert to date
      pinksale: any;
      onlymoons: {
        lockDate: number;
        amount: number;
        unlockDate: number;
        lockID: string;
        owner: string;
        percentageLocked: string;
      };
      dxsale: any;
    };
    price_Impact: string; // ignore
    problem: boolean; // ignore
    extra: string; // ignore
  };
  isScam: boolean; // ignore
  contractVerified: boolean; // if true display "✅ Verified", else display "⚠️ Unverified"
  quickiAudit: {
    contract_Creator: string; // ignore
    contract_Owner: string; // ignore
    contract_Name: string; // ignore
    contract_Chain: string; // ignore
    contract_Address: string; // ignore
    contract_Renounced: boolean; // only use internally to verify display for tokenOwner
    contract_Type: string;
    has_Delegated_Ownership: boolean;
    hidden_Owner: boolean;
    hidden_Owner_Modifiers: string[];
    is_Proxy: boolean;
    proxy_Implementation: string | null;
    has_External_Contract_Risk: boolean;
    external_Contracts: string[];
    has_Obfuscated_Address_Risk: boolean;
    obfuscated_Address_List: string[];
    can_Mint: boolean;
    cant_Mint_Renounced: boolean | null;
    can_Freeze_Trading: boolean;
    can_Burn: boolean;
    can_Blacklist: boolean;
    cant_Blacklist_Renounced: boolean;
    can_MultiBlacklist: boolean;
    can_Whitelist: boolean;
    cant_Whitelist_Renounced: boolean;
    can_Change_Fees: boolean;
    can_Update_Fees: boolean;
    cant_Update_Fees_Renounced: boolean;
    can_Update_Max_Wallet: boolean;
    cant_Update_Max_Wallet_Renounced: boolean;
    can_Update_Max_Tx: boolean;
    cant_Update_Max_Tx_Renounced: boolean;
    can_Pause_Trading: boolean;
    cant_Pause_Trading_Renounced: boolean;
    has_Trading_Cooldown: boolean;
    can_Update_Wallets: boolean;
    has_Suspicious_Functions: boolean;
    has_External_Functions: boolean;
    has_Fee_Warning: boolean;
    has_ModifiedTransfer_Warning: boolean;
    modified_Transfer_Functions: string[];
    suspicious_Functions: string[];
    external_Functions: string[];
    audit_Functions: string[];
    has_Scams: boolean;
    matched_Scams: string | null;
    scam_Functions: string[];
    is_Mutable: boolean;
    authorities: {
      update_Authority: string;
    };
    contract_Links: string[];
    functions: string[];
    onlyOwner_Functions: string[];
    multiBlacklistFunctions: string[];
    has_General_Vulnerabilities: boolean;
    general_Vulnerabilities: string[];
  };
}
