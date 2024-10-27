import { Container, Typography, Box} from "@mui/material";
import LocaleSelect from "./components/localeSelect";
import React from 'react';
import { useTranslation } from "react-i18next";
import { red } from "@mui/material/colors";

function App() {

  const [t, i18n] = useTranslation("global");

  return (
    <Container>
      <LocaleSelect/>
      <Typography variant="h3">{t("home.title")}</Typography> 
    </Container>
  );
}


export default App;