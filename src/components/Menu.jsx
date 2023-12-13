// Menu.jsx
import React from 'react';

// Componente de um item de menu
const MenuItem = ({ topico, onClick }) => {
  return <li 
  className='bg-gray-950 cursor-pointer font-semibold tracking-wider rounded-lg p-3 text-base uppercase text-gray-200'
  onClick={() => onClick(topico)}>{topico}</li>;
};

// Componente do menu
const Menu = ({ onSelect, data }) => {
  const chaves = Object.keys(data.data);

  return (
    <menu className='relative min-h-screen w-96 border-r-2 border-gray-800 p-8'>
      <nav className='relative'>
        <ul className='relative flex flex-col justify-end gap-8'>
          {chaves.map((chave, index) => (
            <MenuItem key={index} topico={chave} onClick={onSelect} />
          ))}
        </ul>
      </nav>
    </menu>
  );
};

export default Menu;
