'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaCar, FaPhone, FaWhatsapp, FaShieldAlt, FaClock } from 'react-icons/fa';

const CTA = () => {
    return (
        <section className="relative bg-black py-0 overflow-hidden">
            {/* Background Elements */}

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center md:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="inline-block px-4 py-2 rounded-full  mb-6"
                        >
                            <span className="text-yellow-400 font-medium">Yeni Təklif</span>
                        </motion.div>

                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-transparent bg-clip-text">
                                Uber və Yango Sürücüsü Olun
                            </span>
                        </h2>

                        <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                            Həftəlik 1000-1500 AZN qazanmaq istəyirsiniz?
                            <br />
                            <span className="text-yellow-400 font-semibold">
                                Planet Parka qoşulun və öz biznesinizi başladın!
                            </span>
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {[
                                { icon: <FaCar className="w-5 h-5" />, text: 'Öz Avtomobiliniz' },
                                { icon: <FaClock className="w-5 h-5" />, text: '24/7 Dəstək' },
                                { icon: <FaWhatsapp className="w-5 h-5" />, text: 'WhatsApp Dəstəyi' },
                                { icon: <FaShieldAlt className="w-5 h-5" />, text: 'Avtomobil Təklifi' }
                            ].map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group flex items-center gap-3 p-4 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-yellow-400/50 transition-all duration-300 hover:bg-gray-900/80"
                                >
                                    <span className="text-yellow-400 group-hover:scale-110 transition-transform duration-300">{feature.icon}</span>
                                    <span className="text-white font-medium">{feature.text}</span>
                                </motion.div>
                            ))}
                        </div>
                        <div className="flex flex-col gap-4 mt-8">
                            <motion.a
                                href="tel:0557900060"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex items-center justify-center gap-3 px-8 py-4 bg-yellow-400 text-black font-bold rounded-xl hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-yellow-400/25 w-full md:w-auto"
                            >
                                <FaPhone className="w-5 h-5" />
                                Zəng Edin
                            </motion.a>
                            <motion.a
                                href="https://wa.me/994557900060"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex items-center justify-center gap-3 px-8 py-4 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-green-500/25 w-full md:w-auto"
                            >
                                <FaWhatsapp className="w-5 h-5" />
                                WhatsApp
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Right Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative aspect-square">
                            {/* Animated Background */}

                            {/* Car Animation */}
                            <div style={{ backgroundImage: 'url(./uber.gif)' }} className="absolute inset-0 flex rounded-4xl items-center justify-center">
                                <motion.div
                                    animate={{
                                        y: [0, -20, 0],
                                        rotate: [0, 5, -5, 0]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="text-9xl text-yellow-400 drop-shadow-2xl"
                                >

                                </motion.div>
                            </div>
                        </div>

                        {/* CTA Buttons */}

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CTA; 