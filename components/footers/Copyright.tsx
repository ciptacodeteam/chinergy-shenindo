'use client';

import Link from 'next/link';

const Copyright = () => {
  return (
    <div className='relative max-w-7xl mx-auto mb-8 z-20 px-4 lg:px-0 flex justify-center'>
      <div className='flex text-white text-xs mt-10'>
        ©{new Date().getFullYear()} CV. Chinergi Shenindo. Designed and
        Developed by
        <Link
          href='https://ciptacode.id/'
          className='ms-1 hover:text-secondary transition-colors duration-300'
          target='_blank'
          rel='noopener noreferrer'
        >
          Ciptacode
        </Link>
      </div>
    </div>
  );
};
export default Copyright;
