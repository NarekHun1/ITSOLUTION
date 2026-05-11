import {
    MapPin,
    Phone,
    Mail,
    Navigation,
    ArrowRight,
    Sparkles,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../ContactPage.css';

export default function ContactPage() {
    const { t } = useTranslation();

    const phone = '+37441083882';
    const email = 'isalationit@gmail.com';
    const address = 'Hakob Hakobyan 3, Yerevan';

    const yandexMapUrl =
        'https://yandex.com/maps/?text=Hakob%20Hakobyan%203%20Yerevan';

    return (
        <main className="contactPage">
            <section className="contactHero">
                <div className="contactGlow contactGlowOne" />
                <div className="contactGlow contactGlowTwo" />

                <motion.div
                    className="contactContent"
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="contactBadge">
                        <Sparkles size={16} />
                        {t('contact.badge')}
                    </span>

                    <h1>
                        {t('contact.title1')}
                        <span> {t('contact.title2')}</span>
                    </h1>

                    <p>{t('contact.desc')}</p>

                    <div className="contactActions">
                        <Link to="/start-project" className="contactPrimaryBtn">
                            {t('contact.startProject')}
                            <ArrowRight size={18} />
                        </Link>

                        <a href={`tel:${phone}`} className="contactSecondaryBtn">
                            {t('contact.callNow')}
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    className="contactCards"
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                >
                    <a href={`tel:${phone}`} className="contactInfoCard">
                        <div>
                            <Phone size={24} />
                        </div>
                        <span>{t('contact.phoneLabel')}</span>
                        <strong>{phone}</strong>
                    </a>

                    <a href={`mailto:${email}`} className="contactInfoCard">
                        <div>
                            <Mail size={24} />
                        </div>
                        <span>{t('contact.emailLabel')}</span>
                        <strong>{email}</strong>
                    </a>

                    <a
                        href={yandexMapUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="contactInfoCard"
                    >
                        <div>
                            <MapPin size={24} />
                        </div>
                        <span>{t('contact.addressLabel')}</span>
                        <strong>{address}</strong>
                    </a>
                </motion.div>
            </section>

            <section className="contactMapSection">
                <div className="contactMapText">
                    <span>{t('contact.locationLabel')}</span>

                    <h2>{t('contact.mapTitle')}</h2>

                    <p>{t('contact.mapDesc')}</p>

                    <a
                        href={yandexMapUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="navigatorBtn"
                    >
                        <Navigation size={18} />
                        {t('contact.openNavigator')}
                    </a>
                </div>

                <a
                    href={yandexMapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mapBox"
                >
                    <iframe
                        title="Isolation IT Solutions Location"
                        src="https://yandex.com/map-widget/v1/?text=Hakob%20Hakobyan%203%20Yerevan&z=16"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allowFullScreen
                    />
                </a>
            </section>
        </main>
    );
}