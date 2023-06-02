// Reiki.tsx
// import { FunctionComponent } from 'preact';

// const Reiki: FunctionComponent = () => {
//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       <h1>Reiki</h1>
//       <p>This is the Reiki page</p>
//     </div>
//   );
// }

// export default Reiki;

import { useState } from 'preact/hooks';

function Reiki() {
    const initialColors = Array(8).fill('#000000'); // initial color is black for all squares
    const [colors, setColors] = useState<string[]>(initialColors);

    const handleChange = (index: number) => (e: any) => {
        const newColors = [...colors];
        newColors[index] = e.target.value;
        setColors(newColors);
    }

    const handleKeyPress = (e: any) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    }

    return (
        <div className="flex  items-center justify-center h-screen">
            {colors.map((color, index) => (
                <div key={index} className="">
                    <input 
                        type="text"
                        value={color}
                        onInput={handleChange(index)}
                        onKeyPress={handleKeyPress}
                        placeholder="Enter hex color..."
                    />
                    <svg height="100" width="100">
                        <rect width="100" height="100" fill={color} />
                    </svg>
                </div>
            ))}
        </div>
    );
}

export default Reiki;
