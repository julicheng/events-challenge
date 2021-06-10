import DarkModeToggle from 'react-dark-mode-toggle';

interface Props {
  logo: string;
  onChange: () => void;
}

export default function Header({ logo, onChange }: Props) {
  return (
    <header className='bg-white dark:bg-gray-900 shadow-md flex flex-col'>
      <DarkModeToggle
        onChange={onChange}
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
