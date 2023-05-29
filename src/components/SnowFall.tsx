// SnowFall.tsx
import { FunctionalComponent } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import KitchyFlower from '../assets/KitchyFlower';
import './snowStyles.css';

type Flower = {
    x: number;
    y: number;
    speed: number;
};

const SnowFall = () => {
    const [flowers, setFlowers] = useState<Flower[]>([]);
    const flowerCount = 50;

    useEffect(() => {
        const newFlowers = [];
        for (let i = 0; i < flowerCount; i++) {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            newFlowers.push({ x, y, speed: Math.random() * .5 });
        }
        setFlowers(newFlowers);
    }, []);

    useEffect(() => {
        let animationFrameId: number | null = null;
        const moveFlowers = () => {
            setFlowers(flowers =>
                flowers.map(flower => ({
                    ...flower,
                    y: (flower.y + flower.speed) % window.innerHeight,
                }))
            );
            animationFrameId = requestAnimationFrame(moveFlowers);
        };
        moveFlowers();
        return () => {
            if (animationFrameId !== null) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, []);

    return (
        <div className="snowfall z-20">
            {flowers.map(flower => (
                <div
                    class="flower"
                    style={{
                        position: 'absolute',
                        left: `${flower.x}px`,
                        top: `${flower.y}px`,
                    }}
                >
                    <KitchyFlower />
                </div>
            ))}
        </div>
    );
};

export default SnowFall;
