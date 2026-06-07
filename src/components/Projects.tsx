import { useTranslation } from 'react-i18next';
import '../projects.css';

import hayfinImg from '../assets/projects /hayfin.png';
import monsterImg from '../assets/projects /monster.png';
import bauImg from '../assets/projects /bau.png';
import clinicImg from '../assets/projects /clinic.png';
import emwImg from '../assets/projects /emwblock.png';
import brandingImg from '../assets/projects /baubranding.png';


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
            link: 'https://t.me/monster_catch_bot\n',
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
            link: 'https://baubranding.agency',
            button: 'Live Demo',
        },
    ];

    return (
        <section className="section" id="projects">
            <div className="container">
                <div className="sectionHead">
                    <h2>{t('projects.title')}</h2>
                    <p>{t('projects.desc')}</p>
                </div>

                <div className="projectsGrid">
                    {projects.map((project) => (
                        <article className="projectCard" key={project.key}>
                            <div className="projectVisual">
                                <img src={project.image} alt="" />
                                <div className="projectOverlay" />
                                <div className="projectGlow" />
                                <div className="projectMock">
                                    <div className="mockTop">
                                        <span />
                                        <span />
                                        <span />
                                    </div>
                                    <div className="mockBody">
                                        <div className="mockSidebar" />
                                        <div className="mockContent">
                                            <div />
                                            <div />
                                            <div />
                                        </div>
                                    </div>
                                </div>
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
                                    className="projectBtn"
                                    onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
                                >
                                    {project.button}
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}