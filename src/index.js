import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/project-details.css';
import './styles/gallery.css';
import 'react-vertical-timeline-component/style.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import global_en from './locales/en/global.json';
import projects_en from './locales/en/projects.json';
import timeline_en from './locales/en/timeline.json';
import global_de from './locales/de/global.json';
import projects_de from './locales/de/projects.json';
import timeline_de from './locales/de/timeline.json';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import 'lightbox2/dist/css/lightbox.min.css';
import 'lightbox2/dist/js/lightbox-plus-jquery.min.js';

i18next.init({
  interpolation: {escapeValue: false},
  lng: "en",
  resources: {
    en: {
      global: global_en,
      projects: projects_en,
      timeline: timeline_en
    },
    de: {
      global: global_de,
      projects: projects_de,
      timeline: timeline_de
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
