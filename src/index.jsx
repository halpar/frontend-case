import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import enGB from 'antd/lib/locale-provider/en_GB';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import { Provider } from "react-redux";
// import store from './services/Redux/store';
// import i18n from './i18n';
// import 'moment/locale/en-gb';
// import { I18nextProvider } from 'react-i18next';
// import moment from 'moment';
// moment.locale('en-gb'); // sets first day of the week to monday

ReactDOM.render(
    <React.StrictMode>
        <ConfigProvider locale={enGB}>
            <App />
        </ConfigProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
