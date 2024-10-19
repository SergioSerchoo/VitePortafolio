import React, { useState, useEffect } from 'react';

function Edit() {
  const fullText = 'Hello, world, soy Sergio';
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      setIndex((prevIndex) => (prevIndex + 1) % (fullText.length + 1));
    }, 150); // Velocidad de escritura

    return () => clearTimeout(timeoutId);
  }, [index, fullText]);

  return (
    <div className="my-10 p-12 bg-gray-900 text-gray-200 rounded-lg shadow-lg max-w-4xl mx-auto">
      <div className="flex items-center justify-between bg-gray-800 px-4 py-2 rounded-t-lg">
        <span className="text-xs text-blue-400 font-semibold">Simulador de IDE</span>
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>
  
      <pre className="bg-gray-800 text-sm text-gray-300 p-4 rounded-b-lg overflow-auto">
        <span className="text-gray-500 select-none">1</span> function sayHello() {'{'}<br />
        <span className="text-gray-500 select-none">2</span>   console.log(<span className="text-green-400">"{displayedText}"</span>);<br />
        <span className="text-gray-500 select-none">3</span> {'}'}<br />
        <span className="text-gray-500 select-none">4</span> sayHello();<br />
      </pre>
    </div>
  );
}

export default Edit;
