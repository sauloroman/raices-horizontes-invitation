/**
 * Opens an external URL in a new window or tab.
 * @param url The external URL to navigate to.
 */
export const openExternalLink = (url?: string): void => {
    if (!url) return
    window.open(url, '_blank', 'noopener,noreferrer')
}
