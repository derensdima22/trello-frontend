'use client';

import React, { useEffect, useState } from 'react';
import './StretchBox.css';

function Page() {
  const [text, setText] = useState("Ваш текст");

  useEffect(() => {
    const texts = ["Текст 1", "Текст 2", "Текст 3"];
    let index = 0;
    const interval = setInterval(() => {
      setText(texts[index]);
      index = (index + 1) % texts.length;
    }, 5000); // Каждые 5 секунд меняется текст
  
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-container">
      <p className="animated-text">{text}</p>
    </div>
  );
}

export default Page;