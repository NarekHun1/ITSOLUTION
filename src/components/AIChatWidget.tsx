import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import '../ai-chat.css';

type Message = {
    role: 'user' | 'ai';
    text: string;
};

export default function AIChatWidget() {
    const [open, setOpen] = useState(false);

    const [input, setInput] = useState('');

    const [messages, setMessages] = useState<Message[]>([
        {
            role: 'ai',
            text: '👋 Hello! I am the Isolation IT Solutions AI assistant. I can help with websites, online stores, CRM, admin panels, AI tools, Telegram bots, prices and timelines.',
        },
    ]);
    const detectLanguage = (message: string): 'ru' | 'hy' | 'en' => {
        if (/[\u0530-\u058F]/.test(message)) return 'hy';
        if (/[а-яё]/i.test(message)) return 'ru';
        return 'en';
    };

    const getAIResponse = (message: string) => {
        const lang = detectLanguage(message);
        const text = message.toLowerCase();
        const phone = '+374041083882';

        const has = (...words: string[]) =>
            words.some((word) => text.includes(word));

        const replies = {
            ru: {
                greeting: `Здравствуйте 👋 Я AI помощник Isolation IT Solutions.\n\nЯ могу помочь вам понять:\n• какой проект лучше сделать\n• примерную цену\n• сроки\n• какие функции нужны\n• что будет входить в сайт, магазин, CRM, AI или Telegram bot\n\nНапишите вашу идею, и я подскажу лучший вариант.\nДля быстрой консультации: ${phone}`,

                price: `Примерные цены:\n\n• Landing page: $300–700\n• Бизнес сайт: $500–1200\n• Корпоративный сайт: $800–1800\n• Интернет-магазин: $900–2500\n• Магазин с админкой: $1200–3000\n• CRM / Admin panel: $600–2500\n• Telegram bot: $500–1800\n• Telegram Mini App: $800–3000\n• AI assistant: $700–2500\n• SaaS платформа: от $2500+\n• Мобильное приложение: от $2500+\n\nТочная цена зависит от функций, дизайна и сложности. Для оценки звоните: ${phone}`,

                time: `Примерные сроки:\n\n• Landing page: 5–10 дней\n• Бизнес сайт: 1–3 недели\n• Интернет-магазин: 2–6 недель\n• CRM / Admin panel: 3–8 недель\n• Telegram bot: 1–4 недели\n• Telegram Mini App: 3–6 недель\n• AI assistant: 2–6 недель\n• SaaS платформа: 2–4 месяца\n• Мобильное приложение: 2–5 месяцев\n\nПосле обсуждения функций мы сможем сказать точнее. Телефон: ${phone}`,

                website: `Да, мы можем создать современный сайт для бизнеса 💻\n\nЧто может входить:\n• premium UX/UI дизайн\n• главная страница\n• услуги или товары\n• формы заявок\n• мультиязычность\n• SEO структура\n• мобильная версия\n• высокая скорость\n• подключение домена\n• аналитика\n• админ панель при необходимости\n\nЦена: примерно $500–1200.\nСрок: 1–3 недели.\n\nОбсудить проект: ${phone}`,

                shop: `Для интернет-магазина мы можем сделать полный проект 🔥\n\nВозможности:\n• красивая главная страница\n• каталог товаров\n• категории\n• фильтры и поиск\n• страница товара\n• корзина\n• оформление заказа\n• онлайн оплата при необходимости\n• админка для товаров\n• загрузка фото\n• управление ценами\n• управление заказами\n• мобильная версия\n• SEO для товаров\n\nЦена: примерно $900–2500.\nЕсли нужна сложная админка и интеграции: $1500–3000+.\n\nДля точной оценки звоните: ${phone}`,

                admin: `Админ панель можно сделать под ваш бизнес ⚙️\n\nЧто может быть внутри:\n• товары\n• заказы\n• клиенты\n• пользователи\n• роли: admin / manager\n• статистика\n• поиск и фильтры\n• загрузка изображений\n• экспорт Excel / CSV\n• уведомления\n• управление контентом\n• dashboard с графиками\n\nЦена: примерно $600–2500.\nСрок: 3–8 недель.\n\nОбсудить детали: ${phone}`,

                crm: `CRM система поможет управлять клиентами и процессами 🧠\n\nМожно добавить:\n• база клиентов\n• заявки\n• статусы\n• менеджеры\n• напоминания\n• задачи\n• комментарии\n• документы\n• статистика\n• роли доступа\n• уведомления\n• интеграции\n\nЦена: примерно $1000–4000+.\nСрок: 1–3 месяца.\n\nДля обсуждения звоните: ${phone}`,

                telegram: `Telegram bot / Mini App можно сделать для продаж, заявок или автоматизации 📱\n\nВозможности:\n• меню\n• заявки\n• каталог\n• оплата\n• личный кабинет\n• уведомления\n• админ панель\n• рассылка\n• интеграция с сайтом\n• Mini App интерфейс\n\nЦена Telegram bot: $500–1800.\nЦена Mini App: $800–3000.\n\nПозвоните для обсуждения: ${phone}`,

                ai: `AI решение можно встроить в сайт или бизнес 🤖\n\nМожно сделать:\n• AI chat assistant\n• AI консультант\n• ответы клиентам\n• подбор услуги\n• генерация текста\n• анализ заявок\n• автоматизация поддержки\n• AI estimator для расчета цены\n• AI recommendation system\n\nЦена: примерно $700–2500+.\nСрок: 2–6 недель.\n\nДля консультации: ${phone}`,

                mobile: `Мобильное приложение можно сделать для iOS и Android 📱\n\nЧто может входить:\n• авторизация\n• личный кабинет\n• каталог\n• заказы\n• push уведомления\n• оплата\n• админ панель\n• API backend\n\nЦена: от $2500+.\nСрок: 2–5 месяцев.\n\nДля точной оценки звоните: ${phone}`,

                design: `Да, мы можем сделать premium UX/UI дизайн 🎨\n\nВходит:\n• анализ проекта\n• структура страниц\n• современный интерфейс\n• mobile-first дизайн\n• анимации\n• UI kit\n• подготовка к разработке\n\nЦена дизайна: примерно $300–1200.\n\nОбсудить дизайн: ${phone}`,

                seo: `SEO можно добавить сразу при разработке 🚀\n\nЧто входит:\n• правильные title/description\n• структура заголовков\n• SEO-friendly страницы\n• скорость загрузки\n• sitemap\n• robots.txt\n• Google Search Console\n• Yandex verification\n• оптимизация под ключевые слова\n\nЦена SEO настройки: примерно $150–600.\n\nПозвоните: ${phone}`,

                payment: `Да, можно подключить онлайн оплату 💳\n\nВарианты:\n• банковская оплата\n• Idram\n• Inecobank / Ameriabank / ArCa при наличии доступа\n• Stripe для международных проектов\n• оплата через Telegram bot\n\nСтоимость интеграции: примерно $300–1000, зависит от платежной системы.\n\nОбсудить: ${phone}`,

                support: `После запуска можем делать поддержку 🛠️\n\nВ поддержку может входить:\n• исправления\n• обновления\n• новые функции\n• мониторинг\n• backup\n• безопасность\n• помощь с сервером\n\nПримерно: $100–500/месяц, зависит от проекта.\n\nТелефон: ${phone}`,

                hosting: `Мы можем помочь с доменом, сервером и запуском 🌐\n\nЧто входит:\n• домен\n• hosting/server\n• SSL сертификат\n• deploy frontend/backend\n• база данных\n• настройка DNS\n• резервные копии\n\nОбычно hosting стоит от $5–30/месяц для небольших проектов.\n\nОбсудить запуск: ${phone}`,

                security: `Безопасность можно добавить обязательно 🔐\n\nЧто делаем:\n• JWT авторизация\n• роли пользователей\n• защита админки\n• валидация данных\n• HTTPS / SSL\n• защита API\n• backup базы данных\n• ограничение доступа\n\nДля серьезных проектов безопасность входит в архитектуру.\nТелефон: ${phone}`,

                process: `Процесс работы обычно такой:\n\n1. Обсуждаем идею\n2. Собираем функции\n3. Делаем структуру\n4. Создаем дизайн\n5. Разрабатываем frontend\n6. Разрабатываем backend\n7. Подключаем базу данных\n8. Тестируем\n9. Запускаем на сервер\n10. Поддерживаем после запуска\n\nДля консультации звоните: ${phone}`,

                default: `Понял 👍 Такой IT проект можно реализовать.\n\nМы можем помочь с:\n• сайтом\n• интернет-магазином\n• админ панелью\n• CRM\n• Telegram bot / Mini App\n• AI assistant\n• мобильным приложением\n• backend / frontend\n• базой данных\n• оплатами\n• SEO\n• запуском на сервер\n\nНапишите, какие функции вам нужны, или позвоните для обсуждения: ${phone}`,
            },

            en: {
                greeting: `Hello 👋 I am the AI assistant of Isolation IT Solutions.\n\nI can help you understand:\n• project idea\n• estimated price\n• timeline\n• required features\n• website, store, CRM, AI or Telegram bot structure\n\nTell me your idea and I will suggest the best solution.\nCall us: ${phone}`,

                price: `Estimated prices:\n\n• Landing page: $300–700\n• Business website: $500–1200\n• Corporate website: $800–1800\n• Online store: $900–2500\n• Store with admin panel: $1200–3000\n• CRM / Admin panel: $600–2500\n• Telegram bot: $500–1800\n• Telegram Mini App: $800–3000\n• AI assistant: $700–2500\n• SaaS platform: from $2500+\n• Mobile app: from $2500+\n\nExact price depends on features and complexity.\nCall us: ${phone}`,

                time: `Estimated timelines:\n\n• Landing page: 5–10 days\n• Business website: 1–3 weeks\n• Online store: 2–6 weeks\n• CRM / Admin panel: 3–8 weeks\n• Telegram bot: 1–4 weeks\n• Telegram Mini App: 3–6 weeks\n• AI assistant: 2–6 weeks\n• SaaS platform: 2–4 months\n• Mobile app: 2–5 months\n\nCall us for exact estimate: ${phone}`,

                website: `Yes, we can build a modern business website 💻\n\nIt can include:\n• premium UX/UI design\n• homepage\n• services or products\n• lead forms\n• multilingual support\n• SEO structure\n• mobile version\n• fast performance\n• domain setup\n• analytics\n• admin panel if needed\n\nEstimated price: $500–1200.\nTimeline: 1–3 weeks.\n\nCall us: ${phone}`,

                shop: `We can build a complete online store 🔥\n\nFeatures:\n• beautiful homepage\n• product catalog\n• categories\n• filters and search\n• product page\n• cart\n• checkout\n• online payments\n• admin panel\n• image upload\n• price management\n• order management\n• mobile version\n• product SEO\n\nEstimated price: $900–2500.\nWith advanced admin/integrations: $1500–3000+.\n\nCall us: ${phone}`,

                admin: `We can build a powerful admin panel ⚙️\n\nIt can include:\n• products\n• orders\n• clients\n• users\n• admin/manager roles\n• statistics\n• search and filters\n• image upload\n• Excel / CSV export\n• notifications\n• content management\n• dashboard charts\n\nEstimated price: $600–2500.\nTimeline: 3–8 weeks.\n\nCall us: ${phone}`,

                crm: `CRM helps manage clients and business processes 🧠\n\nFeatures:\n• client database\n• requests\n• statuses\n• managers\n• reminders\n• tasks\n• comments\n• documents\n• analytics\n• access roles\n• notifications\n• integrations\n\nEstimated price: $1000–4000+.\nTimeline: 1–3 months.\n\nCall us: ${phone}`,

                telegram: `We can build Telegram bots or Mini Apps 📱\n\nFeatures:\n• menu\n• requests\n• catalog\n• payments\n• user cabinet\n• notifications\n• admin panel\n• broadcasts\n• website integration\n• Mini App UI\n\nTelegram bot: $500–1800.\nMini App: $800–3000.\n\nCall us: ${phone}`,

                ai: `We can integrate AI into your website or business 🤖\n\nExamples:\n• AI chat assistant\n• AI consultant\n• customer replies\n• service selection\n• text generation\n• request analysis\n• support automation\n• AI price estimator\n• recommendation system\n\nEstimated price: $700–2500+.\nTimeline: 2–6 weeks.\n\nCall us: ${phone}`,

                mobile: `We can build mobile apps for iOS and Android 📱\n\nFeatures:\n• authentication\n• user cabinet\n• catalog\n• orders\n• push notifications\n• payments\n• admin panel\n• API backend\n\nPrice: from $2500+.\nTimeline: 2–5 months.\n\nCall us: ${phone}`,

                design: `Yes, we can create premium UX/UI design 🎨\n\nIncludes:\n• project analysis\n• page structure\n• modern interface\n• mobile-first design\n• animations\n• UI kit\n• development-ready design\n\nDesign price: $300–1200.\n\nCall us: ${phone}`,

                seo: `SEO can be included during development 🚀\n\nIncludes:\n• title/description\n• heading structure\n• SEO-friendly pages\n• speed optimization\n• sitemap\n• robots.txt\n• Google Search Console\n• Yandex verification\n• keyword optimization\n\nSEO setup: $150–600.\n\nCall us: ${phone}`,

                payment: `Yes, we can integrate online payments 💳\n\nOptions:\n• bank payments\n• Idram\n• ArCa / Armenian banks if available\n• Stripe for international projects\n• Telegram payments\n\nPayment integration: $300–1000 depending on provider.\n\nCall us: ${phone}`,

                support: `We can provide post-launch support 🛠️\n\nIncludes:\n• bug fixes\n• updates\n• new features\n• monitoring\n• backups\n• security\n• server help\n\nSupport: $100–500/month depending on project.\n\nCall us: ${phone}`,

                hosting: `We can help with domain, hosting and deployment 🌐\n\nIncludes:\n• domain\n• hosting/server\n• SSL certificate\n• frontend/backend deploy\n• database\n• DNS setup\n• backups\n\nSmall projects usually need $5–30/month hosting.\n\nCall us: ${phone}`,

                security: `Security is important 🔐\n\nWe can implement:\n• JWT authentication\n• user roles\n• protected admin panel\n• data validation\n• HTTPS / SSL\n• API protection\n• database backups\n• access control\n\nCall us: ${phone}`,

                process: `Our process:\n\n1. Discuss idea\n2. Collect features\n3. Create structure\n4. Design UI/UX\n5. Develop frontend\n6. Develop backend\n7. Connect database\n8. Test\n9. Deploy\n10. Support after launch\n\nCall us: ${phone}`,

                default: `Got it 👍 We can help build this IT project.\n\nWe can help with:\n• website\n• online store\n• admin panel\n• CRM\n• Telegram bot / Mini App\n• AI assistant\n• mobile app\n• backend / frontend\n• database\n• payments\n• SEO\n• deployment\n\nTell me what features you need or call us: ${phone}`,
            },

            hy: {
                greeting: `Բարև 👋 Ես Isolation IT Solutions-ի AI օգնականն եմ։\n\nԿարող եմ օգնել հասկանալ՝\n• ինչ նախագիծ է պետք\n• մոտավոր արժեքը\n• ժամկետները\n• անհրաժեշտ ֆունկցիաները\n• կայք, խանութ, CRM, AI կամ Telegram bot կառուցվածքը\n\nԳրեք ձեր գաղափարը, և ես կօգնեմ։\nԶանգահարեք՝ ${phone}`,

                price: `Մոտավոր գներ՝\n\n• Landing page: $300–700\n• Բիզնես կայք: $500–1200\n• Կորպորատիվ կայք: $800–1800\n• Օնլայն խանութ: $900–2500\n• Խանութ ադմին վահանակով: $1200–3000\n• CRM / Admin panel: $600–2500\n• Telegram bot: $500–1800\n• Telegram Mini App: $800–3000\n• AI assistant: $700–2500\n• SaaS հարթակ: $2500-ից սկսած\n• Mobile app: $2500-ից սկսած\n\nՃշգրիտ գինը կախված է ֆունկցիաներից։\nԶանգահարեք՝ ${phone}`,

                time: `Մոտավոր ժամկետներ՝\n\n• Landing page: 5–10 օր\n• Բիզնես կայք: 1–3 շաբաթ\n• Օնլայն խանութ: 2–6 շաբաթ\n• CRM / Admin panel: 3–8 շաբաթ\n• Telegram bot: 1–4 շաբաթ\n• Telegram Mini App: 3–6 շաբաթ\n• AI assistant: 2–6 շաբաթ\n• SaaS հարթակ: 2–4 ամիս\n• Mobile app: 2–5 ամիս\n\nՃշգրիտ գնահատման համար զանգահարեք՝ ${phone}`,

                website: `Այո, կարող ենք ստեղծել ժամանակակից բիզնես կայք 💻\n\nԿարող է ներառել՝\n• premium UX/UI դիզայն\n• գլխավոր էջ\n• ծառայություններ կամ ապրանքներ\n• հայտի ձևեր\n• բազմալեզու համակարգ\n• SEO կառուցվածք\n• mobile տարբերակ\n• արագ աշխատանք\n• դոմենի միացում\n• analytics\n• ադմին վահանակ անհրաժեշտության դեպքում\n\nՄոտավոր արժեքը՝ $500–1200։\nԺամկետը՝ 1–3 շաբաթ։\n\nԶանգահարեք՝ ${phone}`,

                shop: `Կարող ենք ստեղծել ամբողջական օնլայն խանութ 🔥\n\nՀնարավորություններ՝\n• գեղեցիկ գլխավոր էջ\n• ապրանքների կատալոգ\n• կատեգորիաներ\n• ֆիլտրեր և որոնում\n• ապրանքի էջ\n• զամբյուղ\n• պատվերի ձևակերպում\n• օնլայն վճարում\n• ադմին վահանակ\n• նկարների վերբեռնում\n• գների կառավարում\n• պատվերների կառավարում\n• mobile տարբերակ\n• SEO ապրանքների համար\n\nՄոտավոր արժեքը՝ $900–2500։\nԲարդ ադմին/ինտեգրացիաներով՝ $1500–3000+։\n\nԶանգահարեք՝ ${phone}`,

                admin: `Կարող ենք ստեղծել հզոր ադմին վահանակ ⚙️\n\nԿարող է ներառել՝\n• ապրանքներ\n• պատվերներ\n• հաճախորդներ\n• օգտատերեր\n• admin/manager դերեր\n• վիճակագրություն\n• որոնում և ֆիլտրեր\n• նկարների վերբեռնում\n• Excel / CSV export\n• ծանուցումներ\n• բովանդակության կառավարում\n• dashboard գրաֆիկներով\n\nՄոտավոր արժեքը՝ $600–2500։\nԺամկետը՝ 3–8 շաբաթ։\n\nԶանգահարեք՝ ${phone}`,

                crm: `CRM համակարգը օգնում է կառավարել հաճախորդներին և գործընթացները 🧠\n\nԿարող է ներառել՝\n• հաճախորդների բազա\n• հայտեր\n• ստատուսներ\n• մենեջերներ\n• հիշեցումներ\n• առաջադրանքներ\n• մեկնաբանություններ\n• փաստաթղթեր\n• վերլուծություն\n• մուտքի դերեր\n• ծանուցումներ\n• ինտեգրացիաներ\n\nՄոտավոր արժեքը՝ $1000–4000+։\nԺամկետը՝ 1–3 ամիս։\n\nԶանգահարեք՝ ${phone}`,

                telegram: `Կարող ենք ստեղծել Telegram bot կամ Mini App 📱\n\nՀնարավորություններ՝\n• menu\n• հայտեր\n• կատալոգ\n• վճարումներ\n• անձնական էջ\n• ծանուցումներ\n• ադմին վահանակ\n• broadcast\n• կայքի ինտեգրացիա\n• Mini App UI\n\nTelegram bot: $500–1800։\nMini App: $800–3000։\n\nԶանգահարեք՝ ${phone}`,

                ai: `Կարող ենք AI ինտեգրել կայքի կամ բիզնեսի մեջ 🤖\n\nՕրինակ՝\n• AI chat assistant\n• AI խորհրդատու\n• հաճախորդների պատասխաններ\n• ծառայության ընտրություն\n• տեքստերի գեներացիա\n• հայտերի վերլուծություն\n• support automation\n• AI price estimator\n• recommendation system\n\nՄոտավոր արժեքը՝ $700–2500+։\nԺամկետը՝ 2–6 շաբաթ։\n\nԶանգահարեք՝ ${phone}`,

                mobile: `Կարող ենք ստեղծել mobile app iOS և Android-ի համար 📱\n\nԿարող է ներառել՝\n• մուտք/գրանցում\n• անձնական էջ\n• կատալոգ\n• պատվերներ\n• push ծանուցումներ\n• վճարումներ\n• ադմին վահանակ\n• API backend\n\nԳինը՝ $2500-ից սկսած։\nԺամկետը՝ 2–5 ամիս։\n\nԶանգահարեք՝ ${phone}`,

                design: `Այո, կարող ենք ստեղծել premium UX/UI դիզայն 🎨\n\nՆերառում է՝\n• նախագծի վերլուծություն\n• էջերի կառուցվածք\n• ժամանակակից ինտերֆեյս\n• mobile-first դիզայն\n• անիմացիաներ\n• UI kit\n• development-ready դիզայն\n\nԴիզայնի արժեքը՝ $300–1200։\n\nԶանգահարեք՝ ${phone}`,

                seo: `SEO-ն կարող ենք ներառել մշակման ժամանակ 🚀\n\nՆերառում է՝\n• title/description\n• heading structure\n• SEO-friendly էջեր\n• արագության օպտիմիզացիա\n• sitemap\n• robots.txt\n• Google Search Console\n• Yandex verification\n• keyword optimization\n\nSEO կարգավորում՝ $150–600։\n\nԶանգահարեք՝ ${phone}`,

                payment: `Այո, կարող ենք միացնել օնլայն վճարումներ 💳\n\nՏարբերակներ՝\n• բանկային վճարումներ\n• Idram\n• ArCa / հայկական բանկեր\n• Stripe միջազգային նախագծերի համար\n• Telegram payments\n\nՎճարման ինտեգրացիա՝ $300–1000։\n\nԶանգահարեք՝ ${phone}`,

                support: `Գործարկումից հետո կարող ենք ապահովել սպասարկում 🛠️\n\nՆերառում է՝\n• bug fixes\n• թարմացումներ\n• նոր ֆունկցիաներ\n• monitoring\n• backups\n• security\n• սերվերի աջակցություն\n\nՍպասարկում՝ $100–500/ամիս։\n\nԶանգահարեք՝ ${phone}`,

                hosting: `Կարող ենք օգնել դոմենի, hosting-ի և deployment-ի հարցում 🌐\n\nՆերառում է՝\n• դոմեն\n• hosting/server\n• SSL certificate\n• frontend/backend deploy\n• database\n• DNS setup\n• backups\n\nՓոքր նախագծերի hosting-ը սովորաբար $5–30/ամիս է։\n\nԶանգահարեք՝ ${phone}`,

                security: `Անվտանգությունը շատ կարևոր է 🔐\n\nԿարող ենք անել՝\n• JWT authorization\n• օգտատերերի դերեր\n• պաշտպանված ադմին վահանակ\n• տվյալների validation\n• HTTPS / SSL\n• API protection\n• database backups\n• access control\n\nԶանգահարեք՝ ${phone}`,

                process: `Մեր աշխատանքի փուլերը՝\n\n1. Քննարկում ենք գաղափարը\n2. Հավաքում ենք ֆունկցիաները\n3. Կազմում ենք կառուցվածքը\n4. Ստեղծում ենք UX/UI դիզայն\n5. Մշակում ենք frontend\n6. Մշակում ենք backend\n7. Միացնում ենք database\n8. Թեստավորում ենք\n9. Գործարկում ենք\n10. Սպասարկում ենք\n\nԶանգահարեք՝ ${phone}`,

                default: `Հասկացա 👍 Այդ IT նախագիծը կարող ենք իրականացնել։\n\nԿարող ենք օգնել՝\n• կայք\n• օնլայն խանութ\n• ադմին վահանակ\n• CRM\n• Telegram bot / Mini App\n• AI assistant\n• mobile app\n• backend / frontend\n• database\n• վճարումներ\n• SEO\n• deployment\n\nԳրեք, ինչ ֆունկցիաներ են պետք, կամ զանգահարեք՝ ${phone}`,
            },
        };

        const r = replies[lang];

        if (has('привет', 'здравствуйте', 'добрый', 'hello', 'hi', 'hey', 'բարև', 'ողջույն')) return r.greeting;

        if (has('цена', 'стоимость', 'сколько', 'бюджет', 'price', 'cost', 'how much', 'budget', 'գին', 'արժեք', 'ինչքան')) return r.price;

        if (has('срок', 'время', 'дней', 'недель', 'месяц', 'timeline', 'time', 'days', 'weeks', 'ժամկետ', 'օր', 'շաբաթ', 'ամիս')) return r.time;

        if (has('магазин', 'товар', 'продукт', 'интернет магазин', 'online store', 'shop', 'store', 'product', 'ecommerce', 'խանութ', 'ապրանք')) return r.shop;

        if (has('админ', 'админка', 'панель', 'dashboard', 'admin', 'manager panel', 'վահանակ', 'ադմին')) return r.admin;

        if (has('crm', 'клиент', 'клиенты', 'заявки', 'лиды', 'client', 'clients', 'leads', 'հաճախորդ', 'հայտ')) return r.crm;

        if (has('telegram', 'bot', 'бот', 'mini app', 'webapp', 'տելեգրամ', 'բոտ')) return r.telegram;

        if (has('ai', 'ии', 'искусственный', 'нейро', 'chatgpt', 'assistant', 'чат', 'արհեստական', 'օգնական')) return r.ai;

        if (has('мобильное', 'приложение', 'ios', 'android', 'mobile app', 'app', 'հավելված')) return r.mobile;

        if (has('дизайн', 'ux', 'ui', 'figma', 'design', 'դիզայն')) return r.design;

        if (has('seo', 'google', 'yandex', 'поиск', 'продвижение', 'սեո', 'որոնում')) return r.seo;

        if (has('оплата', 'платеж', 'payment', 'pay', 'stripe', 'idram', 'arca', 'վճարում')) return r.payment;

        if (has('поддержка', 'сопровождение', 'обслуживание', 'support', 'maintenance', 'սպասարկում')) return r.support;

        if (has('домен', 'хостинг', 'сервер', 'hosting', 'domain', 'server', 'ssl', 'դոմեն', 'սերվեր')) return r.hosting;

        if (has('безопасность', 'защита', 'security', 'safe', 'jwt', 'ssl', 'անվտանգ')) return r.security;

        if (has('этап', 'процесс', 'как работаете', 'process', 'steps', 'workflow', 'փուլ')) return r.process;

        if (has('сайт', 'веб', 'website', 'landing', 'page', 'web', 'կայք')) return r.website;

        return r.default;
    };

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage: Message = {
            role: 'user',
            text: input,
        };

        const aiMessage: Message = {
            role: 'ai',
            text: getAIResponse(input),
        };

        setMessages((prev) => [
            ...prev,
            userMessage,
            aiMessage,
        ]);

        setInput('');
    };

    return (
        <>
            {/* BUTTON */}
            <motion.button
                className="aiButton"
                whileTap={{ scale: 0.92 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setOpen(true)}
            >
                <MessageCircle size={28} />
            </motion.button>

            {/* CHAT */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        className="aiChat"
                        initial={{ opacity: 0, y: 40, scale: 0.92 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.92 }}
                    >
                        {/* HEADER */}
                        <div className="aiHeader">
                            <div>
                                <strong>AI Assistant</strong>
                                <span>Isolation IT Solutions</span>
                            </div>

                            <button
                                className="aiClose"
                                onClick={() => setOpen(false)}
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* MESSAGES */}
                        <div className="aiMessages">
                            {messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`aiMsg ${msg.role}`}
                                >
                                    {msg.text}
                                </div>
                            ))}
                        </div>

                        {/* INPUT */}
                        <div className="aiInput">
                            <input
                                value={input}
                                onChange={(e) =>
                                    setInput(e.target.value)
                                }
                                placeholder="Ask something..."
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        handleSend();
                                    }
                                }}
                            />

                            <button onClick={handleSend}>
                                <Send size={18} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}