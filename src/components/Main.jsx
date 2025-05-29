import React from 'react';
import Card from './Card/Card';

function Main({ cards }) {
  return (
    <main style={{ padding: '20px', display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
      {cards.map(card => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          image={card.image}
        />
      ))}
    </main>
  );
}

export default Main;
