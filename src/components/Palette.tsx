// Palette.tsx
import { useState } from 'preact/hooks';
import { FunctionComponent } from 'preact';

const Palette: FunctionComponent = () => {
  const initialColors = ['2b2521', '974', '85a138', 'd4c84a', 'd4aa20', 'd47a20', 'fffaca', '970']
  const [colors, setColors] = useState<string[]>(initialColors);

  // change the color of the input that was changed
  const handleChange = (index: number) => (e: any) => {
    const newColors = [...colors];
    newColors[index] = e.target.value;
    setColors(newColors);
  }

  // prevent form submission (maybe not necessary)
  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  }

  return (
    <div className="grid grid-cols-8 items-end justify-center h-screen mt-20">
      {colors.map((color, index) => (
        <div key={index} className="px-3">
          <input
            type="text"
            value={color}
            onInput={handleChange(index)}
            onKeyPress={handleKeyPress}
            placeholder="hex color..."
            className="w-full h-10 bg-transparent"
          />
          <svg className="w-full h-[25rem]">
            <rect className="w-full h-full" fill={`#${color}`} />
          </svg>
        </div>
      ))}
    </div>
  );
}

export default Palette;
