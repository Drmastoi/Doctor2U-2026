import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

export function render(url: string) {
  const helmetContext: any = {};
  const html = renderToString(
    <StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    </StrictMode>
  );
  
  const { helmet } = helmetContext;
  
  if (!helmet) {
    return { 
      html,
      head: ''
    };
  }
  
  return { 
    html,
    head: `
      ${helmet.title ? helmet.title.toString() : ''}
      ${helmet.meta ? helmet.meta.toString() : ''}
      ${helmet.link ? helmet.link.toString() : ''}
    `
  };
}
