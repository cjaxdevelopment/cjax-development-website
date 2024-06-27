import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-800 p-4 fixed top-0 left-0 z-10">
      <ul className="flex justify-center space-x-8 text-white">
        <li>
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
