// SnowFall.tsx
import { useEffect, useState } from 'preact/hooks';
import KitchyFlower from '../../assets/KitchyFlower';
import './snowStyles.css'

type Flower = {
    x: number;
    y: number;
    speed: number;
    id: string;
    start: boolean;
};

const SnowFall = () => {
    const [flowers, setFlowers] = useState<Flower[]>([]);
    const flowerCount = 100;

    useEffect(() => {
        const newFlowers = [];
        for (let i = 0; i < flowerCount; i++) {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight + 1.5 * window.innerHeight; // Start higher offscreen
            const id = `${x}_${y}`; // Create unique id from x and y values
            newFlowers.push({ x, y, speed: (Math.random() + 1)  * 2, id, start: false });
        }
        setFlowers(newFlowers);

        const timeoutId = setTimeout(() => {
            setFlowers(flowers => flowers.map(flower => ({ ...flower, start: true })));
        }, 100); // Start the animation after 100ms

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className="snowfall z-0">
            {flowers.map((flower) => (
                <div
                    key={flower.id} 
                    class="flower"
                    style={{
                        position: 'absolute',
                        left: `${flower.x}px`,
                        top: flower.start ? `0px` : `-${flower.y}px`,
                        transform: flower.start ? `translateY(${window.innerHeight}px)` : 'none',
                        transition: flower.start ? `transform ${flower.speed}s linear` : 'none',
                    }}
                >
                    <KitchyFlower fill="#FFBF7F" />
                </div>
            ))}
        </div>
    );
};

export default SnowFall;
