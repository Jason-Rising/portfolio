import { ReactComponent as GlobeIcon } from '../assets/icons/globe.svg';
import { Button, Typography } from '@mui/material';
import { ReactComponent as DownArrowIcon } from '../assets/icons/down-arrow.svg';
import React, { useState, useEffect, useRef } from 'react';
import deFlag from '../assets/icons/de.svg';
import enFlag from '../assets/icons/au.svg';
import { useTranslation } from "react-i18next";

// Drop down button for handling the setting of user locasliation
function LocaleSelect() {
  const [t, i18n] = useTranslation("global"); 
  const [open, setOpen] = useState(false); 
  const [lang, setLang] = useState(i18n.language); 
  const localeSelectRef = useRef(); 

  const toggleDropdown = () => setOpen((prev) => !prev);

  // Handles language selection change, updates i18n language setting and hides locale drop down
  const handleLocaleChange = (lang) => {
    i18n.changeLanguage(lang);
    setLang(lang);
    setOpen(false);
  };

  // Closes dropdown when clicking outside of element
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (localeSelectRef.current && !localeSelectRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // LocaleItem Component
  // Represents an individual language option in the dropdown with flag and text
  function LocaleItem({ img, text, lang }) {
    return (
      <div className="localeItem" onClick={() => handleLocaleChange(lang)}>
        <img src={img} alt={`${text} flag`} />
        <Typography sx={{ fontSize: '14px', userSelect: 'none' }} className="item">
          {text}
        </Typography>
      </div>
    );
  }

  return (
    <div className="dropdown" ref={localeSelectRef}>
      {/* Language Selection Button */}
      <Button
        onClick={toggleDropdown}
        variant="text"
        color="black"
        startIcon={<GlobeIcon width="20" height="20" />}
        endIcon={<DownArrowIcon style={{marginTop:'10px'}} width="15" height="15" />}
      >
        {lang}
      </Button>

      {/* Dropdown Content */}
      <div className={`content ${open ? 'active' : 'inactive'}`}>
        <LocaleItem img={enFlag} text="English" lang="en" />
        <LocaleItem img={deFlag} text="Deutsch" lang="de" />
      </div>
    </div>
  );
}

export default LocaleSelect;