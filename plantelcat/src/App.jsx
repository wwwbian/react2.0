
import React from 'react';
import './App.css';
import Card from './Card';

const App = () => {
  const cardData = [
    {
      title: 'Carta 1',
      content: 'Contenido de la carta 1',
      imageUrl: 'https://resizer.glanacion.com/resizer/gFpiU2XvPXBpIMQezuthWtEv13M=/880x586/smart/filters:format(webp):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CCXOIDZHQRG6PP2JQ2LVCQHOFU.jpg',
    },
    {
      title: 'Carta 2',
      content: 'Contenido de la carta 2',
      imageUrl: 'URL_DE_LA_IMAGEN_2.jpg',
    },
    // Agrega más cartas aquí
  ];

  return (
    <div className="App">
      {cardData.map((data, index) => (
        <Card key={index} title={data.title} content={data.content} />
      ))}
    </div>
  );
};

export default App;
