import blacklogo from '../../assets/blacklogo.png';

export default function Header() {
  return (
    <header className='bg-white shadow-md'>
      <div className='flex justify-center p-6'>
        <img src={blacklogo} alt='logo' className='w-60' />
      </div>
    </header>
  );
}
