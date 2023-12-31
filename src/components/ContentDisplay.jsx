import React, { useState } from 'react';

const ContentDisplay = ({ dados }) => {
  const [copiedText, setCopiedText] = useState('');

  const handleCopyText = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedText(`Texto copiado: ${text}`);
  };

  return (
    <div className='relative flex flex-col gap-14 w-2/4'>
      {dados.map((item) => (
        <div key={item.id}>
          <h3 className='uppercase font-semibold mb-2 text-2xl text-gray-200'>{item.topico}</h3>
          {Array.isArray(item.textos) ? (
            <ul>
              {item.textos.map((texto, index) => (
                <li
                  className='bg-gray-950 cursor-pointer font-semibold tracking-wider rounded-lg text-sm text-gray-100 mb-2 p-4'
                  key={index}
                  onClick={() => handleCopyText(texto)}
                >
                  {texto}
                </li>
              ))}
            </ul>
          ) : (
            <ul
              onClick={() => handleCopyText(item.textos)}
            >
              <li className='bg-gray-950 cursor-pointer font-semibold tracking-wider rounded-lg text-sm text-gray-100 mb-2 p-4'>{item.textos}</li>
            </ul>
          )}
        </div>
      ))}
      
    </div>
  );
};

export default ContentDisplay;
