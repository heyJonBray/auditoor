export interface QuickIntelResponse {
  tokenDetails: {
    tokenName: string; 
    tokenSymbol: string;
    tokenDecimals: number;
    tokenOwner: string;
    tokenSupply: number;
    tokenCreatedDate: number;
    quickiTokenHash: {
      exact_qHash: string;
      similar_qHash: string;
    };
  };
  tokenDynamicDetails: {
    lastUpdatedTimestamp: number;
    is_Honeypot: boolean; // add
    buy_Tax: string;  // if yes
    sell_Tax: string;  // if yes
    transfer_Tax: string;  // if yes
    post_Cooldown_Tax: string;
    max_Transaction: string;
    max_Transaction_Percent: string | null;
    max_Wallet: string;
    max_Wallet_Percent: string;
    token_Supply_Burned: number;
    lp_Pair: string;
    lp_Supply: number; 
    lp_Burned_Percent: string; // if LP burned, yes
    lp_Locks: { // yes and list type
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
    contract_Owner: string;   //     if yes, display "owner is creator"
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
