//Importação de componentes e bibliotecas
import App from './App';

import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/global.css';

//Monta a página dentro da div com id 'root' no Index.html principal
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
