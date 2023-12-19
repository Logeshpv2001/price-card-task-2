import React from 'react';
import './PriceCard.css';

const PriceCard = ({ product }) => {
    return (
        <div className="price-card">
            <h2>{product.name}</h2>
            <h3>{product.subtitle}</h3>
            <hr />
            {product.paragraphs.map((para, index) => (
                <p key={index}>{para}</p>
            ))}
            <button>{product.buttonText}</button>
        </div>
    );
};

export default PriceCard;
