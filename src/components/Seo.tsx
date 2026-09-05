import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://isolation.it.com';
const SOCIAL_IMAGE = `${SITE_URL}/isolation-logo.png`;

type Language = 'en' | 'ru' | 'hy';
type PageKey = 'home' | 'services' | 'process' | 'contact' | 'start';

const pages: Record<Language, Record<PageKey, { title: string; description: string }>> = {
    en: {
        home: { title: 'Isolation IT Solutions — Web, AI & Automation Studio in Armenia', description: 'Premium websites, AI assistants, CRM systems, Telegram bots and business automation developed by Isolation IT Solutions in Yerevan, Armenia.' },
        services: { title: 'Web, AI, CRM & Telegram Development Services — Isolation IT', description: 'Explore website development, SaaS platforms, AI tools, Telegram WebApps, CRM systems and workflow automation services.' },
        process: { title: 'Our Product Development Process — Isolation IT Solutions', description: 'See how Isolation IT Solutions takes digital products from discovery and UI/UX design through development, launch and support.' },
        contact: { title: 'Contact Isolation IT Solutions — Yerevan, Armenia', description: 'Contact Isolation IT Solutions in Yerevan to discuss your website, AI product, CRM, Telegram bot or automation project.' },
        start: { title: 'Start Your Digital Project — Isolation IT Solutions', description: 'Tell Isolation IT Solutions about your idea and receive a tailored plan for your website, app, AI, CRM or automation project.' },
    },
    ru: {
        home: { title: 'Isolation IT Solutions — сайты, AI и автоматизация в Армении', description: 'Разработка премиальных сайтов, AI-ассистентов, CRM-систем, Telegram-ботов и автоматизации бизнеса в Ереване.' },
        services: { title: 'Разработка сайтов, AI, CRM и Telegram — Isolation IT', description: 'Услуги разработки сайтов, SaaS-платформ, AI-инструментов, Telegram WebApp, CRM и систем автоматизации.' },
        process: { title: 'Процесс разработки цифрового продукта — Isolation IT', description: 'От анализа и UI/UX-дизайна до разработки, запуска и поддержки цифрового продукта.' },
        contact: { title: 'Связаться с Isolation IT Solutions — Ереван', description: 'Обсудите с Isolation IT Solutions разработку сайта, AI-продукта, CRM, Telegram-бота или автоматизации.' },
        start: { title: 'Начать digital-проект — Isolation IT Solutions', description: 'Расскажите о своей идее и получите подходящий план разработки сайта, приложения, AI, CRM или автоматизации.' },
    },
    hy: {
        home: { title: 'Isolation IT Solutions — կայքեր, AI և ավտոմատացում Հայաստանում', description: 'Պրեմիում կայքերի, AI օգնականների, CRM համակարգերի, Telegram բոտերի և բիզնես ավտոմատացման մշակում Երևանում։' },
        services: { title: 'Կայքերի, AI, CRM և Telegram մշակում — Isolation IT', description: 'Կայքերի, SaaS հարթակների, AI գործիքների, Telegram WebApp-երի, CRM-ի և ավտոմատացման մշակում։' },
        process: { title: 'Թվային պրոդուկտի մշակման ընթացքը — Isolation IT', description: 'Վերլուծությունից և UI/UX դիզայնից մինչև մշակում, գործարկում և աջակցություն։' },
        contact: { title: 'Կապ Isolation IT Solutions-ի հետ — Երևան', description: 'Քննարկեք կայքի, AI պրոդուկտի, CRM-ի, Telegram բոտի կամ ավտոմատացման ձեր նախագիծը։' },
        start: { title: 'Սկսել թվային նախագիծ — Isolation IT Solutions', description: 'Պատմեք ձեր գաղափարի մասին և ստացեք կայքի, հավելվածի, AI-ի, CRM-ի կամ ավտոմատացման մշակման պլան։' },
    },
};

const routeKeys: Record<string, PageKey> = {
    '/': 'home',
    '/services': 'services',
    '/process': 'process',
    '/contact': 'contact',
    '/start-project': 'start',
};

function setMeta(selector: string, attribute: 'content', value: string) {
    const element = document.head.querySelector<HTMLMetaElement>(selector);
    if (element) element.setAttribute(attribute, value);
}

export default function Seo() {
    const { pathname } = useLocation();
    const { i18n } = useTranslation();

    useEffect(() => {
        const language = (i18n.resolvedLanguage?.split('-')[0] ?? 'en') as Language;
        const supportedLanguage: Language = language in pages ? language : 'en';
        const page = pages[supportedLanguage][routeKeys[pathname] ?? 'home'];
        const canonicalUrl = `${SITE_URL}${pathname === '/' ? '' : pathname}`;

        document.documentElement.lang = supportedLanguage;
        document.title = page.title;
        setMeta('meta[name="description"]', 'content', page.description);
        setMeta('meta[property="og:title"]', 'content', page.title);
        setMeta('meta[property="og:description"]', 'content', page.description);
        setMeta('meta[property="og:url"]', 'content', canonicalUrl);
        setMeta('meta[property="og:image"]', 'content', SOCIAL_IMAGE);
        setMeta('meta[name="twitter:title"]', 'content', page.title);
        setMeta('meta[name="twitter:description"]', 'content', page.description);
        setMeta('meta[name="twitter:image"]', 'content', SOCIAL_IMAGE);

        document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute('href', canonicalUrl);
    }, [i18n.resolvedLanguage, pathname]);

    return null;
}
