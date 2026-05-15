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

    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [idea, setIdea] = useState('');

    const [loading, setLoading] = useState(false);

    const sendToTelegram = async () => {
        if (!name || !contact || !idea) {
            alert('Please fill all fields');
            return;
        }

        setLoading(true);

        const BOT_TOKEN = '8026491620:AAE3qaSoZcsHuCwFyazbiuQ1f40vHfdlccs';
        const CHAT_ID = '934669069';

        const text = `
🚀 NEW PROJECT REQUEST

👤 Name: ${name}
📞 Contact: ${contact}

💻 Project Type: ${type}
📦 Package: ${pack}

📝 Project Idea:
${idea}
`;

        try {
            const response = await fetch(
                `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        chat_id: CHAT_ID,
                        text,
                    }),
                }
            );

            if (!response.ok) {
                throw new Error('Telegram API Error');
            }

            alert('Request sent successfully');

            setName('');
            setContact('');
            setIdea('');
        } catch (error) {
            console.error(error);
            alert('Error sending request');
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="startProjectPage">
            <div className="startGlow glowOne" />
            <div className="startGlow glowTwo" />

            <section className="startProjectHero">
                <motion.span
                    className="startProjectBadge"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    {t('startProject.badge')}
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    {t('startProject.title')}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
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
                                        className={
                                            type === item
                                                ? 'choice active'
                                                : 'choice'
                                        }
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
                                <Tilt
                                    key={item.key}
                                    tiltMaxAngleX={10}
                                    tiltMaxAngleY={10}
                                    glareEnable
                                >
                                    <button
                                        className={
                                            pack === item.title
                                                ? 'package active'
                                                : 'package'
                                        }
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
                            <span>
                                {t('startProject.yourRequest')}
                            </span>

                            <h3>{type}</h3>

                            <p>
                                {t('startProject.selectedPackage')}:{' '}
                                <strong>{pack}</strong>
                            </p>

                            <input
                                placeholder={t('startProject.form.name')}
                                value={name}
                                onChange={(e) =>
                                    setName(e.target.value)
                                }
                            />

                            <input
                                placeholder={t('startProject.form.contact')}
                                value={contact}
                                onChange={(e) =>
                                    setContact(e.target.value)
                                }
                            />

                            <textarea
                                placeholder={t('startProject.form.idea')}
                                value={idea}
                                onChange={(e) =>
                                    setIdea(e.target.value)
                                }
                            />

                            <button
                                className="btn primary startProjectBtn"
                                onClick={sendToTelegram}
                                disabled={loading}
                            >
                                {loading
                                    ? 'Sending...'
                                    : t(
                                        'startProject.form.sendTelegram'
                                    )}
                            </button>

                            <a
                                className="whatsappBtn"
                                href="https://wa.me/37441083882"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {t(
                                    'startProject.form.sendWhatsapp'
                                )}
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}