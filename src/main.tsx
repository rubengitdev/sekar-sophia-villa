/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import './index.css';

/**
 * React Application Mounting Core
 * 
 * Target element: '#root' from index.html.
 * Renders the top-level <App /> component wrapped under React.StrictMode to aid testing.
 */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
