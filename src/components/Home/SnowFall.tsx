import { useMemo } from 'preact/hooks';
import KitchyFlower from '../../assets/KitchyFlower';
import './snowStyles.css'

type Flower = {
    id: string;
    x: number;
    y: number;
    speed: number;
};

const SnowFall = () => {
    const flowerCount = 100;

    // This function generates a random number within the range (0 to max).
    function getRandomPosition(max: number) {
        return Math.floor(Math.random() * (max + 52) - 51);
    }

    const flowers = useMemo<Flower[]>(() => {
        const newFlowers = [];
        for (let i = 0; i < flowerCount; i++) {
            const x = getRandomPosition(window.innerWidth);
            const y = getRandomPosition(window.innerHeight) - 100; // Start higher offscreen
            const id = `${x}_${y}`; // Create unique id from x and y values
            newFlowers.push({
                x,
                y,
                speed: +(Math.random() + 1).toFixed(2) * 2,
                id,
            });
        }
        return newFlowers;
    }, []);

    const removeFlower = (event: any) => {
        event.target.remove();
    };

    return (
        <div className="snowfall z-0">
            {flowers.map((flower) => (
                <div
                    key={flower.id}
                    class="flower"
                    onAnimationEnd={removeFlower}
                    style={{
                        position: 'absolute',
                        left: `${flower.x}px`,
                        top: -40,
                        animation: `fall ${flower.speed}s linear forwards`,
                    }}
                >
                    <KitchyFlower fill="#FFBF7F" />
                </div>
            ))}
            <style>{`
        @keyframes fall {
          to {
            transform: translateY(${window.innerHeight + 40}px);
          }
        }
      `}</style>
        </div>
    );
};

export default SnowFall;
