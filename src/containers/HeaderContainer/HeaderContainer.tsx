import React, { useCallback, useEffect, useState } from 'react';
import Header from '../../components/Header';
import blacklogo from '../../assets/blacklogo.png';
import whitelogo from '../../assets/whitelogo.png';

export default function HeaderContainer() {
  const [logo, setLogo] = useState(
    localStorage.getItem('theme') === 'dark' ? whitelogo : blacklogo
  );

  const handleOnChange = useCallback(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setLogo(blacklogo);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setLogo(whitelogo);
    }
  }, []);

  useEffect(() => {
    localStorage.getItem('theme') === 'dark'
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.add('light');
  }, []);

  return <Header logo={logo} onChange={handleOnChange} />;
}
