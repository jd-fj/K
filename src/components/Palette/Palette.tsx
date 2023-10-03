import { useState } from 'preact/hooks';
import { FunctionComponent } from 'preact';

const Palette: FunctionComponent = () => {
  const [colors] = useState([
    '#c9e094', '#83A03d', '#657548', '#2b3d1f', 
    '#fbf060', '#e2ce35', '#d4ab29', '#a28c31', 
    '#ecb741', '#ef932e', '#d47a28', '#aa6829',
    '#e2ca99', '#997744', '#8d5a24', '#3f2a1c',
    '#fbf9ec', '#f9f4d4', '#e0c67b', '#c39e4c',
    '#f8d7d7', '#dce7e6', '#8e4e3d', '#ddcde2',
    '#231f20', '#414042'
  ]);

  return (
    <div className="grid grid-cols-4 gap-1.5">
      {colors.map(color => (
        <div key={color} className="relative pb-[100%]">
          <div className="absolute inset-0 text-black-200" style={{ backgroundColor: color }}>{color}</div>
        </div>
      ))}
    </div>
  );
}

export default Palette;
