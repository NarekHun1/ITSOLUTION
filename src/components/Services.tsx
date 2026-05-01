import { useTranslation } from 'react-i18next';
import '../services.css';
export default function Services() {
    const { t } = useTranslation();

    const services = [
        {
            title: t('services.items.website.title'),
            desc: t('services.items.website.desc'),
            icon: '💰',
        },
        {
            title: t('services.items.saas.title'),
            desc: t('services.items.saas.desc'),
            icon: '🚀',
        },
        {
            title: t('services.items.ai.title'),
            desc: t('services.items.ai.desc'),
            icon: '🤖',
        },
        {
            title: t('services.items.telegram.title'),
            desc: t('services.items.telegram.desc'),
            icon: '📱',
        },
        {
            title: t('services.items.crm.title'),
            desc: t('services.items.crm.desc'),
            icon: '🧠',
        },
        {
            title: t('services.items.automation.title'),
            desc: t('services.items.automation.desc'),
            icon: '⚙️',
        },
    ];

    return (
        <section className="section" id="services">
            <div className="container">
                <div className="sectionHead">
                    <h2>{t('services.title')}</h2>
                    <p>{t('services.desc')}</p>
                </div>

                <div className="servicesGrid">
                    {services.map((item, index) => (
                        <div className="serviceCard" key={index}>
                            <h3>
                                {item.icon} {item.title}
                            </h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}