import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {DataStoreProvider} from './store/context.tsx'

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <DataStoreProvider>
  <App />
 </DataStoreProvider>
  // </React.StrictMode>
);
