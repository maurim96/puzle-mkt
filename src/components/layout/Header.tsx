import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-500 py-4 px-8 text-white">
      <nav className="w-full mx-auto flex justify-between">
        <div className="flex space-x-4">
          <Link href="/">Home</Link>
          <Link href="#services">Services</Link>
          <Link href="#about">About Us</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
