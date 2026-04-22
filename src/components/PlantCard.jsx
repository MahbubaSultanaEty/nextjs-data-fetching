

const PlantCard = ({ plant }) => {
    const { name, category, price, rating } = plant;

    return (
        <div className="card mx-auto card-dash bg-base-100 w-96">
  <div className="card-body">
                <h2 className="card-title">{ name}</h2>
    <p>{category}</p>
    <p>{price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default PlantCard;