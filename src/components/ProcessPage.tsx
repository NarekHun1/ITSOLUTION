import { motion } from 'framer-motion';
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
                <svg className="processRibbon" viewBox="0 0 1000 1600" preserveAspectRatio="none" aria-hidden="true" focusable="false">
                    <defs>
                        <path id="process-ribbon-path" pathLength="100" d="M 690 -60 C 1060 180, 120 270, 470 480 S 1020 740, 580 920 S 120 1170, 580 1330 S 940 1490, 600 1670" />
                    </defs>
                    <use href="#process-ribbon-path" className="processRibbonGlow" />
                    <use href="#process-ribbon-path" className="processRibbonLine" />
                    <use href="#process-ribbon-path" className="processRibbonPulse" />
                </svg>
                <ol className="container processRoute">
                    {steps.map((step, index) => (
                        <motion.li
                            className="processRouteStep"
                            key={step}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: index * 0.07 }}
                        >
                            <div className="processRouteNumber" aria-hidden="true">
                                {String(index + 1).padStart(2, '0')}
                            </div>

                            <div className="processRouteCopy">
                                <h3>{t(`processPage.steps.${step}.title`)}</h3>
                                <p>{t(`processPage.steps.${step}.desc`)}</p>
                            </div>
                        </motion.li>
                    ))}
                </ol>
            </section>

        </main>
    );
}
