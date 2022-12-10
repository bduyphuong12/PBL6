// import 'antd/dist/antd.min.css';
import axios from 'axios';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
const rootElement = document.getElementById('root');
axios.defaults.baseURL = 'http://127.0.0.1:5000/';

const root = createRoot(rootElement);
root.render(
    <App />
);

reportWebVitals();
