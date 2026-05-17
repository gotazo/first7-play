export interface DiscoveryShareInput {
  title?: string;
  message: string;
  url?: string;
}

export interface DiscoveryShareResult {
  success: boolean;
  method?: 'native' | 'clipboard';
  error?: unknown;
}

export interface DiscoveryShareBindingOptions {
  selector?: string;
  copiedText?: string;
  sharedText?: string;
  failedText?: string;
  resetDelay?: number;
}

function getShareUrl(url?: string) {
  if (url) {
    return url;
  }

  if (typeof window !== 'undefined') {
    return window.location.href;
  }

  return '';
}

function buildClipboardText({
  message,
  url
}: {
  message: string;
  url: string;
}) {
  return [message, url]
    .filter(Boolean)
    .join('\n\n');
}

export async function shareDiscovery({
  title = 'First7 Play Discovery',
  message,
  url
}: DiscoveryShareInput): Promise<DiscoveryShareResult> {
  const shareUrl = getShareUrl(url);

  try {
    if (
      typeof navigator !== 'undefined' &&
      navigator.share
    ) {
      await navigator.share({
        title,
        text: message,
        url: shareUrl || undefined
      });

      return {
        success: true,
        method: 'native'
      };
    }

    if (
      typeof navigator !== 'undefined' &&
      navigator.clipboard
    ) {
      await navigator.clipboard.writeText(
        buildClipboardText({
          message,
          url: shareUrl
        })
      );

      return {
        success: true,
        method: 'clipboard'
      };
    }

    return {
      success: false,
      error: new Error(
        'Discovery sharing is not supported in this browser.'
      )
    };
  } catch (error) {
    return {
      success: false,
      error
    };
  }
}

export function bindDiscoveryShareButtons({
  selector = '[data-share-message]',
  copiedText = 'Discovery Copied',
  sharedText = 'Discovery Shared',
  failedText = 'Transmission Failed',
  resetDelay = 2200
}: DiscoveryShareBindingOptions = {}) {
  const handleClick = async (event: MouseEvent) => {
    const shareButton =
      event.target instanceof Element
        ? event.target.closest(selector)
        : null;

    if (!(shareButton instanceof HTMLButtonElement)) {
      return;
    }

    const originalText =
      shareButton.textContent || 'Share Discovery';

    const result =
      await shareDiscovery({
        title:
          shareButton.dataset.shareTitle,
        message:
          shareButton.dataset.shareMessage || '',
        url:
          shareButton.dataset.shareUrl
      });

    shareButton.textContent =
      result.success
        ? result.method === 'clipboard'
          ? copiedText
          : sharedText
        : failedText;

    window.setTimeout(() => {
      shareButton.textContent =
        originalText;
    }, resetDelay);
  };

  document.addEventListener(
    'click',
    handleClick
  );

  return () => {
    document.removeEventListener(
      'click',
      handleClick
    );
  };
}
