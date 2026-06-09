import { useEffect } from "react";

const SITE_NAME = "أسامة كرم امسيح";

/**
 * Sets document.title for the current route. Pass a page title to get
 * "<page> | أسامة كرم امسيح", or omit it for the site name alone.
 */
export function useDocumentTitle(pageTitle?: string) {
  useEffect(() => {
    document.title = pageTitle ? `${pageTitle} | ${SITE_NAME}` : SITE_NAME;
  }, [pageTitle]);
}
