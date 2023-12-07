import ReactGA from 'react-ga';

export const initGA = (): void => {
  ReactGA.initialize('G-W7HJQ3E2JF');
};

export const logPageView = (): void => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname + window.location.search);
};
export const logEvent = (category: string, action: string): void => {
  if (category && action) {
    ReactGA.event({ category, action });
  }
};
export const logException = (description: string, fatal = false): void => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};