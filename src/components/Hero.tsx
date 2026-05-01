import { motion } from 'framer-motion';
import InteractiveCubes from './InteractiveCubes';
import { Typewriter } from 'react-simple-typewriter';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';


export default function Hero() {
    const { t } = useTranslation();

    const typingWords = t('hero.typingWords', {
        returnObjects: true,
    }) as string[];

    return (
        <section className="hero" id="home">
            <div className="container heroGrid">
                <div className="heroContent">
                    <motion.div
                        className="eyebrow"
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {t('hero.eyebrow')}
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        {t('hero.title')}{' '}
                        <span className="typingWrapper">
  <span className="typingText">
  <Typewriter
      words={typingWords}
      loop={false}
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={0}
  />
  </span>
</span>
                    </motion.h1>

                    <motion.p
                        className="heroText"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {t('hero.description')}
                    </motion.p>

                    <motion.div
                        className="heroActions"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9 }}
                    >
                        <Link to="/start-project" className="btn primary">
                            {t('common.startProject')}
                        </Link>

                        <a href="#projects" className="btn secondary">
                            {t('common.viewProjects')}
                        </a>
                    </motion.div>

                    <div className="stats">
                        <div>
                            <strong>5+</strong>
                            <span>{t('hero.stats.experience')}</span>
                        </div>

                        <div>
                            <strong>50+</strong>
                            <span>{t('hero.stats.projects')}</span>
                        </div>

                        <div>
                            <strong>24/7</strong>
                            <span>{t('hero.stats.support')}</span>
                        </div>
                    </div>
                </div>

                <div className="heroCubesBg">
                    <InteractiveCubes />
                </div>
            </div>
        </section>
    );
}