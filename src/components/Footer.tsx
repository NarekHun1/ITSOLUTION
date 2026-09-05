import { ArrowUpRight, Mail, MapPin, Phone, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../Footer.css';

const PHONE = '+37441083882';
const EMAIL = 'isalationit@gmail.com';
const INSTAGRAM = 'https://www.instagram.com/isolation_it_solutions/';
const FACEBOOK = 'https://www.facebook.com/IsolationIT';

export default function Footer() {
    const { t } = useTranslation();
    const year = new Date().getFullYear();

    const navigation = [
        { label: t('nav.home'), to: '/' },
        { label: t('nav.services'), to: '/services' },
        { label: t('nav.projects'), to: '/#projects' },
        { label: t('nav.process'), to: '/process' },
        { label: t('nav.contact'), to: '/contact' },
    ];

    return (
        <footer className="siteFooter">
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

                    <Link to="/start-project" className="footerCtaButton">
                        {t('common.startProject')}
                        <ArrowUpRight size={20} />
                    </Link>
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
                            <a href={INSTAGRAM} target="_blank" rel="noreferrer">
                                Instagram <ArrowUpRight size={14} />
                            </a>
                            <a href={FACEBOOK} target="_blank" rel="noreferrer">
                                Facebook <ArrowUpRight size={14} />
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
