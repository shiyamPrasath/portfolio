import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass animate-fade-in transition-all">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between relative">
        <a href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 tracking-tighter">
          Shiyam
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-600">
          <a href="/#work" className="hover:text-gray-900 transition-colors">Work</a>
          <a href="/#about" className="hover:text-gray-900 transition-colors">About</a>
          <a href="/#contact" className="hover:text-gray-900 transition-colors">Contact</a>
          <a href="https://drive.google.com/file/d/1nmJQYh4zqkpriuskNbCKDm9GPwQcqInn/view" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors shadow-sm hover:-translate-y-0.5 transform">
            Resume
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button 
          className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-100 p-6 flex flex-col gap-6 animate-fade-in-up">
          <a href="/#work" onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-800 hover:text-gray-900">Work</a>
          <a href="/#about" onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-800 hover:text-gray-900">About</a>
          <a href="/#contact" onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-800 hover:text-gray-900">Contact</a>
          <a href="https://drive.google.com/file/d/1nmJQYh4zqkpriuskNbCKDm9GPwQcqInn/view" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="mt-2 text-center px-4 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors shadow-sm font-medium">
            Resume
          </a>
        </div>
      )}
    </header>
  )
}
