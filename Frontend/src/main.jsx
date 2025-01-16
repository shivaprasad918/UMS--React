import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store, { persistor }  from './store.js'; // Import your store (make sure this is the correct path)
import { PersistGate } from 'redux-persist/integration/react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> {/* Wrap the App with the Provider */}
      <PersistGate loading={null} persistor={persistor}>
      <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
