import React, {Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import 'normalize.css'
import './assets/style/index.less'
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 // <React.StrictMode>
 <Suspense fallback="loading">

   <HashRouter>
     <App/>
   </HashRouter>

</Suspense>
// </React.StrictMode>
);


