import { useEffect, useState, useRef } from 'preact/hooks';
import KitchyFlower from '../../assets/KitchyFlower';
import './snowStyles.css'

type Flower = {
    x: number;
    y: number;
    speed: number;
};

const SnowFall = () => {
    const [flowers, setFlowers] = useState<Flower[]>([]);
    const flowersRef = useRef<Flower[]>([]);
    const flowerCount = 100;

    useEffect(() => {
        const newFlowers = [];
        for (let i = 0; i < flowerCount; i++) {
            const x = Math.random() * window.innerWidth;
            const y = -100;  // Start the flowers from the top of the screen
            newFlowers.push({ x, y, speed: Math.random() + .95  * .75 });
        }
        setFlowers(newFlowers);
        flowersRef.current = newFlowers;
    }, []);

    useEffect(() => {
        let animationFrameId: number | null = null;
        const moveFlowers = () => {
            const newFlowers = flowersRef.current.map(flower => {
                if (flower.y + flower.speed >= window.innerHeight) {
                    // If the flower has reached the bottom, return it without updating y
                    return flower;
                }
                return { ...flower, y: flower.y + flower.speed };
            });

            // Filter out flowers that have reached the bottom of the screen
            const remainingFlowers = newFlowers.filter(flower => flower.y + flower.speed < window.innerHeight);
            
            setFlowers(remainingFlowers);
            flowersRef.current = remainingFlowers;

            // Stop animation if all flowers have reached the bottom
            if (remainingFlowers.length > 0) {
                animationFrameId = requestAnimationFrame(moveFlowers);
            }
        };
        moveFlowers();
        return () => {
            if (animationFrameId !== null) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, []);

    return (
        <div className="snowfall z-0">
            {flowers.map((flower, index) => (
                <div
                    key={index}  // Don't forget to provide keys when mapping over array in React/Preact
                    class="flower"
                    style={{
                        position: 'absolute',
                        left: `${flower.x}px`,
                        top: `${flower.y}px`,
                    }}
                >
                    <KitchyFlower fill="#FFBF7F" />
                </div>
            ))}
        </div>
    );
};

export default SnowFall;
