import { Typography } from "@mui/material";
import LocaleSelect from "./components/localeSelect";
import React from 'react';
import { useTranslation } from "react-i18next";

function App() {

  const [t, i18n] = useTranslation("global");

  return (
    <div className='container'>
      <section className="banner">
        
      </section>
      <section className="main">
        <LocaleSelect/>
        <Typography variant="h3">{t("home.title")}</Typography> 
      </section>
    </div>
  );
}


export default App;