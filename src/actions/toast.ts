import { IframeMessageProxy } from 'iframe-message-proxy';

/**
 * Shows a toast notification on the main platform
 * with a message, title a type and the duration is in milliseconds
 *
 * @param content
 */
const toast = async (content: ToastRequest['content']) => {
  await IframeMessageProxy.sendMessage({
    action: 'toast',
    content
  });
};

export type ToastTypes = 'info' | 'success' | 'warning' | 'danger' | 'refresh';
export interface ToastRequest {
  action: 'toast';
  content: {
    type: ToastTypes;
    message: string;
    title?: string;
    duration?: number;
  };
}

export default toast;
