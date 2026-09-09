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
                services: 'Capabilities',
                projects: 'Work',
                process: 'Process',
                contact: 'Contact',
            },

            menu: {
                title: "Let’s engineer what comes next",
                subtitle: 'AI systems, custom software and digital platforms.',
                desc: 'We turn complex business problems into scalable software built for long-term growth.',
            },

            hero: {
                eyebrow: 'AI & Software Engineering Company',
                title: 'We turn complex business problems into intelligent software',
                typingWords: [
                    'built to scale',
                    'powered by AI',
                    'designed for growth',
                    'engineered for business',
                ],
                description:
                    'We design and engineer AI-powered software, business platforms and digital products that help companies automate, scale and operate smarter.',
                capabilitiesLabel: 'Core capabilities',
                capabilities: ['AI Systems', 'Custom Software', 'Web Platforms', 'Mobile Apps', 'Business Automation'],
                stats: {
                    experience: 'Years experience',
                    projects: 'Real products',
                    support: 'Industries',
                },
            },

            startProject: {
                badge: 'Start Project',
                title: 'Build your next digital product with us',
                desc: 'Tell us what you are building and the business problem behind it. We will review the scope and suggest the right delivery path.',

                chooseType: 'Choose project type',
                choosePackage: 'Estimated budget',
                chooseTimeline: 'Preferred timeline',
                yourRequest: 'Your request',
                selectedPackage: 'Selected budget',

                types: {
                    website: 'AI System', bot: 'Custom Software', webapp: 'Web / SaaS Platform', ai: 'Mobile Product', design: 'Business Automation', mvp: 'Startup / MVP',
                },

                packages: {
                    notSure: 'Not sure yet',
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
                    company: 'Company',
                    email: 'Work email *',
                    contact: 'Phone / Telegram (optional)',
                    idea: 'What are you building and what business problem should it solve? *',
                    required: 'Please add your name, work email and project description.',
                    sendTelegram: 'Send to Telegram',
                    sendWhatsapp: 'Write on WhatsApp',
                },
                timelines: { flexible: 'Flexible / not sure', oneThree: '1–3 months', threeSix: '3–6 months', sixPlus: '6+ months' },
            },

            projects: {
                title: 'Selected projects',
                desc: 'Real digital products built across finance, gaming, education and healthcare.',
                previousProject: 'Show previous projects',
                nextProject: 'Show next projects',

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

                    aros: {
                        title: 'AROS — Restaurant Intelligence',
                        desc: 'AI platform that turns food costs, supplier prices and recipe data into clear profit insights.',
                        result: 'Built for faster decisions and healthier restaurant margins.',
                    },

                    astrum: {
                        title: 'ASTRUM Coffee — ordering platform',
                        desc: 'A modern café experience for discovering locations, browsing the menu and ordering ahead for pickup.',
                        result: 'A fast, mobile-first ordering journey built for customer loyalty.',
                    },

                    himago: {
                        title: 'HimaGo — discover Armenia',
                        desc: 'Travel platform for discovering stays, experiences, tours and local services across Armenia.',
                        result: 'A premium foundation for smarter travel discovery and future bookings.',
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
                    discovery: { title: 'Discovery', desc: 'We clarify the business problem, users, constraints and measurable product goals.' },
                    strategy: { title: 'Product Strategy', desc: 'We define priorities, scope, roadmap and the strongest route to a valuable first release.' },
                    architecture: { title: 'UX & Architecture', desc: 'We design user flows, interfaces, data structure and a scalable technical foundation.' },
                    engineering: { title: 'Engineering', desc: 'We build, integrate and test the frontend, backend, AI and operational tooling.' },
                    evolution: { title: 'Evolution', desc: 'After launch, we improve the product using real feedback, data and changing business needs.' },
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
                badge: 'Engineering Capabilities',
                title: 'Software built around your business, not a template',
                description:
                    'From product strategy and architecture to engineering, launch and evolution — we build systems ready for real operations.',

                backHome: 'Back to Home',

                servicesTitle: 'Capabilities',
                servicesDesc: 'Senior product and engineering capability across the full software lifecycle.',

                processTitle: 'How We Work',
                processDesc: 'A clear process from idea to launch.',

                ctaTitle: 'Have an Idea?',
                ctaDesc:
                    'Tell us about your project and we will help turn it into a real digital product.',

                whatWeBuild: 'Core Capabilities',

                list: {
                    website: {
                        title: 'AI & Intelligent Systems',
                        desc: 'AI assistants, intelligent workflows, data-driven tools and applied automation built around business operations.',
                    },
                    saas: {
                        title: 'Custom Software Engineering',
                        desc: 'Purpose-built software, internal systems and complex products engineered for your exact workflow.',
                    },
                    ai: {
                        title: 'Web & SaaS Platforms',
                        desc: 'Scalable web applications, SaaS products, customer portals and commerce platforms.',
                    },
                    telegram: {
                        title: 'Mobile Product Development',
                        desc: 'Mobile-first product experiences and cross-platform applications connected to reliable backends.',
                    },
                    crm: {
                        title: 'Business Automation',
                        desc: 'CRM, admin systems and automated workflows that reduce repetitive work and improve control.',
                    },
                    automation: {
                        title: 'Systems & Integrations',
                        desc: 'APIs, payment providers, data synchronization and integrations connecting your technology stack.',
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
                discovery: 'Discovery', strategy: 'Product Strategy', architecture: 'UX & Architecture', engineering: 'Engineering', evolution: 'Evolution',
                analysis: 'Analysis',
                design: 'Design',
                development: 'Development',
                testing: 'Testing',
                launch: 'Launch',
                support: 'Support',
            },
            footer: {
                eyebrow: 'Have an idea?',
                title: 'Have a complex idea? Let’s turn it into a scalable product.',
                description: 'Tell us about the business problem. We will help shape the product, architecture and delivery plan.',
                brandText: 'AI systems, custom software and digital platforms engineered for ambitious businesses.',
                talkToAI: 'Talk to Isolation AI',
                navigation: 'Explore',
                contact: 'Contact',
                address: 'Hakob Hakobyan 3, Yerevan',
                rights: 'All rights reserved.',
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
                services: 'Компетенции',
                projects: 'Кейсы',
                process: 'Процесс',
                contact: 'Контакты',
            },

            menu: {
                title: 'Создадим следующую сильную систему',
                subtitle: 'AI-системы, заказное ПО и цифровые платформы',
                desc: 'Мы превращаем сложные бизнес-задачи в масштабируемые программные продукты.',
            },

            hero: {
                eyebrow: 'AI & Software Engineering Company',
                title: 'Мы превращаем сложные задачи бизнеса в интеллектуальное ПО',
                typingWords: [
                    'готовое к масштабированию',
                    'усиленное AI',
                    'созданное для роста',
                    'спроектированное для бизнеса',
                ],
                description:
                    'Мы проектируем и разрабатываем AI-системы, бизнес-платформы и цифровые продукты, которые помогают компаниям автоматизировать процессы, масштабироваться и работать умнее.',
                capabilitiesLabel: 'Ключевые компетенции',
                capabilities: ['AI-системы', 'Заказное ПО', 'Web-платформы', 'Mobile Apps', 'Автоматизация бизнеса'],
                stats: {
                    experience: 'Лет опыта',
                    projects: 'Реальных продуктов',
                    support: 'Индустрий',
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
                desc: 'Расскажите, что вы создаёте и какую бизнес-задачу нужно решить. Мы изучим scope и предложим правильный план реализации.',

                chooseType: 'Выберите тип проекта',
                choosePackage: 'Ориентировочный бюджет',
                chooseTimeline: 'Желаемые сроки',
                yourRequest: 'Ваша заявка',
                selectedPackage: 'Выбранный бюджет',

                types: {
                    website: 'AI-система', bot: 'Заказное ПО', webapp: 'Web / SaaS платформа', ai: 'Mobile-продукт', design: 'Автоматизация бизнеса', mvp: 'Startup / MVP',
                },

                packages: {
                    notSure: 'Пока не уверен',
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
                    company: 'Компания',
                    email: 'Рабочий email *',
                    contact: 'Телефон / Telegram (необязательно)',
                    idea: 'Что вы создаёте и какую бизнес-задачу нужно решить? *',
                    required: 'Укажите имя, рабочий email и описание проекта.',
                    sendTelegram: 'Отправить в Telegram',
                    sendWhatsapp: 'Написать в WhatsApp',
                },
                timelines: { flexible: 'Гибко / пока не уверен', oneThree: '1–3 месяца', threeSix: '3–6 месяцев', sixPlus: '6+ месяцев' },
            },

            projects: {
                title: 'Избранные проекты',
                desc: 'Реальные цифровые продукты в сфере финансов, игр, образования, медицины и e-commerce.',
                previousProject: 'Показать предыдущие проекты',
                nextProject: 'Показать следующие проекты',

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

                    aros: {
                        title: 'AROS — аналитика для ресторанов',
                        desc: 'AI-платформа для анализа себестоимости, цен поставщиков и прибыльности ресторанных блюд.',
                        result: 'Быстрые решения, прозрачные расходы и здоровая маржинальность ресторана.',
                    },

                    astrum: {
                        title: 'ASTRUM Coffee — платформа заказов',
                        desc: 'Современный сервис для поиска кофеен, просмотра меню и предварительного заказа с самовывозом.',
                        result: 'Быстрый mobile-first путь заказа и основа для лояльности клиентов.',
                    },

                    himago: {
                        title: 'HimaGo — путешествия по Армении',
                        desc: 'Платформа для поиска жилья, впечатлений, туров и локальных услуг по всей Армении.',
                        result: 'Премиальная основа для умного планирования путешествий и будущих бронирований.',
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
                    discovery: { title: 'Discovery', desc: 'Уточняем бизнес-задачу, пользователей, ограничения и измеримые цели продукта.' },
                    strategy: { title: 'Продуктовая стратегия', desc: 'Определяем приоритеты, объём, roadmap и сильный путь к первому ценному релизу.' },
                    architecture: { title: 'UX и архитектура', desc: 'Проектируем пользовательские сценарии, интерфейсы, данные и масштабируемую техническую основу.' },
                    engineering: { title: 'Разработка', desc: 'Создаём, интегрируем и тестируем frontend, backend, AI и операционные инструменты.' },
                    evolution: { title: 'Развитие', desc: 'После запуска улучшаем продукт на основе реальной обратной связи, данных и задач бизнеса.' },
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
                badge: 'Инженерные компетенции',
                title: 'Программные продукты под ваш бизнес, а не по шаблону',
                description:
                    'От продуктовой стратегии и архитектуры до разработки, запуска и развития — создаём системы для реальной эксплуатации.',

                backHome: 'Вернуться на главную',

                servicesTitle: 'Компетенции',
                servicesDesc: 'Продуктовая и инженерная работа на всём жизненном цикле программного продукта.',

                processTitle: 'Как мы работаем',
                processDesc: 'Понятный процесс от идеи до запуска.',

                ctaTitle: 'Есть идея?',
                ctaDesc:
                    'Расскажите нам о вашем проекте, и мы поможем превратить его в реальный цифровой продукт.',

                whatWeBuild: 'Ключевые компетенции',

                list: {
                    website: {
                        title: 'AI и интеллектуальные системы',
                        desc: 'AI-ассистенты, умные workflow, инструменты на основе данных и прикладная автоматизация.',
                    },

                    saas: {
                        title: 'Заказная разработка ПО',
                        desc: 'Индивидуальные системы, внутренние продукты и сложное ПО для ваших процессов.',
                    },

                    ai: {
                        title: 'Web и SaaS платформы',
                        desc: 'Масштабируемые web-приложения, SaaS-продукты, кабинеты клиентов и commerce-платформы.',
                    },

                    telegram: {
                        title: 'Разработка мобильных продуктов',
                        desc: 'Mobile-first продукты и кроссплатформенные приложения с надёжным backend.',
                    },

                    crm: {
                        title: 'Автоматизация бизнеса',
                        desc: 'CRM, админ-системы и workflow, которые сокращают ручную работу и дают контроль.',
                    },

                    automation: {
                        title: 'Системы и интеграции',
                        desc: 'API, платежи, синхронизация данных и интеграции вашей технологической экосистемы.',
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
                discovery: 'Discovery', strategy: 'Стратегия', architecture: 'UX и архитектура', engineering: 'Разработка', evolution: 'Развитие',
                analysis: 'Анализ',
                design: 'Дизайн',
                development: 'Разработка',
                testing: 'Тестирование',
                launch: 'Запуск',
                support: 'Поддержка',
            },
            footer: {
                eyebrow: 'Есть идея?',
                title: 'Есть сложная идея? Превратим её в масштабируемый продукт.',
                description: 'Расскажите о бизнес-задаче. Мы поможем сформировать продукт, архитектуру и план реализации.',
                brandText: 'AI-системы, заказное ПО и цифровые платформы для амбициозного бизнеса.',
                talkToAI: 'Обсудить с Isolation AI',
                navigation: 'Навигация',
                contact: 'Контакты',
                address: 'Акопа Акопяна 3, Ереван',
                rights: 'Все права защищены.',
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
                services: 'Կարողություններ',
                projects: 'Աշխատանքներ',
                process: 'Գործընթաց',
                contact: 'Կապ',
            },

            menu: {
                title: 'Եկեք կառուցենք հաջորդ հզոր համակարգը',
                subtitle: 'AI համակարգեր, անհատական software և թվային հարթակներ',
                desc: 'Բարդ բիզնես խնդիրները վերածում ենք մասշտաբավորվող ծրագրային պրոդուկտների։',
            },

            hero: {
                eyebrow: 'AI & Software Engineering Company',
                title: 'Բարդ բիզնես խնդիրները վերածում ենք խելացի software-ի',
                typingWords: [
                    'պատրաստ մասշտաբավորման',
                    'աշխատում AI-ով',
                    'ստեղծված աճի համար',
                    'նախագծված բիզնեսի համար',
                ],
                description:
                    'Մենք նախագծում և մշակում ենք AI համակարգեր, բիզնես հարթակներ և թվային պրոդուկտներ, որոնք օգնում են ընկերություններին ավտոմատացնել, մասշտաբավորվել և աշխատել ավելի խելացի։',
                capabilitiesLabel: 'Հիմնական կարողություններ',
                capabilities: ['AI համակարգեր', 'Custom Software', 'Web հարթակներ', 'Mobile Apps', 'Բիզնես ավտոմատացում'],
                stats: {
                    experience: 'Տարվա փորձ',
                    projects: 'Իրական պրոդուկտ',
                    support: 'Ոլորտ',
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
                desc: 'Պատմեք՝ ինչ եք ստեղծում և ինչ բիզնես խնդիր պետք է լուծվի։ Մենք կուսումնասիրենք scope-ը և կառաջարկենք ճիշտ ճանապարհը։',

                chooseType: 'Ընտրեք նախագծի տեսակը',
                choosePackage: 'Նախնական բյուջե',
                chooseTimeline: 'Նախընտրելի ժամկետ',
                yourRequest: 'Ձեր հայտը',
                selectedPackage: 'Ընտրված բյուջե',

                types: {
                    website: 'AI համակարգ', bot: 'Custom Software', webapp: 'Web / SaaS հարթակ', ai: 'Mobile պրոդուկտ', design: 'Բիզնես ավտոմատացում', mvp: 'Startup / MVP',
                },

                packages: {
                    notSure: 'Դեռ վստահ չեմ',
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
                    company: 'Ընկերություն',
                    email: 'Աշխատանքային email *',
                    contact: 'Հեռախոս / Telegram (ոչ պարտադիր)',
                    idea: 'Ի՞նչ եք ստեղծում և ի՞նչ բիզնես խնդիր պետք է լուծվի։ *',
                    required: 'Նշեք անունը, աշխատանքային email-ը և նախագծի նկարագրությունը։',
                    sendTelegram: 'Ուղարկել Telegram',
                    sendWhatsapp: 'Գրել WhatsApp',
                },
                timelines: { flexible: 'Ճկուն / դեռ վստահ չեմ', oneThree: '1–3 ամիս', threeSix: '3–6 ամիս', sixPlus: '6+ ամիս' },
            },

            projects: {
                title: 'Ընտրված նախագծեր',
                desc: 'Իրական թվային լուծումներ ֆինանսների, խաղերի, կրթության, բժշկության և e-commerce ոլորտներում։',
                previousProject: 'Ցույց տալ նախորդ նախագծերը',
                nextProject: 'Ցույց տալ հաջորդ նախագծերը',

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

                    aros: {
                        title: 'AROS — ռեստորանային վերլուծություն',
                        desc: 'AI հարթակ՝ ինքնարժեքի, մատակարարների գների և ռեստորանային ուտեստների շահութաբերության վերլուծության համար։',
                        result: 'Ավելի արագ որոշումներ, թափանցիկ ծախսեր և առողջ շահութաբերություն։',
                    },

                    astrum: {
                        title: 'ASTRUM Coffee — պատվերների հարթակ',
                        desc: 'Ժամանակակից հարթակ՝ սրճարաններ գտնելու, մենյուն դիտելու և նախապես պատվիրելու համար։',
                        result: 'Արագ mobile-first պատվերի փորձ և հաճախորդների հավատարմության հիմք։',
                    },

                    himago: {
                        title: 'HimaGo — բացահայտիր Հայաստանը',
                        desc: 'Հայաստանում կացարաններ, տպավորություններ, տուրեր և տեղական ծառայություններ գտնելու հարթակ։',
                        result: 'Պրեմիում հիմք՝ խելացի ճանապարհորդությունների և ապագա ամրագրումների համար։',
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
                    discovery: { title: 'Discovery', desc: 'Հստակեցնում ենք բիզնես խնդիրը, օգտատերերին, սահմանափակումներն ու չափելի նպատակները։' },
                    strategy: { title: 'Պրոդուկտային ռազմավարություն', desc: 'Սահմանում ենք առաջնահերթությունները, scope-ը, roadmap-ը և առաջին արժեքավոր release-ի ուղին։' },
                    architecture: { title: 'UX և ճարտարապետություն', desc: 'Նախագծում ենք user flow-երը, interface-ը, տվյալները և մասշտաբավորվող տեխնիկական հիմքը։' },
                    engineering: { title: 'Engineering', desc: 'Մշակում, ինտեգրում և թեստավորում ենք frontend-ը, backend-ը, AI-ը և գործառնական գործիքները։' },
                    evolution: { title: 'Զարգացում', desc: 'Գործարկումից հետո բարելավում ենք պրոդուկտը իրական feedback-ի, տվյալների և բիզնես կարիքների հիման վրա։' },
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
                badge: 'Ինժեներական կարողություններ',
                title: 'Software՝ ստեղծված ձեր բիզնեսի, ոչ թե template-ի շուրջ',
                description:
                    'Պրոդուկտային ռազմավարությունից և ճարտարապետությունից մինչև մշակում, գործարկում և զարգացում։',

                backHome: 'Վերադառնալ գլխավոր էջ',

                servicesTitle: 'Կարողություններ',
                servicesDesc: 'Պրոդուկտային և ինժեներական աշխատանք software-ի ամբողջ lifecycle-ի ընթացքում։',

                processTitle: 'Ինչպես ենք աշխատում',
                processDesc: 'Հստակ գործընթաց՝ գաղափարից մինչև գործարկում։',

                ctaTitle: 'Ունե՞ք գաղափար',
                ctaDesc:
                    'Պատմեք ձեր նախագծի մասին, և մենք կօգնենք այն վերածել իրական թվային պրոդուկտի։',

                whatWeBuild: 'Հիմնական կարողություններ',

                list: {
                    website: {
                        title: 'AI և խելացի համակարգեր',
                        desc: 'AI օգնականներ, խելացի workflow-ներ, տվյալների վրա հիմնված գործիքներ և ավտոմատացում։',
                    },

                    saas: {
                        title: 'Custom Software Engineering',
                        desc: 'Անհատական համակարգեր, ներքին պրոդուկտներ և բարդ software ձեր գործընթացների համար։',
                    },

                    ai: {
                        title: 'Web և SaaS հարթակներ',
                        desc: 'Մասշտաբավորվող web հավելվածներ, SaaS պրոդուկտներ, client portal-ներ և commerce հարթակներ։',
                    },

                    telegram: {
                        title: 'Mobile պրոդուկտների մշակում',
                        desc: 'Mobile-first պրոդուկտներ և cross-platform հավելվածներ՝ հուսալի backend-ով։',
                    },

                    crm: {
                        title: 'Բիզնես ավտոմատացում',
                        desc: 'CRM, admin համակարգեր և workflow-ներ, որոնք նվազեցնում են ձեռքի աշխատանքը։',
                    },

                    automation: {
                        title: 'Համակարգեր և ինտեգրացիաներ',
                        desc: 'API-ներ, վճարումներ, տվյալների սինխրոնացում և տեխնոլոգիական համակարգերի կապ։',
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
                discovery: 'Discovery', strategy: 'Ռազմավարություն', architecture: 'UX և Architecture', engineering: 'Engineering', evolution: 'Զարգացում',
                analysis: 'Վերլուծություն',
                design: 'Դիզայն',
                development: 'Մշակում',
                testing: 'Թեստավորում',
                launch: 'Գործարկում',
                support: 'Աջակցություն',
            },
            footer: {
                eyebrow: 'Ունե՞ք գաղափար',
                title: 'Ունե՞ք բարդ գաղափար։ Դարձնենք այն մասշտաբավորվող պրոդուկտ։',
                description: 'Պատմեք բիզնես խնդրի մասին։ Մենք կօգնենք ձևավորել պրոդուկտը, architecture-ը և իրականացման պլանը։',
                brandText: 'AI համակարգեր, custom software և թվային հարթակներ հավակնոտ բիզնեսների համար։',
                talkToAI: 'Քննարկել Isolation AI-ի հետ',
                navigation: 'Նավիգացիա',
                contact: 'Կապ',
                address: 'Հակոբ Հակոբյան 3, Երևան',
                rights: 'Բոլոր իրավունքները պաշտպանված են։',
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
    lng: localStorage.getItem('isolation-language') || 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
