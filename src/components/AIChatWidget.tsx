import { useEffect, useRef, useState } from 'react';
import { X, Send, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import '../ai-chat.css';

type Message = {
    role: 'user' | 'ai';
    text: string;
};

export default function AIChatWidget() {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    const phone = '+374041083882';
    const email = 'isalationit@gmail.com';

    const quickQuestions = [
        'Կայքի գինը',
        'Օնլայն խանութ',
        'CRM համակարգ',
        'Ադմին վահանակ',
        'AI օգնական',
        'Telegram bot',
        'Ժամկետները',
        'Օնլայն վճարում',
    ];

    const [messages, setMessages] = useState<Message[]>([
        {
            role: 'ai',
            text:
                `👋 Բարև, ես Isolation IT Solutions-ի AI օգնականն եմ։\n\n` +
                `Կարող եմ օգնել հասկանալ՝\n` +
                `• ինչ կայք է պետք\n` +
                `• մոտավոր արժեքը\n` +
                `• ժամկետները\n` +
                `• ինչ ֆունկցիաներ են պետք\n` +
                `• ադմին վահանակ, CRM, AI կամ Telegram bot\n\n` +
                `📞 ${phone}\n` +
                `📩 ${email}`,
        },
    ]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);

    const detectLanguage = (message: string): 'ru' | 'hy' | 'en' => {
        if (/[\u0530-\u058F]/.test(message)) return 'hy';
        if (/[а-яё]/i.test(message)) return 'ru';
        return 'en';
    };

    const getAIResponse = (message: string) => {
        const lang = detectLanguage(message);
        const text = message.toLowerCase();

        const has = (...words: string[]) =>
            words.some((word) => text.includes(word.toLowerCase()));

        const footer = `\n\n📞 ${phone}\n📩 ${email}`;
        if (
            has(
                'barev',
                'բարև',
                'բարեւ',
                'voghjuyn',
                'ողջույն',
                'privet',
                'привет',
                'здравствуйте',
                'hello',
                'hi',
                'hey',
                'helo'
            )
        ) {
            if (lang === 'ru') {
                return `Здравствуйте 👋 Чем могу помочь?\n\nЯ отвечаю на вопросы про IT сферу и наши услуги:\n• сайты\n• интернет-магазины\n• CRM\n• админ панели\n• AI ассистенты\n• Telegram bots\n• mobile apps\n• цены и сроки${footer}`;
            }

            if (lang === 'hy') {
                return `Բարև 👋 Ինչո՞վ կարող եմ օգնել։\n\nԵս պատասխանում եմ IT ոլորտի և մեր ծառայությունների հարցերին՝\n• կայքեր\n• օնլայն խանութներ\n• CRM\n• ադմին վահանակներ\n• AI օգնականներ\n• Telegram bot-եր\n• mobile հավելվածներ\n• գներ և ժամկետներ${footer}`;
            }

            return `Hello 👋 How can I help you?\n\nI answer questions about IT and our services:\n• websites\n• online stores\n• CRM\n• admin panels\n• AI assistants\n• Telegram bots\n• mobile apps\n• prices and timelines${footer}`;
        }
        if (has('գին', 'արժեք', 'ինչքան', 'price', 'cost', 'how much', 'сколько', 'цена', 'стоимость', 'budget')) {
            if (lang === 'ru') {
                return `💰 Примерные цены:\n\n• Landing page — $300–700\n• Бизнес сайт — $500–1200\n• Интернет-магазин — $900–2500\n• Магазин с админкой — $1200–3000\n• CRM система — $1000–4000+\n• Telegram bot — $500–1800\n• AI assistant — $700–2500+\n• Mobile app — от $2500+\n\nТочная цена зависит от функций, дизайна и сложности проекта.${footer}`;
            }

            if (lang === 'hy') {
                return `💰 Մոտավոր գներ՝\n\n• Landing page — $300–700\n• Բիզնես կայք — $500–1200\n• Օնլայն խանութ — $900–2500\n• Խանութ ադմին վահանակով — $1200–3000\n• CRM համակարգ — $1000–4000+\n• Telegram bot — $500–1800\n• AI օգնական — $700–2500+\n• Mobile app — $2500-ից սկսած\n\nՎերջնական գինը կախված է ֆունկցիաներից, դիզայնից և նախագծի բարդությունից։${footer}`;
            }

            return `💰 Estimated pricing:\n\n• Landing page — $300–700\n• Business website — $500–1200\n• Online store — $900–2500\n• Store with admin panel — $1200–3000\n• CRM system — $1000–4000+\n• Telegram bot — $500–1800\n• AI assistant — $700–2500+\n• Mobile app — from $2500+\n\nFinal cost depends on features, design and complexity.${footer}`;
        }

        if (has('խանութ', 'ապրանք', 'online store', 'store', 'shop', 'ecommerce', 'магазин', 'товар')) {
            if (lang === 'ru') {
                return `🛒 Да, можем создать современный интернет-магазин.\n\nЧто может входить:\n• каталог товаров\n• категории\n• фильтры и поиск\n• страница товара\n• корзина\n• оформление заказа\n• онлайн оплата\n• админ панель\n• управление заказами\n• мобильная версия\n• SEO для товаров\n\nСрок: примерно 2–6 недель.${footer}`;
            }

            if (lang === 'hy') {
                return `🛒 Այո, կարող ենք ստեղծել ժամանակակից օնլայն խանութ։\n\nԿարող է ներառել՝\n• ապրանքների կատալոգ\n• կատեգորիաներ\n• ֆիլտրեր և որոնում\n• ապրանքի էջ\n• զամբյուղ\n• պատվերի ձևակերպում\n• օնլայն վճարում\n• ադմին վահանակ\n• պատվերների կառավարում\n• mobile տարբերակ\n• SEO\n\nԺամկետը՝ մոտ 2–6 շաբաթ։${footer}`;
            }

            return `🛒 Yes, we can build a premium online store.\n\nIt can include:\n• product catalog\n• categories\n• filters and search\n• product page\n• cart and checkout\n• online payments\n• admin dashboard\n• order management\n• mobile version\n• product SEO\n\nTimeline: around 2–6 weeks.${footer}`;
        }

        if (has('crm', 'հաճախորդ', 'հայտ', 'client', 'clients', 'leads', 'клиент', 'клиенты', 'заявки')) {
            if (lang === 'ru') {
                return `🧠 CRM система поможет управлять клиентами и заявками.\n\nМожно добавить:\n• база клиентов\n• заявки и статусы\n• менеджеры\n• задачи и напоминания\n• комментарии\n• документы\n• роли доступа\n• уведомления\n• аналитика\n\nСрок: примерно 1–3 месяца.${footer}`;
            }

            if (lang === 'hy') {
                return `🧠 CRM համակարգը կօգնի կառավարել հաճախորդներին և հայտերը։\n\nԿարող ենք ավելացնել՝\n• հաճախորդների բազա\n• հայտեր և ստատուսներ\n• մենեջերներ\n• առաջադրանքներ\n• հիշեցումներ\n• մեկնաբանություններ\n• փաստաթղթեր\n• մուտքի դերեր\n• վերլուծություն\n\nԺամկետը՝ մոտ 1–3 ամիս։${footer}`;
            }

            return `🧠 CRM helps manage clients and business processes.\n\nFeatures can include:\n• client database\n• requests and statuses\n• managers\n• tasks and reminders\n• comments\n• documents\n• access roles\n• notifications\n• analytics\n\nTimeline: around 1–3 months.${footer}`;
        }

        if (has('ադմին', 'վահանակ', 'admin', 'dashboard', 'panel', 'админ', 'админка', 'панель')) {
            if (lang === 'ru') {
                return `⚙️ Да, можем создать удобную админ панель.\n\nВнутри может быть:\n• товары\n• заказы\n• клиенты\n• пользователи\n• роли admin / manager\n• статистика\n• поиск и фильтры\n• загрузка фото\n• Excel / CSV export\n• dashboard с графиками\n\nЦена зависит от сложности функций.${footer}`;
            }

            if (lang === 'hy') {
                return `⚙️ Այո, կարող ենք ստեղծել հարմար ադմին վահանակ։\n\nՆերսում կարող է լինել՝\n• ապրանքներ\n• պատվերներ\n• հաճախորդներ\n• օգտատերեր\n• admin / manager դերեր\n• վիճակագրություն\n• որոնում և ֆիլտրեր\n• նկարների վերբեռնում\n• Excel / CSV export\n• dashboard գրաֆիկներով\n\nԳինը կախված է ֆունկցիաների բարդությունից։${footer}`;
            }

            return `⚙️ Yes, we can build a powerful admin panel.\n\nIt can include:\n• products\n• orders\n• clients\n• users\n• admin / manager roles\n• statistics\n• search and filters\n• image upload\n• Excel / CSV export\n• dashboard charts\n\nPrice depends on feature complexity.${footer}`;
        }

        if (has('ai', 'օգնական', 'արհեստական', 'assistant', 'chatgpt', 'ии', 'нейро')) {
            if (lang === 'ru') {
                return `🤖 Можем создать AI ассистента для бизнеса.\n\nВозможности:\n• ответы клиентам\n• AI support\n• AI sales assistant\n• чат на сайте\n• Telegram AI bot\n• генерация текста\n• подбор услуги\n• автоматизация поддержки\n• рекомендации\n\nМожно подключить OpenAI / ChatGPT.${footer}`;
            }

            if (lang === 'hy') {
                return `🤖 Կարող ենք ստեղծել AI օգնական բիզնեսի համար։\n\nՀնարավորություններ՝\n• հաճախորդների պատասխաններ\n• AI support\n• AI sales assistant\n• չատ կայքում\n• Telegram AI bot\n• տեքստերի գեներացիա\n• ծառայության ընտրություն\n• support automation\n• recommendation system\n\nԿարող ենք միացնել OpenAI / ChatGPT։${footer}`;
            }

            return `🤖 We can build an AI assistant for business.\n\nPossibilities:\n• customer replies\n• AI support\n• AI sales assistant\n• website chat\n• Telegram AI bot\n• text generation\n• service selection\n• support automation\n• recommendations\n\nOpenAI / ChatGPT integration is possible.${footer}`;
        }

        if (has('telegram', 'bot', 'բոտ', 'տելեգրամ', 'бот', 'mini app', 'webapp')) {
            if (lang === 'ru') {
                return `📱 Telegram bot или Mini App можно сделать для продаж, заявок и автоматизации.\n\nФункции:\n• меню\n• заявки\n• каталог\n• оплата\n• личный кабинет\n• уведомления\n• админ панель\n• рассылка\n• интеграция с сайтом\n\nСрок: примерно 1–6 недель.${footer}`;
            }

            if (lang === 'hy') {
                return `📱 Կարող ենք ստեղծել Telegram bot կամ Mini App։\n\nՖունկցիաներ՝\n• menu\n• հայտեր\n• կատալոգ\n• վճարումներ\n• անձնական էջ\n• ծանուցումներ\n• ադմին վահանակ\n• broadcast\n• կայքի ինտեգրացիա\n\nԺամկետը՝ մոտ 1–6 շաբաթ։${footer}`;
            }

            return `📱 We can build Telegram bots or Mini Apps.\n\nFeatures:\n• menu\n• requests\n• catalog\n• payments\n• user cabinet\n• notifications\n• admin panel\n• broadcasts\n• website integration\n\nTimeline: around 1–6 weeks.${footer}`;
        }

        if (has('ժամկետ', 'օր', 'շաբաթ', 'ամիս', 'time', 'timeline', 'days', 'weeks', 'срок', 'время', 'дней', 'недель')) {
            if (lang === 'ru') {
                return `⏳ Примерные сроки:\n\n• Landing page — 5–10 дней\n• Бизнес сайт — 1–3 недели\n• Интернет-магазин — 2–6 недель\n• CRM / Admin panel — 3–8 недель\n• Telegram bot — 1–4 недели\n• AI assistant — 2–6 недель\n• Mobile app — 2–5 месяцев\n\nТочно можно сказать после обсуждения функций.${footer}`;
            }

            if (lang === 'hy') {
                return `⏳ Մոտավոր ժամկետներ՝\n\n• Landing page — 5–10 օր\n• Բիզնես կայք — 1–3 շաբաթ\n• Օնլայն խանութ — 2–6 շաբաթ\n• CRM / Admin panel — 3–8 շաբաթ\n• Telegram bot — 1–4 շաբաթ\n• AI assistant — 2–6 շաբաթ\n• Mobile app — 2–5 ամիս\n\nՃշգրիտ կասենք ֆունկցիաները քննարկելուց հետո։${footer}`;
            }

            return `⏳ Average timelines:\n\n• Landing page — 5–10 days\n• Business website — 1–3 weeks\n• Online store — 2–6 weeks\n• CRM / Admin panel — 3–8 weeks\n• Telegram bot — 1–4 weeks\n• AI assistant — 2–6 weeks\n• Mobile app — 2–5 months\n\nExact timeline depends on features.${footer}`;
        }

        if (has('վճարում', 'payment', 'pay', 'stripe', 'idram', 'arca', 'оплата', 'платеж')) {
            if (lang === 'ru') {
                return `💳 Да, можем подключить онлайн оплату.\n\nВарианты:\n• Idram\n• ArCa\n• банковская оплата\n• Stripe для международных проектов\n• оплата в Telegram bot\n\nИнтеграция зависит от выбранной платежной системы.${footer}`;
            }

            if (lang === 'hy') {
                return `💳 Այո, կարող ենք միացնել օնլայն վճարումներ։\n\nՏարբերակներ՝\n• Idram\n• ArCa\n• բանկային վճարումներ\n• Stripe միջազգային նախագծերի համար\n• վճարում Telegram bot-ում\n\nԻնտեգրացիան կախված է ընտրված համակարգից։${footer}`;
            }

            return `💳 Yes, we can integrate online payments.\n\nOptions:\n• Idram\n• ArCa\n• bank payments\n• Stripe for international projects\n• Telegram payments\n\nIntegration depends on the selected provider.${footer}`;
        }
        if (
            has(
                'weather',
                'погода',
                'եղանակ',
                'спорт',
                'football',
                'news',
                'новости',
                'курс',
                'доллар',
                'gold',
                'золото',
                'recipe',
                'еда',
                'кино',
                'movie',
                'music'
            )
        ) {
            if (lang === 'ru') {
                return `Я отвечаю только на вопросы, связанные с IT сферой и услугами Isolation IT Solutions 😊\n\nМогу помочь с:\n• сайтами\n• интернет-магазинами\n• CRM\n• админ панелями\n• AI ассистентами\n• Telegram bot-ами\n• мобильными приложениями\n• ценами и сроками${footer}`;
            }

            if (lang === 'hy') {
                return `Ես պատասխանում եմ միայն IT ոլորտի և Isolation IT Solutions-ի ծառայությունների վերաբերյալ հարցերին 😊\n\nԿարող եմ օգնել՝\n• կայքերի\n• օնլայն խանութների\n• CRM համակարգերի\n• ադմին վահանակների\n• AI օգնականների\n• Telegram bot-երի\n• mobile հավելվածների\n• գների և ժամկետների հարցերով${footer}`;
            }

            return `I only answer questions related to IT and Isolation IT Solutions services 😊\n\nI can help with:\n• websites\n• online stores\n• CRM systems\n• admin panels\n• AI assistants\n• Telegram bots\n• mobile apps\n• prices and timelines${footer}`;
        }

        if (has('сайт', 'веб', 'website', 'landing', 'page', 'web', 'կայք')) {
            if (lang === 'ru') {
                return `💻 Да, можем создать современный сайт для бизнеса.\n\nЧто может входить:\n• premium UX/UI дизайн\n• главная страница\n• услуги или товары\n• формы заявок\n• мультиязычность\n• SEO структура\n• mobile version\n• высокая скорость\n• домен и запуск\n\nСрок: 1–3 недели.${footer}`;
            }

            if (lang === 'hy') {
                return `💻 Այո, կարող ենք ստեղծել ժամանակակից բիզնես կայք։\n\nԿարող է ներառել՝\n• premium UX/UI դիզայն\n• գլխավոր էջ\n• ծառայություններ կամ ապրանքներ\n• հայտի ձևեր\n• բազմալեզու համակարգ\n• SEO կառուցվածք\n• mobile տարբերակ\n• արագ աշխատանք\n• դոմենի միացում\n\nԺամկետը՝ 1–3 շաբաթ։${footer}`;
            }

            return `💻 Yes, we can build a modern business website.\n\nIt can include:\n• premium UX/UI design\n• homepage\n• services or products\n• lead forms\n• multilingual support\n• SEO structure\n• mobile version\n• fast performance\n• domain setup\n\nTimeline: 1–3 weeks.${footer}`;
        }

        if (lang === 'ru') {
            return `✨ Да, мы можем помочь с таким IT проектом.\n\nМы разрабатываем:\n• сайты\n• интернет-магазины\n• CRM системы\n• AI ассистентов\n• Telegram bots\n• mobile apps\n• admin panels\n\nНапишите подробнее, что вам нужно, и я подскажу лучший вариант.${footer}`;
        }

        if (lang === 'hy') {
            return `✨ Այո, կարող ենք օգնել այդ IT նախագծի հարցում։\n\nՄենք ստեղծում ենք՝\n• կայքեր\n• օնլայն խանութներ\n• CRM համակարգեր\n• AI օգնականներ\n• Telegram bot-եր\n• mobile հավելվածներ\n• admin panel-ներ\n\nԳրեք մի փոքր մանրամասն, և ես կառաջարկեմ լավագույն լուծումը։${footer}`;
        }

        return `✨ Yes, we can help build your IT project.\n\nOur team develops:\n• websites\n• online stores\n• CRM systems\n• AI assistants\n• Telegram bots\n• mobile apps\n• admin panels\n\nTell me more about your idea.${footer}`;

    };



    const typeAIMessage = (text: string) => {
        setIsTyping(true);

        let index = 0;
        let current = '';

        setMessages((prev) => [...prev, { role: 'ai', text: '' }]);

        const interval = window.setInterval(() => {
            current += text[index];

            setMessages((prev) => {
                const updated = [...prev];
                updated[updated.length - 1] = {
                    role: 'ai',
                    text: current,
                };
                return updated;
            });

            index++;

            if (index >= text.length) {
                window.clearInterval(interval);
                setIsTyping(false);
            }
        }, 12);
    };

    const handleSend = (quickText?: string) => {
        const message = quickText || input;

        if (!message.trim() || isTyping) return;

        setMessages((prev) => [
            ...prev,
            {
                role: 'user',
                text: message,
            },
        ]);

        setInput('');

        const aiText = getAIResponse(message);

        setTimeout(() => {
            typeAIMessage(aiText);
        }, 350);
    };

    return (
        <>
            <motion.button
                className="aiButton"
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.08 }}
                onClick={() => setOpen(true)}
                aria-label="Open AI assistant"
            >
                <Sparkles size={28} />
            </motion.button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        className="aiChat"
                        initial={{ opacity: 0, y: 40, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.92 }}
                    >
                        <div className="aiHeader">
                            <div>
                                <strong>Isolation AI</strong>
                                <span>Online now</span>
                            </div>

                            <button
                                className="aiClose"
                                onClick={() => setOpen(false)}
                                aria-label="Close AI assistant"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        <div className="aiQuick">
                            {quickQuestions.map((q) => (
                                <button
                                    key={q}
                                    onClick={() => handleSend(q)}
                                    disabled={isTyping}
                                >
                                    {q}
                                </button>
                            ))}
                        </div>

                        <div className="aiMessages">
                            {messages.map((msg, index) => (
                                <div key={index} className={`aiMsg ${msg.role}`}>
                                    <div style={{ whiteSpace: 'pre-line' }}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}

                            {isTyping && (
                                <div className="aiThinking">
                                    <span />
                                    <span />
                                    <span />
                                </div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        <div className="aiInput">
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Գրեք ձեր հարցը..."
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        handleSend();
                                    }
                                }}
                            />

                            <button
                                onClick={() => handleSend()}
                                disabled={isTyping}
                                aria-label="Send message"
                            >
                                <Send size={18} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}