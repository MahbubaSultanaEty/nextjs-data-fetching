import React from 'react';

const Product = ({ product }) => {
    const {name, price, category} = product
    return (
        <div className="card card-border bg-base-100 w-96 mx-auto">
  <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{ price}</p>
                <p>{ category}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default Product;