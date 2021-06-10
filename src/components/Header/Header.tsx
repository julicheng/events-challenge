import { useCallback, useState } from 'react';
import blacklogo from '../../assets/blacklogo.png';
import whitelogo from '../../assets/whitelogo.png';
import DarkModeToggle from 'react-dark-mode-toggle';

export default function Header() {
  const [logo, setLogo] = useState(
    localStorage.getItem('theme') === 'dark' ? whitelogo : blacklogo
  );

  const handleOnClick = useCallback(() => {
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setLogo(blacklogo);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setLogo(whitelogo);
    }
  }, []);

  return (
    <header className='bg-white dark:bg-gray-900 shadow-md flex flex-col'>
      <DarkModeToggle
        onChange={handleOnClick}
        size='50'
        checked={localStorage.getItem('theme') === 'dark'}
        className='m-3 self-end'
      />
      <div className='flex justify-center  pb-10'>
        <img src={logo} alt='logo' className='w-60' />
      </div>
    </header>
  );
}
