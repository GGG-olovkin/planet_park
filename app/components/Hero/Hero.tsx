'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);




    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        dischargeCard: '',
        phoneModel: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const registrationTypes = [
        { id: 'sürücü', name: 'Sürücü Qeydiyyatı', href: '/register/driver' },
        { id: 'sahibkar', name: 'Sahibkar Qeydiyyatı', href: '/register/owner' },
        { id: 'kuryer', name: 'Kuryer Qeydiyyatı', href: '/register/courier' }
    ];

    return (
        <div ref={containerRef} className="relative min-h-screen flex items-center justify-center bg overflow-hidden">


            {/* Content Container */}
            <div className="relative backdrop-brightness-50  z-10 container mx-auto px-4 py-8 md:py-36">
                <div className="flex  flex-col lg:flex-row justify-between items-center gap-8 lg:gap-6">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-white space-y-6 text-center lg:text-left w-full lg:w-1/2"
                    >
                        <motion.h1
                            className="text-4xl sm:text-5xl  md:text-6xl font-bold leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <span className="text-white">
                                UBER və Yango Sürücü
                            </span>
                            <br />
                            Qeydiyyat Mərkəzi
                        </motion.h1>

                        <motion.p
                            className="text-lg sm:text-xl text-gray-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Uber platformuna sürücü və ya kurye kimi qoşulun və <br className="hidden sm:block" />
                            gəlir əldə etməyə başlayın.
                        </motion.p>

                        {/* Registration Type Links */}
                        <motion.div
                            className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            {registrationTypes.map((type) => (
                                <motion.div
                                    key={type.id}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link
                                        href={type.href}
                                        className="relative group"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full blur-lg group-hover:blur-xl transition-all duration-500"></div>
                                        <div className="relative bg-yellow-400 text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-yellow-400/25">
                                            {type.name}
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Features */}
                        <motion.div
                            className="space-y-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            {[
                                "Asan və sürətli qeydiyyat prosesi",
                                "Etibarlı tərəfdaşlıq və vaxtında ödənişlər",
                                "Düşük komissiya və əlavə bonuslar"
                            ].map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center justify-center lg:justify-start space-x-3"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                                >
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-sm sm:text-base">{feature}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full lg:w-1/2 max-w-xl"
                    >
                        <div className="relative bg-gray-900/50 backdrop-blur-lg backdrop-brightness-90 rounded-2xl p-8 border border-yellow-400">
                            <motion.h2
                                className="text-2xl font-bold text-white mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                Qeydiyyat Formu
                            </motion.h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {[
                                    { id: 'fullName', label: 'Adınız, Soyadınız *', placeholder: 'Adınız və soyadınızı daxil edin' },
                                    { id: 'phone', label: 'Telefon *', placeholder: '0772707888', type: 'tel', pattern: '[0-9]{10}' },
                                    { id: 'dischargeCard', label: 'Buraxılış kartı (əgər varsa)', placeholder: 'Buraxılış kartı nömrəsini daxil edin' },
                                    { id: 'phoneModel', label: 'Telefon modeli', placeholder: 'Telefon modelini daxil edin' }
                                ].map((field, index) => (
                                    <motion.div
                                        key={field.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                    >
                                        <label htmlFor={field.id} className="block text-sm font-medium text-white mb-2">
                                            {field.label}
                                        </label>
                                        <input
                                            type={field.type || 'text'}
                                            id={field.id}
                                            name={field.id}
                                            value={formData[field.id as keyof typeof formData]}
                                            onChange={handleChange}
                                            required={field.id === 'fullName' || field.id === 'phone'}
                                            pattern={field.pattern}
                                            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-yellow-400 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                                            placeholder={field.placeholder}
                                        />
                                    </motion.div>
                                ))}

                                <motion.button
                                    type="submit"
                                    className="relative group w-full"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 1 }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg blur-lg group-hover:blur-xl transition-all duration-500"></div>
                                    <div className="relative bg-yellow-400 text-black py-3 rounded-lg font-bold hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-yellow-400/25">
                                        Qeydiyyatdan keç
                                    </div>
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;