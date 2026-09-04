import { useEffect, useRef, useState } from 'react';
import { Phone, Share2, X } from 'lucide-react';
import '../SocialDock.css';

const PHONE_NUMBER = '+37441083882';
const INSTAGRAM_URL = 'https://www.instagram.com/isolation_it_solutions/';
const FACEBOOK_URL = 'https://www.facebook.com/IsolationIT';

function InstagramIcon() {
    return (
        <svg className="socialDockFacebook" viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4.25" />
            <circle className="socialDockDot" cx="17.4" cy="6.7" r="1" />
        </svg>
    );
}

function FacebookIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14.2 21v-8h2.8l.45-3.1H14.2V7.95c0-.9.3-1.52 1.58-1.52h1.8V3.65c-.32-.04-1.4-.15-2.67-.15-2.64 0-4.46 1.62-4.46 4.6v1.8H7.5V13h2.95v8h3.75Z" />
        </svg>
    );
}

export default function SocialDock() {
    const [open, setOpen] = useState(false);
    const dockRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const closeDock = (event: PointerEvent) => {
            if (!dockRef.current?.contains(event.target as Node)) setOpen(false);
        };

        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setOpen(false);
        };

        document.addEventListener('pointerdown', closeDock);
        document.addEventListener('keydown', closeOnEscape);

        return () => {
            document.removeEventListener('pointerdown', closeDock);
            document.removeEventListener('keydown', closeOnEscape);
        };
    }, []);

    const closeAfterAction = () => setOpen(false);

    return (
        <div className={`socialDock${open ? ' isOpen' : ''}`} ref={dockRef}>
            <div className="socialDockActions" aria-hidden={!open}>
                <a
                    className="socialDockAction"
                    href={`tel:${PHONE_NUMBER}`}
                    aria-label="Call Isolation IT Solutions"
                    data-label="Call"
                    tabIndex={open ? 0 : -1}
                    onClick={closeAfterAction}
                >
                    <Phone size={19} />
                </a>
                <a
                    className="socialDockAction"
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    data-label="Instagram"
                    tabIndex={open ? 0 : -1}
                    onClick={closeAfterAction}
                >
                    <InstagramIcon />
                </a>
                <a
                    className="socialDockAction"
                    href={FACEBOOK_URL}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    data-label="Facebook"
                    tabIndex={open ? 0 : -1}
                    onClick={closeAfterAction}
                >
                    <FacebookIcon />
                </a>
            </div>

            <button
                type="button"
                className="socialDockToggle"
                aria-label={open ? 'Close contact links' : 'Open contact links'}
                aria-expanded={open}
                onClick={() => setOpen((value) => !value)}
            >
                <span className="socialDockToggleIcon socialDockShare"><Share2 size={20} /></span>
                <span className="socialDockToggleIcon socialDockClose"><X size={20} /></span>
            </button>
        </div>
    );
}
