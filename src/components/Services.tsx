import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../services.css';

import reactIcon from '../assets/icons/react.svg';
import nodeIcon from '../assets/icons/nodedotjs.svg';
import dockerIcon from '../assets/icons/docker.svg';
import postgresIcon from '../assets/icons/postgresql.svg';
import nestIcon from '../assets/icons/nestjs.svg';
import tsIcon from '../assets/icons/typescript.svg';
import prismaIcon from '../assets/icons/prisma.svg';

export default function ServicesPage() {
    const { t } = useTranslation();

    const services = [
        {
            icon: '💻',
            title: t('servicesPage.list.website.title'),
            desc: t('servicesPage.list.website.desc'),
            features: [
                t('features.responsive'),
                t('features.seo'),
                t('features.fast'),
                t('features.admin'),
            ],
        },
        {
            icon: '🚀',
            title: t('servicesPage.list.saas.title'),
            desc: t('servicesPage.list.saas.desc'),
            features: [
                t('features.auth'),
                t('features.dashboard'),
                t('features.payments'),
                t('features.scalable'),
            ],
        },
        {
            icon: '🤖',
            title: t('servicesPage.list.ai.title'),
            desc: t('servicesPage.list.ai.desc'),
            features: [
                t('features.chatbot'),
                t('features.textgen'),
                t('features.recommendations'),
                t('features.automation'),
            ],
        },
        {
            icon: '📱',
            title: t('servicesPage.list.telegram.title'),
            desc: t('servicesPage.list.telegram.desc'),
            features: [
                t('features.telegramBot'),
                t('features.miniapp'),
                t('features.admin'),
                t('features.notifications'),
            ],
        },
        {
            icon: '🧠',
            title: t('servicesPage.list.crm.title'),
            desc: t('servicesPage.list.crm.desc'),
            features: [
                t('features.users'),
                t('features.analytics'),
                t('features.roles'),
                t('features.reports'),
            ],
        },
        {
            icon: '⚙️',
            title: t('servicesPage.list.automation.title'),
            desc: t('servicesPage.list.automation.desc'),
            features: [
                t('features.api'),
                t('features.sync'),
                t('features.reports'),
                t('features.notifications'),
            ],
        },
    ];

    const process = [
        t('process.analysis'),
        t('process.design'),
        t('process.development'),
        t('process.testing'),
        t('process.launch'),
        t('process.support'),
    ];

    const heroList = [
        t('servicesPage.list.website.title'),
        t('servicesPage.list.saas.title'),
        t('servicesPage.list.ai.title'),
        t('servicesPage.list.telegram.title'),
        t('servicesPage.list.crm.title'),
    ];

    const techStack = [
        { name: 'React', icon: reactIcon },
        { name: 'Node.js', icon: nodeIcon },
        { name: 'Docker', icon: dockerIcon },
        { name: 'PostgreSQL', icon: postgresIcon },
        { name: 'NestJS', icon: nestIcon },
        { name: 'TypeScript', icon: tsIcon },
        { name: 'Prisma', icon: prismaIcon },
        { name: 'React Native', icon: reactIcon },
    ];

    return (
        <main className="servicesPage">
            <section className="servicesHero">
                <div className="container servicesHeroGrid">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="servicesBadge">
                            {t('servicesPage.badge')}
                        </span>

                        <h1>{t('servicesPage.title')}</h1>

                        <p>{t('servicesPage.description')}</p>

                        <div className="servicesHeroActions">
                            <Link to="/start-project" className="btn primary">
                                {t('common.startProject')}
                            </Link>

                            <Link to="/" className="btn secondary">
                                {t('servicesPage.backHome')}
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        className="servicesHeroCard"
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h3>{t('servicesPage.whatWeBuild')}</h3>

                        <ul>
                            {heroList.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>

            <section className="servicesFull">
                <div className="container">
                    <div className="sectionHead">
                        <h2>{t('servicesPage.servicesTitle')}</h2>

                        <p>{t('servicesPage.servicesDesc')}</p>
                    </div>

                    <div className="servicesFullGrid">
                        {services.map((service, index) => (
                            <motion.div
                                className="servicesFullCard"
                                key={service.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.06,
                                }}
                            >
                                <div className="serviceIcon">
                                    {service.icon}
                                </div>

                                <h3>{service.title}</h3>

                                <p>{service.desc}</p>

                                <div className="serviceFeatures">
                                    {service.features.map((feature) => (
                                        <span key={feature}>
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="servicesProcess">
                <div className="container">
                    <div className="sectionHead">
                        <h2>{t('servicesPage.processTitle')}</h2>

                        <p>{t('servicesPage.processDesc')}</p>
                    </div>

                    <div className="processLine">
                        {process.map((step, index) => (
                            <div className="processStep" key={step}>
                                <strong>
                                    {String(index + 1).padStart(2, '0')}
                                </strong>

                                <span>{step}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="techStack">
                <div className="container">
                    <div className="sectionHead">
                        <h2>{t('techStack.title')}</h2>

                        <p>{t('techStack.desc')}</p>
                    </div>

                    <div className="techGrid">
                        {techStack.map((tech) => (
                            <div className="techItem" key={tech.name}>
                                <img src={tech.icon} alt={tech.name} />

                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="servicesCta">
                <div className="container">
                    <div className="servicesCtaBox">
                        <h2>{t('servicesPage.ctaTitle')}</h2>

                        <p>{t('servicesPage.ctaDesc')}</p>

                        <Link to="/start-project" className="btn primary">
                            {t('common.startProject')}
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}