'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { FaCar, FaUsers, FaPercent, FaDesktop, FaFileAlt, FaShieldAlt, FaAd, FaMapMarkedAlt, FaTools, FaHandshake, FaMoneyBillWave, FaPhone, FaStar } from 'react-icons/fa';

const Terms = () => {
    const [activeSection, setActiveSection] = useState<string>('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);



    const sections = [
        { id: 'features', title: 'Xüsusiyyətlər', icon: <FaStar /> },
        { id: 'offers', title: 'Təkliflər', icon: <FaHandshake /> },
        { id: 'salary', title: 'Maaş Aralıqları', icon: <FaMoneyBillWave /> },
        { id: 'car-offer', title: 'Chevrolet Cobalt Təklifi', icon: <FaCar /> },
        { id: 'contact', title: 'Əlaqə', icon: <FaPhone /> }
    ];

    const features = [
        { icon: <FaCar className="w-6 h-6" />, title: 'Taksi parkın yaradılması' },
        { icon: <FaUsers className="w-6 h-6" />, title: 'Bütün avtomobillərin sürücü ilə təmin edilməsi' },
        { icon: <FaUsers className="w-6 h-6" />, title: 'Peşəkar və təcrübəli kollektiv' },
        { icon: <FaPercent className="w-6 h-6" />, title: 'Standart komissiyadan daha aşağı komissiya dərəcəsi' },
        { icon: <FaDesktop className="w-6 h-6" />, title: '3 reklamlı avtomobildən sonra, izləmə paneli FLEET-in verilməsi' },
        { icon: <FaFileAlt className="w-6 h-6" />, title: 'Buraxılış vəsiqəsi və avtomobillərin buraxılış kartları üçün AZƏRBAYCAN YERÜSTÜ NƏQLİYYAT AGENTLİYİ-nə müraciət' },
        { icon: <FaShieldAlt className="w-6 h-6" />, title: 'Avtomobillərin kasko və icbari sığortasına dəstək' },
        { icon: <FaAd className="w-6 h-6" />, title: 'Avtomobillərin reklam icazə sənədinin hazırlanması və reklam vurulması' },
        { icon: <FaMapMarkedAlt className="w-6 h-6" />, title: 'Avtomobillərə Gps-in ödənişsiz biz tərəfdən quraşdırılması' },
        { icon: <FaTools className="w-6 h-6" />, title: 'Avtomobillərə öz servizimizdən 30% endirim' },
        { icon: <FaHandshake className="w-6 h-6" />, title: 'Əməkdaşlıq etdiyimiz klinkalarda sizə özəl endirim' },
        { icon: <FaMoneyBillWave className="w-6 h-6" />, title: 'Sürətli köçürmə biz tərəfdən, həmçinin ödənişlərinizi istədiyiniz zaman nağdlaşdırma imkanı' }
    ];

    const offers = [
        { icon: '💰', title: 'Qazancına bizimlə qazanc qat' },
        { icon: '🚕', title: 'Öz maşının ilə parkımıza qoşul' },
        { icon: '👨🏻‍✈‍', title: 'Parkımıza sürücü dəvət et, gətirdiyiniz hər sürücü üçün 50 azn mükafat əldə et' }
    ];

    const salaryRanges = [
        { range: '500₼-650₼', percentage: '45%' },
        { range: '650₼-800₼', percentage: '50%' },
        { range: '800₼+ yuxarı', percentage: 'Nə işləndisə sürücünündür' }
    ];

    const carOffer = [
        { title: 'Qiymət', value: '25875 azn (1 illik Kasko sığorta daxil)' },
        { title: 'İlkin ödəniş', value: '5500 deyil, 3200 azn' },
        { title: 'İllik', value: '16% (aylıq ödəniş güzəştlə 552 azn)' },
        { title: 'Müddət', value: '60 ay' },
        { title: 'İtalQaz-da qaz avadanlığı', value: 'Təchiz olunursa qarantiya verilir' },
        { title: 'Yol vərəqəsi', value: '50 azn' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section[id]');
            const scrollY = window.pageYOffset;

            sections.forEach(section => {
                const sectionHeight = (section as HTMLElement).offsetHeight;
                const sectionTop = (section as HTMLElement).offsetTop - 100;
                const sectionId = section.getAttribute('id');

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    setActiveSection(sectionId || '');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
            console.log(isMobileMenuOpen)
        }
    };

    return (
        <div ref={containerRef} className="relative min-h-screen bg-black overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50"></div>
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 50% 50%, rgba(234, 179, 8, 0.1) 0%, transparent 50%)`,
                }}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text">
                            Uber və Yango–nun Azərbaycanda №1 və ən etibarlı partnyoru
                        </span>
                    </h1>
                    <p className="text-xl text-gray-300">
                        Sahibkarlar üçün sərfəli təkliflər ilə qarşınızdayıq!
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sticky Navigation */}
                    <div className="lg:w-1/4 h-screen">
                        <div className="!lg:sticky h-screen lg:top-8">
                            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
                                <h2 className="text-xl font-bold text-yellow-400 mb-6">Sürətli Keçid</h2>
                                <nav className="space-y-2">
                                    {sections.map((section) => (
                                        <button
                                            key={section.id}
                                            onClick={() => scrollToSection(section.id)}
                                            className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 ${activeSection === section.id
                                                ? 'bg-yellow-400/20 text-yellow-400'
                                                : 'text-gray-300 hover:bg-gray-800/50'
                                                }`}
                                        >
                                            <span className="text-lg">{section.icon}</span>
                                            <span>{section.title}</span>
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:w-3/4 space-y-12">
                        {/* Features Section */}
                        <section id="features" className="scroll-mt-20">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-yellow-400/50 transition-all duration-300"
                            >
                                <h2 className="text-3xl font-bold text-yellow-400 mb-8 flex items-center gap-3">
                                    <FaStar className="text-2xl" />
                                    Xüsusiyyətlər
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {features.map((feature, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: index * 0.1 }}
                                            className="flex items-start gap-4 p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300"
                                        >
                                            <div className="text-yellow-400 mt-1">
                                                {feature.icon}
                                            </div>
                                            <p className="text-white">{feature.title}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </section>

                        {/* Offers Section */}
                        <section id="offers" className="scroll-mt-20">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-yellow-400/50 transition-all duration-300"
                            >
                                <h2 className="text-3xl font-bold text-yellow-400 mb-8 flex items-center gap-3">
                                    <FaHandshake className="text-2xl" />
                                    Təkliflər
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {offers.map((offer, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: index * 0.2 }}
                                            className="bg-gray-800/30 p-6 rounded-lg text-center hover:bg-gray-800/50 transition-all duration-300"
                                        >
                                            <div className="text-4xl mb-4">{offer.icon}</div>
                                            <p className="text-white">{offer.title}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </section>

                        {/* Salary Ranges Section */}
                        <section id="salary" className="scroll-mt-20">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-yellow-400/50 transition-all duration-300"
                            >
                                <h2 className="text-3xl font-bold text-yellow-400 mb-8 flex items-center gap-3">
                                    <FaMoneyBillWave className="text-2xl" />
                                    Maaş Aralıqları
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {salaryRanges.map((range, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: index * 0.2 }}
                                            className="bg-gray-800/30 p-6 rounded-lg text-center hover:bg-gray-800/50 transition-all duration-300"
                                        >
                                            <div className="text-2xl font-bold text-yellow-400 mb-2">{range.range}</div>
                                            <div className="text-white">{range.percentage}</div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </section>

                        {/* Car Offer Section */}
                        <section id="car-offer" className="scroll-mt-20">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-yellow-400/50 transition-all duration-300"
                            >
                                <h2 className="text-3xl font-bold text-yellow-400 mb-8 flex items-center gap-3">
                                    <FaCar className="text-2xl" />
                                    Chevrolet Cobalt Təklifi
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {carOffer.map((offer, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: index * 0.1 }}
                                            className="bg-gray-800/30 p-6 rounded-lg hover:bg-gray-800/50 transition-all duration-300"
                                        >
                                            <div className="text-xl font-bold text-yellow-400 mb-2">{offer.title}</div>
                                            <div className="text-white">{offer.value}</div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </section>

                        {/* Contact Section */}
                        <section id="contact" className="scroll-mt-20">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-yellow-400/50 transition-all duration-300"
                            >
                                <h2 className="text-3xl font-bold text-yellow-400 mb-8 flex items-center gap-3">
                                    <FaPhone className="text-2xl" />
                                    Əlaqə
                                </h2>
                                <div className="text-center">
                                    <p className="text-xl text-white mb-6">
                                        🌍 Planet Parka qoşul, planetin 🌍 ən yaxşı sürücüsü sən ol.
                                    </p>
                                    <p className="text-lg text-gray-300 mb-8">
                                        Sertifikatın var, avtomobilin yoxdur? Problem yoxdur, sertifikat səndən, avtomobil bizdən.
                                        Elə isə Planet Parka 🌍 zəng et, arzuladığın əmək haqqını əldə et 🌍.
                                    </p>
                                    <div className="text-2xl font-bold text-yellow-400 mb-4">
                                        📞 (055)790-00-60
                                    </div>
                                    <p className="text-xl text-white">
                                        🌍 Planet Parka zəng et, öz planetini kəşf et 🌍
                                    </p>
                                </div>
                            </motion.div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Terms; 