
import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToHash() {
    const { pathname, hash, key } = useLocation();

    useLayoutEffect(() => {
        // Обычная страница — всегда открываем сверху
        if (!hash) {
            window.scrollTo(0, 0);
            return;
        }

        // Ссылка на секцию, например /#projects
        let frame = 0;
        let attempts = 0;

        const scrollToTarget = () => {
            const id = decodeURIComponent(hash.slice(1));
            const target = document.getElementById(id);

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
                return;
            }

            if (attempts < 60) {
                attempts++;
                frame = requestAnimationFrame(scrollToTarget);
            }
        };

        frame = requestAnimationFrame(scrollToTarget);

        return () => cancelAnimationFrame(frame);
    }, [pathname, hash, key]);

    return null;
}
