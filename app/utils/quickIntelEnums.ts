import { QuickIntelResponse } from './quickIntelTypes';

export enum QuickIntelResponseType {
  TokenDetails = 'tokenDetails',
  TokenDynamicDetails = 'tokenDynamicDetails',
  QuickiAudit = 'quickiAudit',
}

export function parseQuickIntelResponse(response: QuickIntelResponse) {
  const parsedData: any = {};

  for (const [key, value] of Object.entries(response)) {
    switch (key) {
      case QuickIntelResponseType.TokenDetails:
        parsedData.tokenDetails = value;
        break;
      case QuickIntelResponseType.TokenDynamicDetails:
        parsedData.tokenDynamicDetails = value;
        break;
      case QuickIntelResponseType.QuickiAudit:
        parsedData.quickiAudit = value;
        break;
      default:
        parsedData[key] = value;
    }
  }

  return parsedData;
}
