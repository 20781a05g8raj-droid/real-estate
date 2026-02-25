'use client';
import { useEffect, useRef } from 'react';
import styles from './CustomCursor.module.css';

export default function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);
    const ringPos = useRef({ x: 0, y: 0 });
    const mousePos = useRef({ x: 0, y: 0 });
    const rafId = useRef<number>(0);

    useEffect(() => {
        // Don't initialize on touch devices
        if (window.matchMedia('(pointer: coarse)').matches) return;

        const dot = dotRef.current;
        const ring = ringRef.current;
        if (!dot || !ring) return;

        const onMouseMove = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY };

            // Dot follows instantly
            dot.style.left = `${e.clientX}px`;
            dot.style.top = `${e.clientY}px`;

            // Determine hover targets
            const target = e.target as HTMLElement;
            const isExpand = !!target.closest('[data-cursor="expand"]');
            const isBtn = !!target.closest('a, button, [data-cursor="btn"]');

            ring.classList.toggle(styles.expanded, isExpand && !isBtn);
            ring.classList.toggle(styles.btnHover, isBtn);
        };

        // Ring follows with lag
        const animate = () => {
            ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.12;
            ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.12;
            ring.style.left = `${ringPos.current.x}px`;
            ring.style.top = `${ringPos.current.y}px`;
            rafId.current = requestAnimationFrame(animate);
        };

        rafId.current = requestAnimationFrame(animate);
        window.addEventListener('mousemove', onMouseMove);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            cancelAnimationFrame(rafId.current);
        };
    }, []);

    return (
        <>
            <div ref={dotRef} className={styles.dot} />
            <div ref={ringRef} className={styles.ring} />
        </>
    );
}
