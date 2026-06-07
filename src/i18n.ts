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

                    emwblock: {
                        title: 'EMW Block',
                        desc: 'E-commerce platform for EVA car mats with multilingual support, admin dashboard and modern shopping experience.',
                        result: 'Vehicle catalog, online orders and efficient product management.',
                    },

                    baubranding: {
                        title: 'BAU Branding Agency',
                        desc: 'Full-service branding and marketing agency providing design, content creation and digital promotion.',
                        result: 'Professional service showcase and client acquisition platform.',
                    },
                },
            },
            contact: {
                badge: 'Contact Isolation IT Solutions',
                title1: 'Let’s discuss your next',
                title2: 'digital project',
                desc: 'Website, CRM, marketplace, AI assistant, Telegram bot or mobile app — we will help choose the right solution and estimate the cost.',
                startProject: 'Start project',
                callNow: 'Call now',
                addressLabel: 'Address',
                mapTitle: 'Find us on Yandex Navigator',
                mapDesc: 'Click the map or button to open the location.',
                openNavigator: 'Open in Yandex Navigator',
            },
            processPage: {
                badge: 'Our Process',
                title: 'How We Turn Ideas Into Real Products',
                desc: 'We follow a clear and professional workflow — from first discussion to launch, support and future growth.',
                ctaTitle: 'Ready to Start Your Project?',
                ctaDesc: 'Tell us your idea and we will help you choose the right solution, structure and development plan.',
                steps: {
                    consultation: {
                        title: 'Discovery & Consultation',
                        desc: 'We discuss your idea, goals, target audience, functionality and business needs.',
                    },
                    planning: {
                        title: 'Planning & Strategy',
                        desc: 'We define the project structure, timeline, technical solution and development roadmap.',
                    },
                    design: {
                        title: 'UI/UX Design',
                        desc: 'We create a modern, clean and user-friendly design for desktop and mobile users.',
                    },
                    development: {
                        title: 'Development',
                        desc: 'We build frontend, backend, admin panel, APIs, integrations and all core functionality.',
                    },
                    testing: {
                        title: 'Testing & Optimization',
                        desc: 'We test performance, mobile version, security, user experience and fix all issues.',
                    },
                    launch: {
                        title: 'Launch',
                        desc: 'We deploy the project, connect domain, SSL, analytics and prepare it for real users.',
                    },
                    support: {
                        title: 'Support & Growth',
                        desc: 'After launch, we support the product, add new features and improve business results.',
                    },
                },
            },
            servicesPage: {
                badge: 'Our Services',
                title: 'Digital Solutions for Modern Businesses',
                description:
                    'We build websites, platforms, AI tools, Telegram WebApps, automation systems and admin panels for businesses.',

                backHome: 'Back to Home',

                servicesTitle: 'Services',
                servicesDesc: 'Choose the solution your business needs.',

                processTitle: 'How We Work',
                processDesc: 'A clear process from idea to launch.',

                ctaTitle: 'Have an Idea?',
                ctaDesc:
                    'Tell us about your project and we will help turn it into a real digital product.',

                whatWeBuild: 'What We Build',

                list: {
                    website: {
                        title: 'Website Development',
                        desc: 'Modern business websites, landing pages and corporate websites with premium UX/UI design.',
                    },
                    saas: {
                        title: 'SaaS Platforms',
                        desc: 'Custom web platforms for startups and businesses with dashboards, accounts and subscriptions.',
                    },
                    ai: {
                        title: 'AI Tools',
                        desc: 'AI assistants, chatbots and automation solutions for business.',
                    },
                    telegram: {
                        title: 'Telegram Bot & WebApp',
                        desc: 'Telegram bots, Mini Apps, payment systems and business automation.',
                    },
                    crm: {
                        title: 'CRM & Admin Panel',
                        desc: 'Internal systems for managing clients, orders and business processes.',
                    },
                    automation: {
                        title: 'Automation Systems',
                        desc: 'API integrations, data synchronization and workflow automation.',
                    },
                },
            },

            features: {
                responsive: 'Responsive Design',
                seo: 'SEO Optimization',
                fast: 'Fast Performance',
                admin: 'Admin Panel',
                auth: 'Authorization',
                dashboard: 'Dashboard',
                payments: 'Payments',
                scalable: 'Scalable',
                chatbot: 'AI Chatbot',
                textgen: 'Text Generation',
                recommendations: 'Recommendations',
                automation: 'Automation',
                telegramBot: 'Telegram Bot',
                miniapp: 'Mini App',
                notifications: 'Notifications',
                users: 'Users',
                analytics: 'Analytics',
                roles: 'Roles',
                reports: 'Reports',
                api: 'API Integration',
                sync: 'Data Sync',
            },

            process: {
                analysis: 'Analysis',
                design: 'Design',
                development: 'Development',
                testing: 'Testing',
                launch: 'Launch',
                support: 'Support',
            },
            "techStack": {
                "title": "Tech Stack",
                "desc": "Modern technologies we use to build fast, scalable and reliable digital products."
            }
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
            contact: {
                badge: 'Контакты Isolation IT Solutions',
                title1: 'Обсудим ваш следующий',
                title2: 'digital проект',
                desc: 'Сайт, CRM, marketplace, AI assistant, Telegram bot или mobile app — мы поможем выбрать правильное решение и оценить стоимость.',
                startProject: 'Начать проект',
                callNow: 'Позвонить сейчас',
                addressLabel: 'Адрес',
                mapTitle: 'Найдите нас в Yandex Navigator',
                mapDesc: 'Нажмите на карту или кнопку, чтобы открыть локацию.',
                openNavigator: 'Открыть в Yandex Navigator',
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
                desc: 'Реальные цифровые продукты в сфере финансов, игр, образования, медицины и e-commerce.',

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

                    emwblock: {
                        title: 'EMW Block',
                        desc: 'Интернет-магазин EVA ковриков для электромобилей с каталогом, мультиязычностью, админ-панелью и адаптивным дизайном.',
                        result: 'Каталог автомобилей, онлайн-заказы и удобное управление товарами.',
                    },

                    baubranding: {
                        title: 'BAU Branding Agency',
                        desc: 'Маркетинговое агентство полного цикла с услугами брендинга, дизайна, контент-маркетинга и digital-продвижения.',
                        result: 'Современная презентация услуг и привлечение новых клиентов.',
                    },
                },
            },
            processPage: {
                badge: 'Наш процесс',
                title: 'Как мы превращаем идеи в реальные продукты',
                desc: 'Мы работаем по понятному и профессиональному процессу — от первого обсуждения до запуска, поддержки и роста проекта.',
                ctaTitle: 'Готовы начать проект?',
                ctaDesc: 'Расскажите нам вашу идею, и мы поможем выбрать правильное решение, структуру и план разработки.',
                steps: {
                    consultation: {
                        title: 'Консультация и анализ',
                        desc: 'Обсуждаем вашу идею, цели, аудиторию, функционал и задачи бизнеса.',
                    },
                    planning: {
                        title: 'Планирование и стратегия',
                        desc: 'Определяем структуру проекта, сроки, техническое решение и roadmap разработки.',
                    },
                    design: {
                        title: 'UI/UX дизайн',
                        desc: 'Создаем современный, удобный и адаптивный дизайн для desktop и mobile.',
                    },
                    development: {
                        title: 'Разработка',
                        desc: 'Разрабатываем frontend, backend, admin panel, API, интеграции и основной функционал.',
                    },
                    testing: {
                        title: 'Тестирование и оптимизация',
                        desc: 'Проверяем скорость, mobile версию, безопасность, UX и исправляем все ошибки.',
                    },
                    launch: {
                        title: 'Запуск',
                        desc: 'Размещаем проект на сервере, подключаем домен, SSL, аналитику и готовим к пользователям.',
                    },
                    support: {
                        title: 'Поддержка и развитие',
                        desc: 'После запуска поддерживаем продукт, добавляем новые функции и улучшаем результат.',
                    },
                },
            },

            servicesPage: {
                badge: 'Наши услуги',
                title: 'Цифровые решения для современного бизнеса',
                description:
                    'Мы создаем сайты, платформы, AI инструменты, Telegram WebApps, системы автоматизации и админ панели для бизнеса.',

                backHome: 'Вернуться на главную',

                servicesTitle: 'Услуги',
                servicesDesc: 'Выберите решение, которое нужно вашему бизнесу.',

                processTitle: 'Как мы работаем',
                processDesc: 'Понятный процесс от идеи до запуска.',

                ctaTitle: 'Есть идея?',
                ctaDesc:
                    'Расскажите нам о вашем проекте, и мы поможем превратить его в реальный цифровой продукт.',

                whatWeBuild: 'Что мы создаем',

                list: {
                    website: {
                        title: 'Разработка сайтов',
                        desc: 'Современные бизнес сайты, landing page и корпоративные сайты с premium UX/UI дизайном.',
                    },

                    saas: {
                        title: 'SaaS платформы',
                        desc: 'Веб платформы для стартапов и бизнеса с dashboard, аккаунтами и подписками.',
                    },

                    ai: {
                        title: 'AI инструменты',
                        desc: 'AI помощники, чат-боты и системы автоматизации для бизнеса.',
                    },

                    telegram: {
                        title: 'Telegram Bot & WebApp',
                        desc: 'Telegram боты, Mini App, платежные системы и автоматизация бизнеса.',
                    },

                    crm: {
                        title: 'CRM и Admin Panel',
                        desc: 'Системы управления клиентами, заказами и бизнес процессами.',
                    },

                    automation: {
                        title: 'Системы автоматизации',
                        desc: 'API интеграции, синхронизация данных и автоматизация workflow.',
                    },
                },
            },

            features: {
                responsive: 'Адаптивный дизайн',
                seo: 'SEO оптимизация',
                fast: 'Быстрая работа',
                admin: 'Админ панель',
                auth: 'Авторизация',
                dashboard: 'Dashboard',
                payments: 'Платежи',
                scalable: 'Масштабируемость',
                chatbot: 'AI Чат-бот',
                textgen: 'Генерация текста',
                recommendations: 'Рекомендации',
                automation: 'Автоматизация',
                telegramBot: 'Telegram бот',
                miniapp: 'Mini App',
                notifications: 'Уведомления',
                users: 'Пользователи',
                analytics: 'Аналитика',
                roles: 'Роли',
                reports: 'Отчёты',
                api: 'API интеграция',
                sync: 'Синхронизация данных',
            },

            process: {
                analysis: 'Анализ',
                design: 'Дизайн',
                development: 'Разработка',
                testing: 'Тестирование',
                launch: 'Запуск',
                support: 'Поддержка',
            },
            "techStack": {
                "title": "Технологический стек",
                "desc": "Современные технологии, которые мы используем для создания быстрых, масштабируемых и надежных цифровых продуктов."
            }

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
            contact: {
                badge: 'Կապ Isolation IT Solutions-ի հետ',
                title1: 'Եկեք քննարկենք ձեր հաջորդ',
                title2: 'digital project-ը',
                desc: 'Կայք, CRM, marketplace, AI assistant, Telegram bot կամ mobile app — մենք կօգնենք ընտրել ճիշտ լուծումը և գնահատել արժեքը։',
                startProject: 'Սկսել նախագիծը',
                callNow: 'Զանգահարել հիմա',
                addressLabel: 'Հասցե',
                mapTitle: 'Գտեք մեզ Yandex Navigator-ում',
                mapDesc: 'Սեղմեք քարտեզի կամ կոճակի վրա՝ տեղը բացելու համար։',
                openNavigator: 'Բացել Yandex Navigator-ում',
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
                desc: 'Իրական թվային լուծումներ ֆինանսների, խաղերի, կրթության, բժշկության և e-commerce ոլորտներում։',

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

                    emwblock: {
                        title: 'EMW Block',
                        desc: 'EVA գորգերի առցանց խանութ էլեկտրամոբիլների համար՝ կատալոգով, բազմալեզու աջակցությամբ, ադմին վահանակով և ժամանակակից դիզայնով։',
                        result: 'Մեքենաների կատալոգ, առցանց պատվերներ և ապրանքների հարմար կառավարում։',
                    },

                    baubranding: {
                        title: 'BAU Branding Agency',
                        desc: 'Բրենդինգի և մարքեթինգի գործակալություն՝ դիզայնի, կոնտենտի և թվային առաջխաղացման ծառայություններով։',
                        result: 'Ծառայությունների պրոֆեսիոնալ ներկայացում և նոր հաճախորդների ներգրավում։',
                    },
                },
            },
            processPage: {
                badge: 'Մեր գործընթացը',
                title: 'Ինչպես ենք գաղափարը դարձնում իրական պրոդուկտ',
                desc: 'Մենք աշխատում ենք հստակ և պրոֆեսիոնալ գործընթացով՝ առաջին քննարկումից մինչև գործարկում, աջակցություն և զարգացում։',
                ctaTitle: 'Պատրա՞ստ եք սկսել նախագիծը',
                ctaDesc: 'Պատմեք ձեր գաղափարի մասին, և մենք կօգնենք ընտրել ճիշտ լուծումը, կառուցվածքը և մշակման պլանը։',
                steps: {
                    consultation: {
                        title: 'Քննարկում և վերլուծություն',
                        desc: 'Քննարկում ենք ձեր գաղափարը, նպատակները, լսարանը, ֆունկցիոնալը և բիզնեսի կարիքները։',
                    },
                    planning: {
                        title: 'Պլանավորում և ռազմավարություն',
                        desc: 'Սահմանում ենք նախագծի կառուցվածքը, ժամկետները, տեխնիկական լուծումը և զարգացման roadmap-ը։',
                    },
                    design: {
                        title: 'UI/UX դիզայն',
                        desc: 'Ստեղծում ենք ժամանակակից, հարմար և ադապտիվ դիզայն desktop և mobile տարբերակների համար։',
                    },
                    development: {
                        title: 'Ծրագրավորում',
                        desc: 'Մշակում ենք frontend, backend, admin panel, API, ինտեգրացիաներ և հիմնական ֆունկցիոնալը։',
                    },
                    testing: {
                        title: 'Թեստավորում և օպտիմիզացիա',
                        desc: 'Ստուգում ենք արագությունը, mobile տարբերակը, անվտանգությունը, UX-ը և ուղղում սխալները։',
                    },
                    launch: {
                        title: 'Գործարկում',
                        desc: 'Տեղադրում ենք նախագիծը սերվերում, միացնում դոմենը, SSL-ը, analytics-ը և պատրաստում իրական օգտատերերի համար։',
                    },
                    support: {
                        title: 'Աջակցություն և զարգացում',
                        desc: 'Գործարկումից հետո աջակցում ենք պրոդուկտին, ավելացնում նոր ֆունկցիաներ և բարելավում արդյունքը։',
                    },
                },
            },
            servicesPage: {
                badge: 'Մեր ծառայությունները',
                title: 'Թվային լուծումներ ժամանակակից բիզնեսների համար',
                description:
                    'Մենք ստեղծում ենք կայքեր, հարթակներ, AI գործիքներ, Telegram WebApps, ավտոմատացման համակարգեր և ադմին վահանակներ բիզնեսների համար։',

                backHome: 'Վերադառնալ գլխավոր էջ',

                servicesTitle: 'Ծառայություններ',
                servicesDesc: 'Ընտրեք ձեր բիզնեսին անհրաժեշտ լուծումը։',

                processTitle: 'Ինչպես ենք աշխատում',
                processDesc: 'Հստակ գործընթաց՝ գաղափարից մինչև գործարկում։',

                ctaTitle: 'Ունե՞ք գաղափար',
                ctaDesc:
                    'Պատմեք ձեր նախագծի մասին, և մենք կօգնենք այն վերածել իրական թվային պրոդուկտի։',

                whatWeBuild: 'Ինչ ենք ստեղծում',

                list: {
                    website: {
                        title: 'Կայքերի ստեղծում',
                        desc: 'Ժամանակակից բիզնես կայքեր, landing page-եր և կորպորատիվ կայքեր premium UX/UI դիզայնով։',
                    },

                    saas: {
                        title: 'SaaS հարթակներ',
                        desc: 'Պատվերով վեբ հարթակներ startup-ների և բիզնեսների համար՝ dashboard-ներով և subscription համակարգերով։',
                    },

                    ai: {
                        title: 'AI գործիքներ',
                        desc: 'AI օգնականներ, chatbot-ներ և ավտոմատացման լուծումներ բիզնեսի համար։',
                    },

                    telegram: {
                        title: 'Telegram Bot & WebApp',
                        desc: 'Telegram bot-եր, Mini App-եր, վճարային համակարգեր և բիզնես ավտոմատացում։',
                    },

                    crm: {
                        title: 'CRM և Admin Panel',
                        desc: 'Ներքին համակարգեր հաճախորդների, պատվերների և բիզնես գործընթացների կառավարման համար։',
                    },

                    automation: {
                        title: 'Ավտոմատացման համակարգեր',
                        desc: 'API ինտեգրացիաներ, տվյալների սինխրոնացում և workflow ավտոմատացում։',
                    },
                },
            },

            features: {
                responsive: 'Responsive դիզայն',
                seo: 'SEO օպտիմիզացիա',
                fast: 'Արագ աշխատանք',
                admin: 'Ադմին համակարգ',
                auth: 'Ավտորիզացիա',
                dashboard: 'Dashboard',
                payments: 'Վճարումներ',
                scalable: 'Մասշտաբավորվող',
                chatbot: 'AI Chatbot',
                textgen: 'Տեքստի գեներացում',
                recommendations: 'Խորհուրդներ',
                automation: 'Ավտոմատացում',
                telegramBot: 'Telegram բոտ',
                miniapp: 'Mini App',
                notifications: 'Ծանուցումներ',
                users: 'Օգտատերեր',
                analytics: 'Անալիտիկա',
                roles: 'Դերեր',
                reports: 'Հաշվետվություններ',
                api: 'API ինտեգրում',
                sync: 'Տվյալների սինխրոնացում',
            },

            process: {
                analysis: 'Վերլուծություն',
                design: 'Դիզայն',
                development: 'Մշակում',
                testing: 'Թեստավորում',
                launch: 'Գործարկում',
                support: 'Աջակցություն',
            },
            "techStack": {
                "title": "Տեխնոլոգիական Stack",
                "desc": "Ժամանակակից տեխնոլոգիաներ, որոնք օգտագործում ենք արագ, մասշտաբավորվող և հուսալի թվային պրոդուկտներ ստեղծելու համար։"
            }
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