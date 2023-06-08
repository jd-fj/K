import { useState } from 'preact/hooks';
import { FunctionComponent } from 'preact';

const Palette: FunctionComponent = () => {
  const initialColors = Array(8).fill('000000');
  const [colors, setColors] = useState<string[]>(initialColors);

  // change the color of the input that was changed
  const handleChange = (index: number) => (e: any) => {
    console.log("INdex? ", index)
    console.log("Colors? ", colors)
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
    <div className="flex items-end justify-center h-screen space-x-4">
      {colors.map((color, index) => (
        <div key={index} className="">
          <input
            type="text"
            value={color}
            onInput={handleChange(index)}
            onKeyPress={handleKeyPress}
            placeholder="Enter hex color..."
            className="bg-white-50 w-28"
          />
          <svg width="7rem" height="500">
            <rect width="7rem" height="500" fill={`#${color}`} />
          </svg>
        </div>
      ))}
    </div>
  );
}

export default Palette;
