import { ArrowUpRight, Check, Cpu, Layers3, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import arosImg from '../assets/projects /aros.jpg';
import '../positioning.css';

const copy = {
    en: {
        featured: 'Featured work', featuredTitle: 'Engineering products around real business problems.', featuredDesc: 'A selection of platforms where product thinking, software engineering and business operations meet.',
        challenge: 'Business challenge', solution: 'What we delivered', outcome: 'Product outcome',
        arosChallenge: 'Restaurant teams need clearer control over food cost, supplier pricing and recipe profitability.', arosSolution: 'An AI restaurant intelligence platform combining operational data, analytics, iOS product work and backend engineering.', arosOutcome: 'A product foundation for faster decisions, transparent costs and healthier margins.',
        clinicChallenge: 'Simplify the path from clinic discovery to a patient request.', clinicSolution: 'Responsive healthcare website with appointment flow and Telegram-connected lead handling.', clinicOutcome: 'A clearer online presence and easier patient requests.',
        emwChallenge: 'Turn a specialist automotive catalogue into a manageable online sales channel.', emwSolution: 'Multilingual e-commerce platform with catalogue, orders and admin dashboard.', emwOutcome: 'A complete digital storefront and product-management workflow.',
        bauChallenge: 'Structure digital learning and automate repetitive education workflows.', bauSolution: 'AI EdTech concept with lessons, quizzes, Telegram bot and certificate automation.', bauOutcome: 'A scalable foundation for learning and future marketplace growth.',
        why: 'Why Isolation', whyTitle: 'Senior thinking from business problem to production.', principles: ['Business-first thinking', 'Senior technical execution', 'Scalable architecture', 'Clear communication', 'Long-term product mindset'],
        industries: 'Industries', industriesTitle: 'Built for teams with complex operations and ambitious growth.', industryList: ['Hospitality & Restaurants', 'Healthcare', 'Education', 'E-commerce', 'Business Services', 'Startups & SaaS'],
        explore: 'Explore all work', capability: 'Explore capabilities', inDevelopment: 'In development', visit: 'Visit website',
    },
    ru: {
        featured: 'Избранные кейсы', featuredTitle: 'Инженерные продукты для реальных задач бизнеса.', featuredDesc: 'Платформы, в которых соединяются продуктовое мышление, разработка и бизнес-процессы.',
        challenge: 'Задача бизнеса', solution: 'Что мы создали', outcome: 'Результат продукта',
        arosChallenge: 'Ресторанным командам нужен прозрачный контроль себестоимости, цен поставщиков и прибыльности блюд.', arosSolution: 'AI-платформа ресторанной аналитики, объединяющая операционные данные, аналитику, iOS-продукт и backend.', arosOutcome: 'Основа для быстрых решений, прозрачных расходов и здоровой маржинальности.',
        clinicChallenge: 'Упростить путь пациента от знакомства с клиникой до записи.', clinicSolution: 'Адаптивный медицинский сайт с записью и обработкой заявок через Telegram.', clinicOutcome: 'Более понятная презентация клиники и простой путь записи.',
        emwChallenge: 'Превратить специализированный автокаталог в управляемый онлайн-канал продаж.', emwSolution: 'Мультиязычная e-commerce платформа с каталогом, заказами и админ-панелью.', emwOutcome: 'Полноценная витрина и удобное управление товарами.',
        bauChallenge: 'Структурировать цифровое обучение и автоматизировать повторяющиеся процессы.', bauSolution: 'AI EdTech-концепция с уроками, тестами, Telegram-ботом и автоматизацией сертификатов.', bauOutcome: 'Масштабируемая основа для обучения и будущего marketplace.',
        why: 'Почему Isolation', whyTitle: 'Сильная инженерная работа — от бизнес-задачи до production.', principles: ['Сначала бизнес-задача', 'Сильная техническая реализация', 'Масштабируемая архитектура', 'Прозрачная коммуникация', 'Долгосрочное продуктовое мышление'],
        industries: 'Индустрии', industriesTitle: 'Для компаний со сложными процессами и амбициозным ростом.', industryList: ['Рестораны и HoReCa', 'Медицина', 'Образование', 'E-commerce', 'Бизнес-услуги', 'Стартапы и SaaS'],
        explore: 'Все проекты', capability: 'Смотреть компетенции', inDevelopment: 'В разработке', visit: 'Открыть сайт',
    },
    hy: {
        featured: 'Ընտրված աշխատանքներ', featuredTitle: 'Ինժեներական պրոդուկտներ իրական բիզնես խնդիրների համար։', featuredDesc: 'Հարթակներ, որտեղ միավորվում են պրոդուկտային մտածողությունը, ծրագրավորումը և բիզնես գործընթացները։',
        challenge: 'Բիզնես խնդիրը', solution: 'Ինչ ենք ստեղծել', outcome: 'Պրոդուկտի արդյունքը',
        arosChallenge: 'Ռեստորաններին անհրաժեշտ է ինքնարժեքի, մատակարարների գների և ուտեստների շահութաբերության թափանցիկ կառավարում։', arosSolution: 'AI ռեստորանային վերլուծական հարթակ՝ օպերացիոն տվյալներով, analytics-ով, iOS պրոդուկտով և backend-ով։', arosOutcome: 'Ավելի արագ որոշումների, թափանցիկ ծախսերի և առողջ մարժայի հիմք։',
        clinicChallenge: 'Պարզեցնել պացիենտի ճանապարհը կլինիկային ծանոթանալուց մինչև գրանցում։', clinicSolution: 'Ադապտիվ բժշկական կայք՝ գրանցմամբ և Telegram-ին միացված հայտերով։', clinicOutcome: 'Ավելի հստակ առցանց ներկայություն և հեշտ գրանցում։',
        emwChallenge: 'Մասնագիտացված ավտոկատալոգը դարձնել կառավարելի առցանց վաճառքի ալիք։', emwSolution: 'Բազմալեզու e-commerce հարթակ՝ կատալոգով, պատվերներով և ադմին վահանակով։', emwOutcome: 'Լիարժեք թվային ցուցափեղկ և ապրանքների կառավարում։',
        bauChallenge: 'Կառուցվածք տալ թվային ուսուցմանը և ավտոմատացնել կրկնվող գործընթացները։', bauSolution: 'AI EdTech կոնցեպտ՝ դասերով, թեստերով, Telegram bot-ով և սերտիֆիկատների ավտոմատացմամբ։', bauOutcome: 'Մասշտաբավորվող հիմք ուսուցման և ապագա marketplace-ի համար։',
        why: 'Ինչու Isolation', whyTitle: 'Ուժեղ ինժեներական աշխատանք՝ բիզնես խնդրից մինչև production։', principles: ['Բիզնես խնդիրը՝ առաջին տեղում', 'Ուժեղ տեխնիկական իրականացում', 'Մասշտաբավորվող ճարտարապետություն', 'Թափանցիկ հաղորդակցություն', 'Երկարաժամկետ պրոդուկտային մտածողություն'],
        industries: 'Ոլորտներ', industriesTitle: 'Բարդ գործընթացներ և հավակնոտ աճ ունեցող թիմերի համար։', industryList: ['Ռեստորաններ և HoReCa', 'Առողջապահություն', 'Կրթություն', 'E-commerce', 'Բիզնես ծառայություններ', 'Startup-ներ և SaaS'],
        explore: 'Բոլոր նախագծերը', capability: 'Դիտել կարողությունները', inDevelopment: 'Մշակման փուլում', visit: 'Բացել կայքը',
    },
};

type FeaturedCase = { key: 'aros'; title: string; image: string; tags: readonly string[]; featured?: boolean; link?: string };

const cases: FeaturedCase[] = [
    { key: 'aros', title: 'AROS — AI Restaurant Intelligence Platform', image: arosImg, tags: ['AI', 'Restaurant Intelligence', 'Business Analytics', 'iOS', 'Backend'], featured: true },
];

export default function PositioningSections() {
    const { i18n } = useTranslation();
    const lang = (i18n.resolvedLanguage?.split('-')[0] ?? 'en') as keyof typeof copy;
    const c = copy[lang] ?? copy.en;
    const value = (key: string) => c[key as keyof typeof c] as string;

    return <>
        <section className="featuredWork" id="featured-work" aria-labelledby="featured-work-title"><div className="container">
            <div className="positioningHead"><span>{c.featured}</span><h2 id="featured-work-title">{c.featuredTitle}</h2><p>{c.featuredDesc}</p></div>
            <div className="caseStudyGrid">{cases.map((item) => <article className={`caseStudyCard${item.featured ? ' isFeatured' : ''}`} key={item.key}>
                <div className="caseStudyVisual"><img src={item.image} alt="" loading="lazy" /></div><div className="caseStudyCopy">
                    <div className="caseStudyTags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div><h3>{item.title}</h3>
                    <dl><div><dt>{c.challenge}</dt><dd>{value(`${item.key}Challenge`)}</dd></div><div><dt>{c.solution}</dt><dd>{value(`${item.key}Solution`)}</dd></div><div><dt>{c.outcome}</dt><dd>{value(`${item.key}Outcome`)}</dd></div></dl>
                    {item.link ? <a href={item.link} target="_blank" rel="noreferrer">{c.visit}<ArrowUpRight size={16}/></a> : <span className="caseStatus"><Sparkles size={15}/>{c.inDevelopment}</span>}
                </div></article>)}</div><a className="allWorkLink" href="#projects">{c.explore}<ArrowUpRight size={17}/></a>
        </div></section>
        <section className="whyIsolation" id="why-isolation" aria-labelledby="why-title"><div className="container whyGrid"><div className="positioningHead"><span>{c.why}</span><h2 id="why-title">{c.whyTitle}</h2></div><div className="principlesGrid">{c.principles.map((item, index) => <div key={item}><i>{[<Cpu/>, <Sparkles/>, <Layers3/>, <Check/>, <ShieldCheck/>][index]}</i><span>0{index + 1}</span><h3>{item}</h3></div>)}</div></div></section>
        <section className="industries" id="industries" aria-labelledby="industries-title"><div className="container industriesGrid"><div className="positioningHead"><span>{c.industries}</span><h2 id="industries-title">{c.industriesTitle}</h2></div><div className="industryList">{c.industryList.map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>)}</div><Link className="industryCta" to="/services">{c.capability}<ArrowUpRight size={18}/></Link></div></section>
    </>;
}
