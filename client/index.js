import React from 'react';
import {render} from 'react-dom';
import Raven from 'raven-js';

import {SENTRY_IO_URL} from 'constants';
import App from './js/App';

Raven
  .config(SENTRY_IO_URL)
  .install();

render((
	<App/>
), document.querySelector('#app'));
