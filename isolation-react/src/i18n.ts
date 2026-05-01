import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            common: {
                startProject: 'Start Project',
                viewProjects: 'View Projects',
            },

            nav: {
                home: 'Home',
                services: 'Services',
                projects: 'Projects',
                process: 'Process',
                contact: 'Contact',
            },

            menu: {
                title: "Let’s build something powerful",
                subtitle: 'Websites, AI tools, Telegram apps and automation systems.',
                desc: 'We create digital products that help businesses look premium, work faster and generate real growth.',
            },

            hero: {
                eyebrow: 'Premium Digital Studio',
                title: 'We build digital products that',
                typingWords: [
                    'generate revenue',
                    'attract clients',
                    'automate business',
                    'scale faster',
                ],
                description:
                    'Isolation IT Solutions creates websites, platforms, AI tools, Telegram WebApps and automation systems for businesses that want premium design, strong technology and real growth.',
                stats: {
                    experience: 'Years experience',
                    projects: 'Projects',
                    support: 'Support',
                },
            },

            startProject: {
                badge: 'Start Project',
                title: 'Build your next digital product with us',
                desc: 'Choose your project type, package and send us your idea. We will contact you with the best solution.',

                chooseType: 'Choose project type',
                choosePackage: 'Choose package',
                yourRequest: 'Your request',
                selectedPackage: 'Selected package',

                types: {
                    website: 'Website',
                    bot: 'Telegram Bot',
                    webapp: 'Web App',
                    ai: 'AI Product',
                    design: 'UI / UX',
                    mvp: 'Startup MVP',
                },

                packages: {
                    basic: {
                        title: 'Basic',
                        desc: 'Landing / simple site',
                    },
                    pro: {
                        title: 'Pro',
                        desc: 'Full business product',
                    },
                    enterprise: {
                        title: 'Enterprise',
                        desc: 'Custom large system',
                    },
                },

                form: {
                    name: 'Your name',
                    contact: 'Phone / Telegram',
                    idea: 'Tell us about your idea...',
                    sendTelegram: 'Send to Telegram',
                    sendWhatsapp: 'Write on WhatsApp',
                },
            },

            projects: {
                title: 'Selected projects',
                desc: 'Real digital products built across finance, gaming, education and healthcare.',
                items: {
                    hayfin: {
                        title: 'Hayfin — financial platform',
                        desc: 'A premium finance website with application flow, admin logic and conversion-focused structure.',
                        result: 'Built for lead generation, trust and fast client requests.',
                    },
                    monster: {
                        title: 'Monster Catch — Telegram WebApp game',
                        desc: 'A gamified Telegram experience with tournaments, rewards, anti-cheat logic and player retention systems.',
                        result: 'Product direction for 3000+ users and scalable monetization.',
                    },
                    bau: {
                        title: 'BAU Academy — AI EdTech',
                        desc: 'An AI-powered learning concept with Telegram bot, lessons, quizzes and certificate automation.',
                        result: 'Designed for learning, certificates and future marketplace growth.',
                    },
                    clinic: {
                        title: 'SD Clinic — healthcare website',
                        desc: 'A clinic website with appointment flow, responsive pages and Telegram-connected lead handling.',
                        result: 'Improved online presentation and easier patient requests.',
                    },
                },
            },

            services: {
                title: 'Our expertise',
                desc: 'We build digital systems that help businesses grow, automate and scale.',
                items: {
                    website: {
                        title: 'Sales Websites',
                        desc: 'High-conversion websites that generate leads and clients.',
                    },
                    saas: {
                        title: 'Web Apps / SaaS',
                        desc: 'Platforms, dashboards and scalable systems.',
                    },
                    ai: {
                        title: 'AI Integration',
                        desc: 'Automation, AI assistants and smart workflows.',
                    },
                    telegram: {
                        title: 'Telegram Apps',
                        desc: 'Mini apps, bots and game systems.',
                    },
                    crm: {
                        title: 'CRM Systems',
                        desc: 'Admin panels and business management tools.',
                    },
                    automation: {
                        title: 'Automation',
                        desc: 'Process optimization and integrations.',
                    },
                },
            },
        },
    },

    ru: {
        translation: {
            common: {
                startProject: 'Начать проект',
                viewProjects: 'Смотреть проекты',
            },

            nav: {
                home: 'Главная',
                services: 'Услуги',
                projects: 'Проекты',
                process: 'Процесс',
                contact: 'Контакты',
            },

            menu: {
                title: 'Давайте создадим что-то мощное',
                subtitle: 'Сайты, AI решения, Telegram приложения и автоматизация',
                desc: 'Мы создаём цифровые продукты, которые помогают бизнесу выглядеть премиально и расти.',
            },

            hero: {
                eyebrow: 'Премиальная digital-студия',
                title: 'Мы создаём цифровые продукты, которые',
                typingWords: [
                    'приносят прибыль',
                    'привлекают клиентов',
                    'автоматизируют бизнес',
                    'помогают расти быстрее',
                ],
                description:
                    'Isolation IT Solutions создаёт сайты, платформы, AI-инструменты, Telegram WebApps и системы автоматизации для бизнеса.',
                stats: {
                    experience: 'Лет опыта',
                    projects: 'Проектов',
                    support: 'Поддержка',
                },
            },

            startProject: {
                badge: 'Начать проект',
                title: 'Создадим ваш следующий цифровой продукт',
                desc: 'Выберите тип проекта, пакет и отправьте нам идею. Мы свяжемся с вами и предложим лучшее решение.',

                chooseType: 'Выберите тип проекта',
                choosePackage: 'Выберите пакет',
                yourRequest: 'Ваша заявка',
                selectedPackage: 'Выбранный пакет',

                types: {
                    website: 'Веб-сайт',
                    bot: 'Telegram бот',
                    webapp: 'Web App',
                    ai: 'AI продукт',
                    design: 'UI / UX',
                    mvp: 'Startup MVP',
                },

                packages: {
                    basic: {
                        title: 'Basic',
                        desc: 'Landing / простой сайт',
                    },
                    pro: {
                        title: 'Pro',
                        desc: 'Полный бизнес-продукт',
                    },
                    enterprise: {
                        title: 'Enterprise',
                        desc: 'Большая индивидуальная система',
                    },
                },

                form: {
                    name: 'Ваше имя',
                    contact: 'Телефон / Telegram',
                    idea: 'Расскажите о вашей идее...',
                    sendTelegram: 'Отправить в Telegram',
                    sendWhatsapp: 'Написать в WhatsApp',
                },
            },

            projects: {
                title: 'Избранные проекты',
                desc: 'Реальные цифровые продукты в сфере финансов, игр, образования и медицины.',
                items: {
                    hayfin: {
                        title: 'Hayfin — финансовая платформа',
                        desc: 'Премиальный финансовый сайт с формой заявки, админ-логикой и структурой под конверсию.',
                        result: 'Создан для заявок, доверия и быстрого контакта с клиентом.',
                    },
                    monster: {
                        title: 'Monster Catch — Telegram WebApp игра',
                        desc: 'Игровой Telegram-продукт с турнирами, наградами, античитом и механиками удержания.',
                        result: 'Продуктовое направление для 3000+ пользователей и масштабируемой монетизации.',
                    },
                    bau: {
                        title: 'BAU Academy — AI EdTech',
                        desc: 'AI-образовательная платформа с Telegram-ботом, уроками, тестами и автоматическими сертификатами.',
                        result: 'Создано для обучения, сертификатов и будущего marketplace.',
                    },
                    clinic: {
                        title: 'SD Clinic — сайт клиники',
                        desc: 'Сайт клиники с онлайн-записью, адаптивными страницами и заявками через Telegram.',
                        result: 'Улучшена онлайн-презентация и упрощена запись пациентов.',
                    },
                },
            },

            services: {
                title: 'Наши услуги',
                desc: 'Мы создаём цифровые системы, которые помогают бизнесу расти и автоматизироваться.',
                items: {
                    website: {
                        title: 'Продающие сайты',
                        desc: 'Сайты с высокой конверсией, которые приводят клиентов.',
                    },
                    saas: {
                        title: 'Веб-приложения / SaaS',
                        desc: 'Платформы, панели управления и масштабируемые системы.',
                    },
                    ai: {
                        title: 'AI интеграция',
                        desc: 'Автоматизация, AI ассистенты и умные процессы.',
                    },
                    telegram: {
                        title: 'Telegram приложения',
                        desc: 'Мини-приложения, боты и игровые системы.',
                    },
                    crm: {
                        title: 'CRM системы',
                        desc: 'Админ панели и управление бизнесом.',
                    },
                    automation: {
                        title: 'Автоматизация',
                        desc: 'Оптимизация процессов и интеграции.',
                    },
                },
            },
        },
    },

    hy: {
        translation: {
            common: {
                startProject: 'Սկսել նախագիծը',
                viewProjects: 'Դիտել նախագծերը',
            },

            nav: {
                home: 'Գլխավոր',
                services: 'Ծառայություններ',
                projects: 'Նախագծեր',
                process: 'Գործընթաց',
                contact: 'Կապ',
            },

            menu: {
                title: 'Եկեք ստեղծենք հզոր բան',
                subtitle: 'Կայքեր, AI լուծումներ, Telegram հավելվածներ և ավտոմատացում',
                desc: 'Մենք ստեղծում ենք թվային լուծումներ, որոնք օգնում են բիզնեսին աճել և ունենալ պրեմիում տեսք',
            },

            hero: {
                eyebrow: 'Պրեմիում թվային ստուդիա',
                title: 'Մենք ստեղծում ենք թվային լուծումներ, որոնք',
                typingWords: [
                    'բերում են եկամուտ',
                    'գրավում են հաճախորդներ',
                    'ավտոմատացնում են բիզնեսը',
                    'օգնում են արագ աճել',
                ],
                description:
                    'Isolation IT Solutions-ը ստեղծում է կայքեր, հարթակներ, AI գործիքներ և ավտոմատացման համակարգեր բիզնեսի համար։',
                stats: {
                    experience: 'Տարվա փորձ',
                    projects: 'Նախագիծ',
                    support: 'Աջակցություն',
                },
            },

            startProject: {
                badge: 'Սկսել նախագիծ',
                title: 'Եկեք ստեղծենք ձեր հաջորդ թվային պրոդուկտը',
                desc: 'Ընտրեք նախագծի տեսակը, փաթեթը և ուղարկեք ձեր գաղափարը։ Մենք կապ կհաստատենք ձեզ հետ և կառաջարկենք լավագույն լուծումը։',

                chooseType: 'Ընտրեք նախագծի տեսակը',
                choosePackage: 'Ընտրեք փաթեթը',
                yourRequest: 'Ձեր հայտը',
                selectedPackage: 'Ընտրված փաթեթ',

                types: {
                    website: 'Վեբ կայք',
                    bot: 'Telegram բոտ',
                    webapp: 'Web App',
                    ai: 'AI լուծում',
                    design: 'UI / UX',
                    mvp: 'Startup MVP',
                },

                packages: {
                    basic: {
                        title: 'Basic',
                        desc: 'Landing / պարզ կայք',
                    },
                    pro: {
                        title: 'Pro',
                        desc: 'Լիարժեք բիզնես պրոդուկտ',
                    },
                    enterprise: {
                        title: 'Enterprise',
                        desc: 'Մեծ անհատական համակարգ',
                    },
                },

                form: {
                    name: 'Ձեր անունը',
                    contact: 'Հեռախոս / Telegram',
                    idea: 'Գրեք ձեր գաղափարի մասին...',
                    sendTelegram: 'Ուղարկել Telegram',
                    sendWhatsapp: 'Գրել WhatsApp',
                },
            },

            projects: {
                title: 'Ընտրված նախագծեր',
                desc: 'Իրական թվային լուծումներ ֆինանսների, խաղերի, կրթության և բժշկության ոլորտներում։',
                items: {
                    hayfin: {
                        title: 'Hayfin — ֆինանսական հարթակ',
                        desc: 'Պրեմիում ֆինանսական կայք՝ հայտի ձևով, ադմին տրամաբանությամբ և կոնվերսիայի համար կառուցվածքով։',
                        result: 'Ստեղծված է հայտերի, վստահության և արագ կապի համար։',
                    },
                    monster: {
                        title: 'Monster Catch — Telegram WebApp խաղ',
                        desc: 'Խաղային Telegram պրոդուկտ՝ մրցաշարերով, պարգևներով, հակաչիթ համակարգով և օգտատերերի պահման մեխանիկայով։',
                        result: 'Պրոդուկտային ուղղություն 3000+ օգտատերերի և մասշտաբվող մոնետիզացիայի համար։',
                    },
                    bau: {
                        title: 'BAU Academy — AI EdTech',
                        desc: 'AI կրթական հարթակ՝ Telegram բոտով, դասերով, թեստերով և ավտոմատ սերտիֆիկատներով։',
                        result: 'Ստեղծված է ուսուցման, սերտիֆիկատների և ապագա marketplace-ի համար։',
                    },
                    clinic: {
                        title: 'SD Clinic — բժշկական կայք',
                        desc: 'Կլինիկայի կայք՝ առցանց գրանցմամբ, ադապտիվ էջերով և Telegram-ի միջոցով հայտերով։',
                        result: 'Բարելավված առցանց ներկայություն և ավելի հեշտ պացիենտների գրանցում։',
                    },
                },
            },

            services: {
                title: 'Մեր ծառայությունները',
                desc: 'Մենք ստեղծում ենք թվային համակարգեր, որոնք օգնում են բիզնեսին աճել և ավտոմատանալ։',
                items: {
                    website: {
                        title: 'Վաճառող կայքեր',
                        desc: 'Կայքեր, որոնք բերում են հաճախորդներ և բարձր կոնվերսիա։',
                    },
                    saas: {
                        title: 'Վեբ հավելվածներ / SaaS',
                        desc: 'Հարթակներ, կառավարման համակարգեր և մասշտաբվող լուծումներ։',
                    },
                    ai: {
                        title: 'AI ինտեգրում',
                        desc: 'Ավտոմատացում, AI օգնականներ և խելացի գործընթացներ։',
                    },
                    telegram: {
                        title: 'Telegram հավելվածներ',
                        desc: 'Mini app-եր, բոտեր և խաղային համակարգեր։',
                    },
                    crm: {
                        title: 'CRM համակարգեր',
                        desc: 'Ադմին համակարգեր և բիզնեսի կառավարում։',
                    },
                    automation: {
                        title: 'Ավտոմատացում',
                        desc: 'Գործընթացների օպտիմիզացում և ինտեգրացիաներ։',
                    },
                },
            },
        },
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;