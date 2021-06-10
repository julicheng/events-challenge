import { useCallback, useMemo, useState } from 'react';
import blacklogo from '../../assets/blacklogo.png';
import whitelogo from '../../assets/whitelogo.png';

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
  }, [localStorage.theme]);

  return (
    <header className='bg-white dark:bg-gray-900 shadow-md'>
      <div className='flex justify-center pt-10 pb-6'>
        <img src={logo} alt='logo' className='w-60' />
      </div>
      <div>
        <button className='dark:text-red-400' onClick={handleOnClick}>
          toggle
        </button>
      </div>
    </header>
  );
}
