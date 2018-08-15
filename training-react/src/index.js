import React from 'react';
import ReactDOM from 'react-dom';

import Game from '~components/Game';

import './scss/index.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Game />, document.getElementById('root'));
registerServiceWorker();
