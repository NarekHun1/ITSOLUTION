import { Phone, Mail, ArrowUpRight, Sparkles, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../Footer.css';

const PHONE = '+37441083882';
const EMAIL = 'isalationit@gmail.com';
const INSTAGRAM = 'https://www.instagram.com/isolation_it_solutions/';
const FACEBOOK = 'https://www.facebook.com/IsolationIT';

export default function Footer() {
    const { t } = useTranslation();
    const { pathname } = useLocation();
    const year = new Date().getFullYear();
    const openAI = () => window.dispatchEvent(new Event('open-isolation-ai'));

    const navigation = [
        { label: t('nav.home'), to: '/' },
        { label: t('nav.services'), to: '/services' },
        { label: t('nav.projects'), to: '/#projects' },
        { label: t('nav.process'), to: '/process' },
        { label: t('nav.contact'), to: '/contact' },
    ];

    return (
        <footer className={`siteFooter${pathname === '/process' ? ' siteFooterProcess' : ''}`}>
            <div className="footerGlow footerGlowOne" />
            <div className="footerGlow footerGlowTwo" />

            <div className="footerInner">
                <div className="footerCta">
                    <div className="footerCtaCopy">
                        <span className="footerEyebrow">
                            <Sparkles size={15} />
                            {t('footer.eyebrow')}
                        </span>
                        <h2>{t('footer.title')}</h2>
                        <p>{t('footer.description')}</p>
                    </div>

                    <div className="footerCtaActions">
                        <Link to="/start-project" className="footerCtaButton">
                            {t('common.startProject')}
                            <ArrowUpRight size={20} />
                        </Link>
                        <button type="button" className="footerAiButton" onClick={openAI}>
                            <Sparkles size={18} />
                            {t('footer.talkToAI')}
                        </button>
                    </div>
                </div>

                <div className="footerMain">
                    <div className="footerBrand">
                        <Link to="/" className="footerLogo" aria-label="Isolation IT Solutions — home">
                            <span className="brandLogoViewport">
                                <img
                                    className="brandLogoImage"
                                    src="/isolation-logo.png"
                                    alt="Isolation IT Solutions"
                                />
                            </span>
                        </Link>
                        <p>{t('footer.brandText')}</p>



                        <div className="footerSocials">
                            <a
                                href={INSTAGRAM}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                title="Instagram"
                            >

                                <svg
                                    width="21"
                                    height="21"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="url(#footerInstagramGradient)"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    aria-hidden="true"
                                >
                                    <defs>
                                        <linearGradient
                                            id="footerInstagramGradient"
                                            x1="0%"
                                            y1="100%"
                                            x2="100%"
                                            y2="0%"
                                        >
                                            <stop offset="0%" stopColor="#FFDC80" />
                                            <stop offset="25%" stopColor="#FCAF45" />
                                            <stop offset="50%" stopColor="#FD1D1D" />
                                            <stop offset="75%" stopColor="#E1306C" />
                                            <stop offset="100%" stopColor="#833AB4" />
                                        </linearGradient>
                                    </defs>

                                    <rect x="2" y="2" width="20" height="20" rx="5" />
                                    <circle cx="12" cy="12" r="4" />
                                    <circle
                                        cx="17.5"
                                        cy="6.5"
                                        r="1"
                                        fill="url(#footerInstagramGradient)"
                                        stroke="none"
                                    />
                                </svg>

                            </a>

                            <a
                                href={FACEBOOK}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                title="Facebook"
                            >
                                <svg
                                    width="21"
                                    height="21"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.5-3.9 3.78-3.9 1.1 0 2.25.2 2.25.2v2.46H15.2c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
                                </svg>
                            </a>
                        </div>


                    </div>

                    <div className="footerColumn">
                        <h3>{t('footer.navigation')}</h3>
                        <nav className="footerNav" aria-label={t('footer.navigation')}>
                            {navigation.map((item) => (
                                <Link key={item.to} to={item.to}>{item.label}</Link>
                            ))}
                        </nav>
                    </div>

                    <div className="footerColumn footerContacts">
                        <h3>{t('footer.contact')}</h3>
                        <a href={`tel:${PHONE}`}>
                            <Phone size={17} />
                            <span>+374 41 083882</span>
                        </a>
                        <a href={`mailto:${EMAIL}`}>
                            <Mail size={17} />
                            <span>{EMAIL}</span>
                        </a>
                        <a
                            href="https://yandex.com/maps/?text=Hakob%20Hakobyan%203%20Yerevan"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <MapPin size={17} />
                            <span>{t('footer.address')}</span>
                        </a>
                    </div>
                </div>

                <div className="footerBottom">
                    <span>© {year} Isolation IT Solutions.</span>
                    <span>{t('footer.rights')}</span>
                </div>
            </div>
        </footer>
    );
}
