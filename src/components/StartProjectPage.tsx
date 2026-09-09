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

    const packages = ['$5k–$10k', '$10k–$25k', '$25k–$50k', '$50k+', t('startProject.packages.notSure')];
    const timelines = [t('startProject.timelines.flexible'), t('startProject.timelines.oneThree'), t('startProject.timelines.threeSix'), t('startProject.timelines.sixPlus')];

    const [typeIndex, setTypeIndex] = useState(0);
    const [packIndex, setPackIndex] = useState(1);
    const [timelineIndex, setTimelineIndex] = useState(0);
    const type = types[typeIndex];
    const pack = packages[packIndex];
    const timeline = timelines[timelineIndex];

    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [idea, setIdea] = useState('');

    const [loading, setLoading] = useState(false);

    const sendToTelegram = async () => {
        if (!name || !email || !idea) {
            alert(t('startProject.form.required'));
            return;
        }

        setLoading(true);

        try {
            const response = await fetch('/api/project-inquiry', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, company, email, contact, type, budget: pack, timeline, idea }),
            });

            if (!response.ok) {
                throw new Error('Telegram API Error');
            }

            alert('Request sent successfully');

            setName('');
            setCompany('');
            setEmail('');
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
                            {types.map((item, index) => (
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
                                        onClick={() => setTypeIndex(index)}
                                    >
                                        {item}
                                    </button>
                                </Tilt>
                            ))}
                        </div>

                        <h2>{t('startProject.choosePackage')}</h2>

                        <div className="packageGrid">
                            {packages.map((item, index) => (
                                <Tilt
                                    key={item}
                                    tiltMaxAngleX={10}
                                    tiltMaxAngleY={10}
                                    glareEnable
                                >
                                    <button
                                        className={
                                            pack === item
                                                ? 'package active'
                                                : 'package'
                                        }
                                        onClick={() => setPackIndex(index)}
                                    >
                                        <strong>{item}</strong>
                                    </button>
                                </Tilt>
                            ))}
                        </div>

                        <h2>{t('startProject.chooseTimeline')}</h2>
                        <div className="timelineGrid">
                            {timelines.map((item, index) => <button type="button" className={timeline === item ? 'choice active' : 'choice'} key={item} onClick={() => setTimelineIndex(index)}>{item}</button>)}
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

                            <input placeholder={t('startProject.form.company')} value={company} onChange={(e) => setCompany(e.target.value)} />
                            <input type="email" required placeholder={t('startProject.form.email')} value={email} onChange={(e) => setEmail(e.target.value)} />

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
