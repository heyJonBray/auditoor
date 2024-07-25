export interface QuickIntelResponse {
  tokenDetails: {
    tokenName: string; // display as is
    tokenSymbol: string; // display as is
    tokenDecimals: number; // display as is
    tokenOwner: string; // if zero address, display as "✅ Renounced", else display as "⚠️ Owner: <tokenOwner>"
    tokenSupply: number; // display as "Supply: <tokenSupply>"
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
    max_Transaction: string; // if null display "✅ No Max Tx", else display as "⚠️ <maxTransaction> per transaction"
    max_Transaction_Percent: string | null;
    max_Wallet: string;
    max_Wallet_Percent: string;
    token_Supply_Burned: number;
    lp_Pair: string;
    lp_Supply: number;
    lp_Burned_Percent: string;
    lp_Locks: {
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
      // team finance?
    };
    price_Impact: string;
    problem: boolean; // todo: what is this?
    extra: string; // todo: what is this?
  };
  isScam: boolean; // add to page 1
  contractVerified: boolean;
  quickiAudit: {
    contract_Creator: string; // check if owner is creator
    contract_Owner: string; //     if yes, display "owner is creator"
    contract_Name: string;
    contract_Chain: string;
    contract_Address: string;
    contract_Renounced: boolean; // add to page 1
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
