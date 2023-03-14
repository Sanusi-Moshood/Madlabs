import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='footer'>
      Designed and developed by{' '}
      <Link href={'https://twitter.com/sanusim0sh00d'} target='_blank'>
        Sanusi Moshood
      </Link>
    </div>
  );
};

export default Footer;
