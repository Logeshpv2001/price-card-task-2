import React from 'react';
import './App.css';
import PriceCard from './PriceCard';

const App = () => {
  const products = [
    {
      id: 1,
      name: 'FREE',
      subtitle: '$0/month',
      paragraphs: [
        '✔ Single User',
        '✔ 50GB Storage',
        '✔ Unlimited Public Projects',
        '✔ Community Access',
        '✖ Unlimited Private Projects',
        '✖ Dedicated Phone Support',
        '✖ Free Subdomain',
        '✖ Monthly Status Reports',
      ],
      buttonText: 'Order Now',
    },
    {
      id: 2,
      name: 'PLUS',
      subtitle: '$9/month',
      paragraphs: [
        '✔ Single User',
        '✔ 50GB Storage',
        '✔ Unlimited Public Projects',
        '✔ Community Access',
        '✔ Unlimited Private Projects',
        '✔ Dedicated Phone Support',
        '✔ Free Subdomain',
        '✖ Monthly Status Reports',
      ],
      buttonText: 'Order Now',
    },
    {
      id: 3,
      name: 'PRO',
      subtitle: '$49/month',
      paragraphs: [
        '✔ Single User',
        '✔ 50GB Storage',
        '✔ Unlimited Public Projects',
        '✔ Community Access',
        '✔ Unlimited Private Projects',
        '✔ Dedicated Phone Support',
        '✔ Free Subdomain',
        '✔ Monthly Status Reports',
      ],
      buttonText: 'Order Now',
    },

  ];

  return (
    <div className="App">
      <h1>React Price Card Task</h1>
      <div className="price-cards">
        {products.map((product) => (
          <PriceCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;
