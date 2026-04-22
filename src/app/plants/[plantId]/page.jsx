export const generateStaticParams = async () => {
    const res = await fetch("http://localhost:6004/plants");
    const plants = await res.json();
    return plants.slice(0,4).map(plant => ({plantId: plant.id}))

}

const PlantDetailsPage = async ({params}) => {
    const { plantId } = await params;
    

    const res = await fetch(`http://localhost:6004/plants/${plantId}`);
    const expectedPlant = await res.json();
    const { name, category, price, water, light, rating } = expectedPlant;

    return (
            <div className="max-w-4xl bg-white mx-auto px-4 py-10">

      {/* Image */}
      <div className="rounded-2xl overflow-hidden shadow-md">
        {/* <img
          src={plant.image}
          alt={plant.name}
          className="w-full h-80 object-cover"
        /> */}
      </div>

      {/* Info */}
      <div className="mt-6 space-y-3">
        <h1 className="text-3xl font-bold">{name}</h1>

        <p className="text-gray-600">
          Category: <span className="font-semibold">{category}</span>
        </p>

        <p className="text-gray-600">
          Water: {water}
        </p>

        <p className="text-gray-600">
          Light: {light}
        </p>

        <p className="text-xl font-bold text-green-600">
          ${price}
        </p>

        <p className="text-yellow-500">
          Rating: ⭐ {rating}
        </p>

        <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700">
          Add to Cart
        </button>
      </div>

    </div>
    );
};

export default PlantDetailsPage;