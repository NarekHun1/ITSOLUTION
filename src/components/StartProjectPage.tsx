import { useState } from 'react';
import { motion } from 'framer-motion';
import '../StartProjectPage.css';
import Tilt from 'react-parallax-tilt';
import { useTranslation } from 'react-i18next';

export default function StartProjectPage() {
    const { t } = useTranslation();

    const types = [
        t('startProject.types.website'),
        t('startProject.types.bot'),
        t('startProject.types.webapp'),
        t('startProject.types.ai'),
        t('startProject.types.design'),
        t('startProject.types.mvp'),
    ];

    const packages = [
        {
            key: 'basic',
            title: t('startProject.packages.basic.title'),
            desc: t('startProject.packages.basic.desc'),
        },
        {
            key: 'pro',
            title: t('startProject.packages.pro.title'),
            desc: t('startProject.packages.pro.desc'),
        },
        {
            key: 'enterprise',
            title: t('startProject.packages.enterprise.title'),
            desc: t('startProject.packages.enterprise.desc'),
        },
    ];

    const [type, setType] = useState(types[0]);
    const [pack, setPack] = useState(packages[1].title);

    return (
        <main className="startProjectPage">
            <div className="startGlow glowOne" />
            <div className="startGlow glowTwo" />

            <section className="startProjectHero">
                <motion.span className="startProjectBadge">
                    {t('startProject.badge')}
                </motion.span>

                <motion.h1>
                    {t('startProject.title')}
                </motion.h1>

                <motion.p>
                    {t('startProject.desc')}
                </motion.p>

                <div className="projectBuilder">
                    <div className="builderLeft">
                        <h2>{t('startProject.chooseType')}</h2>

                        <div className="choiceGrid">
                            {types.map((item) => (
                                <Tilt
                                    key={item}
                                    tiltMaxAngleX={12}
                                    tiltMaxAngleY={12}
                                    glareEnable
                                    glareMaxOpacity={0.2}
                                    scale={1.05}
                                >
                                    <button
                                        className={type === item ? 'choice active' : 'choice'}
                                        onClick={() => setType(item)}
                                    >
                                        {item}
                                    </button>
                                </Tilt>
                            ))}
                        </div>

                        <h2>{t('startProject.choosePackage')}</h2>

                        <div className="packageGrid">
                            {packages.map((item) => (
                                <Tilt key={item.key} tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable>
                                    <button
                                        className={pack === item.title ? 'package active' : 'package'}
                                        onClick={() => setPack(item.title)}
                                    >
                                        <strong>{item.title}</strong>
                                        <span>{item.desc}</span>
                                    </button>
                                </Tilt>
                            ))}
                        </div>
                    </div>

                    <div className="builderRight">
                        <div className="summaryCard">
                            <span>{t('startProject.yourRequest')}</span>

                            <h3>{type}</h3>

                            <p>
                                {t('startProject.selectedPackage')}: <strong>{pack}</strong>
                            </p>

                            <input placeholder={t('startProject.form.name')} />
                            <input placeholder={t('startProject.form.contact')} />
                            <textarea placeholder={t('startProject.form.idea')} />

                            <a
                                className="btn primary startProjectBtn"
                                href={`https://t.me/YOUR_TELEGRAM_USERNAME?text=${type} (${pack})`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {t('startProject.form.sendTelegram')}
                            </a>

                            <a
                                className="whatsappBtn"
                                href={`https://wa.me/374XXXXXXXX?text=${type} (${pack})`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {t('startProject.form.sendWhatsapp')}
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}