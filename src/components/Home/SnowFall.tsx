// SnowFall.tsx
import { useEffect, useState, useRef } from 'preact/hooks';
import KitchyFlower from '../../assets/KitchyFlower';
import './snowStyles.css'

type Flower = {
    x: number;
    y: number;
    speed: number;
    time: number;
    oscillationSpeed: number;
    oscillationMagnitude: number;
};


const SnowFall = () => {
    const [flowers, setFlowers] = useState<Flower[]>([]);
    const flowersRef = useRef<Flower[]>([]);
    const flowerCount = 50;

    useEffect(() => {
        const newFlowers = [];
        for (let i = 0; i < flowerCount; i++) {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * -200;
            newFlowers.push({
                x, 
                y, 
                speed: (Math.random() + 1) * 3, 
                time: 0,
                oscillationSpeed: (Math.random() + 2) * .1,  // adjust the range as needed
                oscillationMagnitude: (Math.random() + 1)  * .15  // adjust the range as needed
            });
        }
        setFlowers(newFlowers);
        flowersRef.current = newFlowers;
    }, []);
    

    useEffect(() => {
        let animationFrameId: number | null = null;
        const moveFlowers = () => {
            const newFlowers = flowersRef.current.map(flower => {
                const newX = flower.x + Math.sin(flower.time * flower.oscillationSpeed) * flower.oscillationMagnitude;
                const newTime = flower.time + 0.1;
        
                if (flower.y >= window.innerHeight) {
                    // If the flower has reached the bottom, return it without updating y
                    return flower;
                }
                return { ...flower, y: flower.y + flower.speed, x: newX, time: newTime };
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
