import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../process.css';

export default function ProcessPage() {
    const { t } = useTranslation();

    const steps = [
        'consultation',
        'planning',
        'design',
        'development',
        'testing',
        'launch',
        'support',
    ];

    return (
        <main className="processPage">
            <section className="processHero">
                <div className="container">
                    <motion.span
                        className="processBadge"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        {t('processPage.badge')}
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 22 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        {t('processPage.title')}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 22 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        {t('processPage.desc')}
                    </motion.p>
                </div>
            </section>

            <section className="processStepsSection">
                <div className="container processSteps">
                    {steps.map((step, index) => (
                        <motion.div
                            className="processCard"
                            key={step}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: index * 0.07 }}
                        >
                            <div className="processNumber">
                                {String(index + 1).padStart(2, '0')}
                            </div>

                            <div>
                                <h3>{t(`processPage.steps.${step}.title`)}</h3>
                                <p>{t(`processPage.steps.${step}.desc`)}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="processCta">
                <div className="container">
                    <div className="processCtaBox">
                        <h2>{t('processPage.ctaTitle')}</h2>
                        <p>{t('processPage.ctaDesc')}</p>

                        <Link to="/start-project" className="btn primary">
                            {t('common.startProject')}
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}