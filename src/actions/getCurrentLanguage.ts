import { IframeMessageProxy } from 'iframe-message-proxy';

/**
 * Get the language of the current contract
 */
const getCurrentLanguage = async () => {
  try {
    const { response } = (await IframeMessageProxy.sendMessage({
      action: 'getCurrentLanguage'
    })) as WrappedGetCurrentLanguageResponse;

    return { response, error: null };
  } catch (error) {
    return { response: null, error };
  }
};

export interface GetCurrentLanguageRequest {
  action: 'getCurrentLanguage';
}

export interface WrappedGetCurrentLanguageResponse {
  response: GetCurrentLanguageResponse;
  trackingProperties: { id: string };
}

export type GetCurrentLanguageResponse = string;

export default getCurrentLanguage;
