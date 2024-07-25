export interface QuickIntelResponse {
  tokenDetails: {
    tokenName: string; // display: "<tokenName>"
    tokenSymbol: string; // display: "<tokenSymbol>"
    tokenDecimals: number; // ignore
    tokenOwner: string; // check quickiAudit.contract_Renounced first, if that = true, display as "✅ Renounced", else display as "⚠️ Owner: <tokenDetails.tokenOwner>"
    tokenSupply: number; // display as "Supply: <tokenSupply>"
    tokenLogo: string; // display as is, unless null, then replace with "https://github.com/heyJonBray/chain-logos/blob/master/png/${chain.toLowerCase()}Logo.png?raw=true"
    tokenCreatedDate: number; // this returns a unix value, convert to number of days since, display as "🕑 <days> days old"
    quickiTokenHash: {
      // ignore
      exact_qHash: string;
      similar_qHash: string;
    };
  };
  tokenDynamicDetails: {
    lastUpdatedTimestamp: number; // ignore
    is_Honeypot: boolean; // if true display as "⛔ Honeypot", if false display as "✅ Not a Honeypot!"
    buy_Tax: string; // if null display "✅ No Buy Tax", else display as "💸 <buyTax>% Buy Tax"
    sell_Tax: string; // if null display "✅ No Sell Tax", else display as "💸 <sellTax>% Sell Tax"
    transfer_Tax: string; // if null display "✅ No Transfer Tax", else display as "💸 <transferTax>% Transfer Tax"
    post_Cooldown_Tax: string; // if null display "✅ No Post Cooldown Tax", else display as "⚠️ <postCooldownTax>% Post Cooldown Tax"
    max_Transaction: string; // if null display "✅ No Max Tx", else display as "⚠️ <maxTransaction> per transaction" - show only the value before the decimals (ex. 500000 not 500000.00000000)
    max_Transaction_Percent: string | null; // ignore
    max_Wallet: string; // if null display "✅ No Max <tokenSymbol> per Wallet", else display as "⚠️ <maxWalletAmount> <tokenSymbol> per wallet" - show only the value before the decimals (ex. 500000 not 500000.00000000)
    max_Wallet_Percent: string; // ignore
    token_Supply_Burned: number; // if null, ignore. else "🔥 <value> <tokenSymbol> burned"
    lp_Pair: string; // ignore
    lp_Supply: number; // ignore
    lp_Burned_Percent: string; // display: "🔥 <value>% of LPs burned"
    // for lp_locks, we need to have a conditional display
    // if null, display: "🔓 LP lock not found"
    // if pinksale display as "🔒 LP locked with Pinksale"
    // if dxsale display as "🔒 LP locked with DxSale"
    // if onlymoons display "🔒 <percentageLocked>% locked until <unlockDate>"
    // if "percentageLocked" displays a non-zero value regardless of it's key, display as "🔒 <percentageLocked>% locked until <unlockDate>"
    // unlockDate is a unix timestamp, and must be converted to date
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
    contract_Type: string; // ignore
    has_Delegated_Ownership: boolean; // ignore
    hidden_Owner: boolean; // if false display as "✅ No hidden owner", else display as "⚠️ Hidden owner"
    hidden_Owner_Modifiers: string[]; // ignore
    is_Proxy: boolean; // if false display as "✅ No Proxy", else display as "⚠️ Proxy Contract"
    proxy_Implementation: string | null; // ignore
    has_External_Contract_Risk: boolean; // if false display as "✅ No external contract risk", else display as "⚠️ External Contract Risk"
    external_Contracts: string[]; // ignore
    has_Obfuscated_Address_Risk: boolean; // ignore
    obfuscated_Address_List: string[]; // ignore
    can_Mint: boolean; // if false display as "✅ Non-Mintable", if true & quickiAudit.cant_Mint_Renounced = true, display as "✅ Non-Mintable", if true & quickiAudit.cant_Mint_Renounced = false, display as "⚠️ Mintable"
    cant_Mint_Renounced: boolean | null; // use only for internal logic for can_Mint
    can_Freeze_Trading: boolean; // if false display "✅ Cannot Freeze Trading", if true display "⚠️ Can Freeze Trading"
    can_Burn: boolean; // if false display "✅ Cannot Burn", if true display "⚠️ Can Burn"
    can_Blacklist: boolean; // if false display as "✅ No Blacklist", if true & quickiAudit.cant_Blacklist_Renounced = true, display as "✅ No Blacklist", if true & quickiAudit.cant_Blacklist_Renounced = false, display as "⚠️ Can Blacklist" if false but quickiAudit.can_MultiBlacklist = true, display as "⚠️ Can Multi-Blacklist"
    cant_Blacklist_Renounced: boolean; // use only for internal logic for can_Blacklist
    can_MultiBlacklist: boolean; // use only for internal logic for can_Blacklist
    can_Whitelist: boolean; // if false display as "✅ No Whitelist", if true & quickiAudit.cant_Whitelist_Renounced = true, display as "✅ No Whitelist", if true & quickiAudit.cant_Whitelist_Renounced = false, display as "⚠️ Can Whitelist"
    cant_Whitelist_Renounced: boolean; // use only for internal logic for can_Blacklist
    can_Change_Fees: boolean; // if false display as "✅ Cannot Change Fees", if true display "⚠️ Can Change Fees"
    can_Update_Fees: boolean; // if false display as "✅ Cannot Update Fees", if true display "⚠️ Can Update Fees"
    cant_Update_Fees_Renounced: boolean; // ignore
    // need to create a custom query that displays whether or not the owner can alter how tokens are transacted
    // if any of the following values are true, display as "⚠️ Owner can change how <tokenSymbol> is transacted"
    // - can_Update_Max_Wallet = true && cant_Update_Max_Wallet_Renounced = false
    // - can_Update_Max_Tx = true && cant_Update_Max_Tx_Renounced = false
    // - can_Pause_Trading = true && cant_Pause_Trading_Renounced = false
    // - has_Trading_Cooldown = true
    // - can_Update_Wallets = true
    // if all of those are false, display "✅ No Owner Permissions"
    can_Update_Max_Wallet: boolean;
    cant_Update_Max_Wallet_Renounced: boolean;
    can_Update_Max_Tx: boolean;
    cant_Update_Max_Tx_Renounced: boolean;
    can_Pause_Trading: boolean;
    cant_Pause_Trading_Renounced: boolean;
    has_Trading_Cooldown: boolean;
    can_Update_Wallets: boolean;
    has_Suspicious_Functions: boolean; // if false display as "✅ No Suspicious Functions", if true display as "⚠️ Suspicious Internal Functions"
    has_External_Functions: boolean; // ignore
    has_Fee_Warning: boolean; // ignore
    has_ModifiedTransfer_Warning: boolean; // ignore
    modified_Transfer_Functions: string[]; // if null display as "✅ No Modified Transfer Functions", if not null display as "⚠️ Modified Transfer Functions"
    suspicious_Functions: string[]; // ignore
    external_Functions: string[]; // ignore
    audit_Functions: string[]; // ignore
    // for has_Scams, matched_Scams, and scam_Functions
    // if any are true display as "⛔ Known Scam!", if all are false display as "✅ No Known Scams"
    has_Scams: boolean;
    matched_Scams: string | null;
    scam_Functions: string[];
    is_Mutable: boolean; // if false display as "✅ Immutable", if true display as "⚠️ Mutable"
    authorities: {
      // ignore
      update_Authority: string;
    };
    contract_Links: string[]; // ignore
    functions: string[]; // ignore
    onlyOwner_Functions: string[]; // ignore
    multiBlacklistFunctions: string[]; // ignore
    has_General_Vulnerabilities: boolean; // if false display as "✅ No General Vulnerabilities", if true display as "⚠️ General Vulnerabilities"
    general_Vulnerabilities: string[]; // ignore
  };
}
