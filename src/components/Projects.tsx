import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../projects.css';

import hayfinImg from '../assets/projects /hayfin.png';
import monsterImg from '../assets/projects /monster.png';
import bauImg from '../assets/projects /bau.png';
import clinicImg from '../assets/projects /clinic.png';
import emwImg from '../assets/projects /emwblock.png';
import brandingImg from '../assets/projects /baubranding.png';
import arosImg from '../assets/projects /aros.jpg';
import astrumImg from '../assets/projects /astrum.jpg';
import himagoImg from '../assets/projects /himago.jpg';


export default function Projects() {
    const { t } = useTranslation();

    const projects = [
        {
            key: 'hayfin',
            image: hayfinImg,
            tags: ['FinTech', 'Lead'],
            link: 'https://hayfin.am',
            button: 'Visit Website',
        },
        {
            key: 'monster',
            image: monsterImg,
            tags: ['Game', 'Telegram'],
            link: 'https://t.me/monster_catch_bot',
            button: 'Open Telegram',
        },
        {
            key: 'bau',
            image: bauImg,
            tags: ['EdTech', 'AI'],
            link: 'https://aicours.vercel.app',
            button: 'Live Demo',
        },
        {
            key: 'clinic',
            image: clinicImg,
            tags: ['Healthcare'],
            link: 'https://sdclinicsochi.clinic',
            button: 'Visit Website',
        },
        {
            key: 'emwblock',
            image: emwImg,
            tags: ['E-Commerce', 'EV'],
            link: 'https://emwblock.com',
            button: 'Visit Website',
        },
        {
            key: 'baubranding',
            image: brandingImg,
            tags: ['Agency', 'Marketing'],
            link: 'https://www.baubranding.com',
            button: 'Visit Website',
        },
        {
            key: 'aros',
            image: arosImg,
            tags: ['AI', 'Restaurant'],
            link: '',
            button: 'In Development',
        },
        {
            key: 'astrum',
            image: astrumImg,
            tags: ['Commerce', 'PWA'],
            link: 'https://app.astrumgo.com',
            button: 'Visit Website',
        },
        {
            key: 'himago',
            image: himagoImg,
            tags: ['Travel', 'Marketplace'],
            link: 'https://www.himago.am',
            button: 'Visit Website',
        },
    ];

    const projectRows = [
        projects,
        [...projects.slice(3), ...projects.slice(0, 3)],
    ];

    const trackRefs = useRef<Array<HTMLDivElement | null>>([]);
    const marqueeRefs = useRef<Array<HTMLDivElement | null>>([]);

    const moveProjects = (direction: -1 | 1) => {
        trackRefs.current.forEach((track, rowIndex) => {
            if (!track) return;

            const animation = track.getAnimations()[0];
            const duration = Number(animation?.effect?.getTiming().duration);

            if (animation && Number.isFinite(duration) && duration > 0) {
                const currentTime = Number(animation.currentTime ?? 0);
                const step = duration / projects.length;
                animation.currentTime = (currentTime + direction * step + duration) % duration;
                return;
            }

            const marquee = marqueeRefs.current[rowIndex];
            const card = track.querySelector<HTMLElement>('.projectCard');
            marquee?.scrollBy({
                left: direction * ((card?.offsetWidth ?? 280) + 18),
                behavior: 'smooth',
            });
        });
    };

    const renderProject = (
        project: (typeof projects)[number],
        duplicate: boolean,
        rowIndex: number
    ) => (
        <article
            className="projectCard"
            key={`${rowIndex}-${duplicate ? 'duplicate' : 'primary'}-${project.key}`}
            aria-hidden={duplicate || undefined}
        >
            <div className="projectVisual">
                <img
                    src={project.image}
                    alt={duplicate ? '' : t(`projects.items.${project.key}.title`)}
                    loading="lazy"
                />
                <div className="projectOverlay" />
                <div className="projectGlow" />
            </div>

            <div className="projectInfo">
                <div className="projectTags">
                    {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                    ))}
                </div>

                <h3>{t(`projects.items.${project.key}.title`)}</h3>
                <p>{t(`projects.items.${project.key}.desc`)}</p>

                <div className="projectResult">
                    {t(`projects.items.${project.key}.result`)}
                </div>
                <button
                    type="button"
                    className={`projectBtn${project.link ? '' : ' isDisabled'}`}
                    tabIndex={duplicate ? -1 : 0}
                    disabled={!project.link}
                    onClick={() => project.link && window.open(project.link, '_blank', 'noopener,noreferrer')}
                >
                    {project.button}
                </button>
            </div>
        </article>
    );

    return (
        <section className="section projectsSection" id="projects">
            <div className="container">
                <div className="sectionHead">
                    <h2>{t('projects.title')}</h2>
                    <p>{t('projects.desc')}</p>
                </div>
            </div>

            <div className="projectsStage">
                <button
                    type="button"
                    className="projectsNavButton projectsNavButtonPrev"
                    aria-label={t('projects.previousProject')}
                    onClick={() => moveProjects(-1)}
                >
                    <ChevronLeft aria-hidden="true" />
                </button>

                {projectRows.map((row, rowIndex) => (
                    <div
                        className={`projectsMarquee projectsMarqueeRow${rowIndex + 1}`}
                        key={rowIndex}
                        ref={(element) => { marqueeRefs.current[rowIndex] = element; }}
                    >
                        <div
                            className="projectsTrack"
                            ref={(element) => { trackRefs.current[rowIndex] = element; }}
                        >
                            <div className="projectsGroup">
                                {row.map((project) => renderProject(project, false, rowIndex))}
                            </div>
                            <div className="projectsGroup" aria-hidden="true">
                                {row.map((project) => renderProject(project, true, rowIndex))}
                            </div>
                        </div>
                    </div>
                ))}

                <button
                    type="button"
                    className="projectsNavButton projectsNavButtonNext"
                    aria-label={t('projects.nextProject')}
                    onClick={() => moveProjects(1)}
                >
                    <ChevronRight aria-hidden="true" />
                </button>
            </div>
        </section>
    );
}
