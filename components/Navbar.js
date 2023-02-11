import Link from 'next/link';
import Image from 'next/image';
import Navlink from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <div className='logo'>xy</div>
      <div className='navlinks'></div>

      <Image src={'/xy4-min.jpg'} fill className='imgs' />
    </nav>
  );
}
