import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true); // default is true

  // Apply dark class on mount if darkMode is true
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-primary-light dark:bg-background-dark shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <Link to="/" className="text-primary font-bold text-2xl flex items-center gap-2">
        <img src='/logo.png' alt='brand_logo' className='h-10 w-10'/>
          Pawgram
        </Link>

        {/* Navigation - hidden on small screens */}
        <nav className="hidden md:flex space-x-8 text-text-light dark:text-text-muted">
          <Link to="/" className="hover:text-primary dark:hover:text-primary-light">Home</Link>
          <Link to="/breeds" className="hover:text-primary dark:hover:text-primary-light">Breeds</Link>
          <Link to="/stories" className="hover:text-primary dark:hover:text-primary-light">Stories</Link>
          <Link to="/about" className="hover:text-primary dark:hover:text-primary-light">About</Link>
        </nav>

        {/* Account & dark mode toggle & mobile menu toggle */}
        <div className="flex items-center space-x-4">
          <button className="text-text-light dark:text-text-muted hover:text-primary dark:hover:text-primary-light transition">
            Account
          </button>

          {/* Dark mode toggle button */}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
            className="p-2 rounded-full hover:bg-primary-light dark:hover:bg-background-dark transition"
          >
            {darkMode ? (
              // Sun icon (light mode)
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.66-9H21m-18 0H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 100 10 5 5 0 000-10z" />
              </svg>
            ) : (
              // Moon icon (dark mode)
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
              </svg>
            )}
          </button>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-text-light dark:text-text-muted focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {/* Simple hamburger icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" /> // X icon
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" /> // hamburger icon
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <nav className="md:hidden bg-primary-light dark:bg-background-dark px-4 py-4 space-y-2 text-text-light dark:text-text-muted">
          <Link to="/" className="block hover:text-primary dark:hover:text-primary-light">Home</Link>
          <Link to="/breeds" className="block hover:text-primary dark:hover:text-primary-light">Breeds</Link>
          <Link to="/stories" className="block hover:text-primary dark:hover:text-primary-light">Stories</Link>
          <Link to="/about" className="block hover:text-primary dark:hover:text-primary-light">About</Link>
          <button className="w-full text-left text-text-light dark:text-text-muted hover:text-primary dark:hover:text-primary-light">
            Account
          </button>
          {/* Dark mode toggle in mobile menu */}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
            className="w-full text-left text-text-light dark:text-text-muted hover:text-primary dark:hover:text-primary-light"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </nav>
      )}
    </header>
  );
}
