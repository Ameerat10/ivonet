// // src/components/LanguageSwitcher.js
// import React from 'react';
// import { useTranslation } from 'react-i18next';

// const LanguageSwitcher = () => {
//   const { i18n } = useTranslation();

//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//   };

//   return (
//     <div className="language-switcher flex gap-4">
//       <button className='font-bold' onClick={() => changeLanguage('en')}>ENGLISH</button>
//       <button className='font-bold' onClick={() => changeLanguage('fr')}>FRENCH</button>
//     </div>
//   );
// };

// export default LanguageSwitcher;

// src/components/LanguageSwitcher.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="language-switcher fixed top-0 my-2">
      <select className="font-bold text-[#6762eacc] uppercase" onChange={changeLanguage} defaultValue="en">
        <option value="en">English</option>
        <option value="fr">French</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
