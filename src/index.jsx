import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import enGB from 'antd/lib/locale-provider/en_GB';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import App from './App';
import reportWebVitals from './reportWebVitals';
import i18n from './i18n';
import store from './utils/Redux/store';

// import { Provider } from "react-redux";
// import store from './services/Redux/store';
// import i18n from './i18n';
// import 'moment/locale/en-gb';
// import { I18nextProvider } from 'react-i18next';
// import moment from 'moment';
// moment.locale('en-gb'); // sets first day of the week to monday

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ConfigProvider locale={enGB}>
                <I18nextProvider i18n={i18n}>
                    <App />
                </I18nextProvider>
            </ConfigProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
