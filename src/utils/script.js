import { useEffect, useState } from "react";

export const flexibleHeight = () => {
    const [height, setHeight] = useState(window.innerHeight);
    useEffect(() => {
        const handleResize = () => {
            setHeight(window.innerHeight);
        };
        window.addEventListener("resize", handleResize);
    });
    return height
}

export const scrollRestoration = () => {
    if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
    }
    return () => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'auto';
        }
    };
}