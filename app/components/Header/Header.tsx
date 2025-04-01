'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Header'ı göster/gizle
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            // Scroll durumunu kontrol et
            setIsScrolled(currentScrollY > 50);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const navigation = [
        { name: 'Ana Səhifə', href: '/' },
        { name: 'Haqqımızda', href: '/about' },
        { name: 'Qalereya', href: '/gallery' },
        { name: 'Xidmətlərimiz', href: '/services' },
        { name: 'İstifadə şərtləri', href: '/terms' },
        { name: 'Əlaqə', href: '/contact' },
    ];

    return (
        <header
            className={`fixed w-full top-0 z-50 transition-all duration-500 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'
                } ${isScrolled
                    ? 'bg-black/95 backdrop-blur-md shadow-lg'
                    : 'bg-black'
                }`}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0 flex items-center space-x-2 group">
                            <span className="text-3xl font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">UBER</span>
                            <span className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">Azərbaycan</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 relative group"
                            >
                                {item.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}

                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="relative w-10 h-10 flex items-center justify-center rounded-lg text-gray-300 hover:text-yellow-400 hover:bg-gray-800/50 focus:outline-none transition-all duration-300"
                            aria-label="Toggle menu"
                        >
                            <div className="relative w-6 h-6">
                                <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                                    }`}></span>
                                <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'
                                    }`}></span>
                                <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                                    }`}></span>
                            </div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation */}
            <div
                className={`md:hidden fixed inset-x-0 top-20 bg-black/95 backdrop-blur-md border-t border-gray-800 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
            >
                <div className="px-4 pt-2 pb-3 space-y-1">
                    {navigation.map((item, index) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-gray-300 hover:text-yellow-400 block px-3 py-3 rounded-md text-base font-medium hover:bg-gray-800/50 transition-all duration-300"
                            onClick={() => setIsMenuOpen(false)}
                            style={{
                                animationDelay: `${index * 100}ms`,
                                animation: isMenuOpen ? 'slideIn 0.3s ease-out forwards' : 'none'
                            }}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <button
                        className="w-full bg-yellow-400 text-black px-6 py-3 rounded-full text-sm font-bold hover:bg-yellow-500 transition-all duration-300 mt-4 shadow-lg hover:shadow-yellow-400/25"
                        style={{
                            animationDelay: `${navigation.length * 100}ms`,
                            animation: isMenuOpen ? 'slideIn 0.3s ease-out forwards' : 'none'
                        }}
                    >
                        Daxil ol
                    </button>
                </div>
            </div>

            <style jsx global>{`
                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateX(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            `}</style>
        </header>
    );
};

export default Header; 