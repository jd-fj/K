import { useState } from 'preact/hooks';
import { FunctionComponent } from 'preact';

const Palette: FunctionComponent = () => {
  const initialColors = Array(8).fill('000000');
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
    <div className="grid grid-cols-8 gap-5 items-end justify-center h-screen">
      {colors.map((color, index) => (
        <div key={index} className="">
          <input
            type="text"
            value={color}
            onInput={handleChange(index)}
            onKeyPress={handleKeyPress}
            placeholder="hex color..."
            className="w-full h-10 bg-transparent"
          />
          <svg className="w-full h-[31.25rem]">
            <rect className="w-full h-full" fill={`#${color}`} />
          </svg>
        </div>
      ))}
    </div>
  );
}

export default Palette;
