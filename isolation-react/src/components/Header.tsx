import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Header() {
    const [open, setOpen] = useState(false);
    const { t, i18n } = useTranslation();

    const links = [
        { label: t('nav.home'), to: '/' },
        { label: t('nav.services'), to: '/#services' },
        { label: t('nav.projects'), to: '/#projects' },
        { label: t('nav.process'), to: '/#process' },
        { label: t('nav.contact'), to: '/#contact' },
    ];

    return (
        <>
            <header className="header">
                <div className="container headerInner">
                    {/* Logo */}
                    <Link to="/" className="logo">
                        <span className="logoMark" />
                        <span>Isolation IT Solutions</span>
                    </Link>

                    {/* Desktop nav */}
                    <nav className="nav">
                        {links.map((link) => (
                            <Link key={link.to} to={link.to}>
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Right side */}
                    <div className="headerRight">
                        {/* 🌍 Language Switch */}
                        <div className="langSwitch">
                            <button onClick={() => i18n.changeLanguage('en')}>EN</button>
                            <button onClick={() => i18n.changeLanguage('ru')}>RU</button>
                            <button onClick={() => i18n.changeLanguage('hy')}>HY</button>
                        </div>

                        {/* CTA */}
                        <Link to="/start-project" className="btn primary desktopOnly">
                            {t('common.startProject')}
                        </Link>

                        {/* Menu button */}
                        <button className="menuBtn" onClick={() => setOpen(true)}>
                            <Menu size={28} />
                        </button>
                    </div>
                </div>
            </header>

            {/* 🔥 Ultra Menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        className="ultraMenuOverlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="ultraMenuLines" />

                        <motion.div
                            className="ultraMenuPanel"
                            initial={{ y: -60, opacity: 0, scale: 0.96 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: -40, opacity: 0, scale: 0.96 }}
                            transition={{ duration: 0.45 }}
                        >
                            {/* Top */}
                            <div className="ultraMenuTop">
                                <Link to="/" className="logo" onClick={() => setOpen(false)}>
                                    <span className="logoMark" />
                                    <span>Isolation IT Solutions</span>
                                </Link>

                                <button className="closeBtn" onClick={() => setOpen(false)}>
                                    <X size={30} />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="ultraMenuContent">
                                {/* Links */}
                                <div className="ultraMenuLeft">
                                    {links.map((link, index) => (
                                        <motion.div
                                            key={link.to}
                                            initial={{ x: -40, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 0.08 * index }}
                                        >
                                            <Link
                                                to={link.to}
                                                className="ultraMenuLink"
                                                onClick={() => setOpen(false)}
                                            >
                                                <span>{String(index + 1).padStart(2, '0')}</span>
                                                {link.label}
                                                <ArrowUpRight size={26} />
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Right block */}
                                <motion.div
                                    className="ultraMenuRight"
                                    initial={{ x: 40, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.25 }}
                                >
                                    <span className="menuEyebrow">
                                        {t('menu.title')}
                                    </span>

                                    <h3>{t('menu.subtitle')}</h3>

                                    <p>{t('menu.desc')}</p>

                                    <Link
                                        to="/start-project"
                                        onClick={() => setOpen(false)}
                                        className="btn primary"
                                    >
                                        {t('common.startProject')}
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}