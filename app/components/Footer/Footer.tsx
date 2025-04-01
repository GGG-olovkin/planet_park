'use client';

import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaTiktok, FaFacebook, FaWhatsapp, FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: FaInstagram, href: 'https://instagram.com/metropark', label: 'Instagram' },
        { icon: FaTiktok, href: 'https://tiktok.com/@metropark', label: 'TikTok' },
        { icon: FaFacebook, href: 'https://facebook.com/metropark', label: 'Facebook' }
    ];

    const contactInfo = [
        { icon: FaWhatsapp, text: '+994 77 270 78 88', href: 'https://wa.me/994772707888' },
        { icon: FaPhone, text: '+994 50 270 78 88', href: 'tel:+994502707888' },
        { icon: FaMapMarkerAlt, text: 'Bakı şəhəri, Nərimanov rayonu, Mərdəkan qəsəbəsi', href: '#' },
        { icon: FaClock, text: 'Hər gün: 09:00 - 18:00', href: '#' },
        { icon: FaEnvelope, text: 'info@metropark.az', href: 'mailto:info@metropark.az' }
    ];

    const quickLinks = [
        { text: 'Ana Səhifə', href: '/' },
        { text: 'Sürücü Qeydiyyatı', href: '/register/driver' },
        { text: 'Sahibkar Qeydiyyatı', href: '/register/owner' },
        { text: 'Kuryer Qeydiyyatı', href: '/register/courier' },
        { text: 'Əlaqə', href: '/contact' }
    ];

    return (
        <footer className="bg-black text-white py-12 md:py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-yellow-400">MetroPark</h3>
                        <p className="text-gray-400 text-sm">
                            Uber platformuna sürücü , sahibkar və ya kurye kimi qoşulun və gəlir əldə etməyə başlayın.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <Link
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-6 h-6" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-yellow-400">Sürətli Keçidlər</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-sm"
                                    >
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-yellow-400">Əlaqə</h4>
                        <ul className="space-y-3">
                            {contactInfo.map((contact, index) => (
                                <li key={index} className="flex items-center space-x-3">
                                    <contact.icon className="text-yellow-400 w-5 h-5" />
                                    <Link
                                        href={contact.href}
                                        className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-sm"
                                    >
                                        {contact.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-yellow-400">Yeniliklərdən Xəbərdar Olun</h4>
                        <p className="text-gray-400 text-sm">
                            Ən son yeniliklərdən və kampaniyalardan xəbərdar olmaq üçün abunə olun.
                        </p>
                        <form className="space-y-3">
                            <input
                                type="email"
                                placeholder="E-poçt ünvanınız"
                                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                            />
                            <button
                                type="submit"
                                className="w-full bg-yellow-400 text-black py-2 rounded-lg font-medium hover:bg-yellow-500 transition-colors duration-300 text-sm"
                            >
                                Abunə Ol
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-400 text-sm">
                            © {currentYear} MetroPark. Bütün hüquqlar qorunur.
                        </p>
                        <div className="flex space-x-6">
                            <Link href="/privacy" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-sm">
                                Gizlilik Siyasəti
                            </Link>
                            <Link href="/terms" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-sm">
                                İstifadə Şərtləri
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 