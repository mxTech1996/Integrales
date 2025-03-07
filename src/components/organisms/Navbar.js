'use client';

import { navData, dataSite } from '@/data';
import Image from 'next/image';
import Link from 'next/link';
import { FaCartArrowDown } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className='w-full bg-white sticky top-0 z-20'>
      <nav className='container mx-auto'>
        <div className='flex justify-between items-center px-8  text-black'>
          <Link className='font-bold text-lg' href='/'>
            {dataSite.iconImage && (
              <Image
                src={dataSite.iconImage}
                alt={dataSite.name}
                width={200}
                height={200}
                className='h-[75px] w-[75px] object-cover'
              />
            )}
          </Link>

          <nav className='flex space-x-4'>
            {navData.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className='hover:bg-third hover:text-white hover:-skew-x-6 transition-colors p-2'
              >
                {item.label}
              </Link>
            ))}

            <Link
              href='/my-cart'
              className='bg-third text-white p-2 flex items-center gap-1 px-4'
            >
              My Cart <FaCartArrowDown />
            </Link>
          </nav>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
