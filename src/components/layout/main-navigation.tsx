'use client';

import Link from 'next/link';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

const MainNavigation = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/login');
  };

  return (
    <nav className='px-2.5 py-4 flex justify-between items-center border-b border-red-300 sticky h-16 shadow-md'>
      <div>
        <Link href='/'>logo</Link>
      </div>
      <div className='flex justify-between gap-3 items-center text-sm sm:text-base'>
        <Button
          // className='hidden md:block'
          onClick={handleClick}
          className='py px-2 sm:p-4 cursor-pointer bg-red-500 text-white rounded-md hover:bg-red-700 transition-all duration-200 ease-in-out'
        >
          Login
        </Button>
      </div>
    </nav>
  );
};

export default MainNavigation;
