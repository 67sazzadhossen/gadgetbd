/* eslint-disable react/prop-types */

const Card = ({ product }) => {
  return (
    <div className="card bg-base-100 shadow-xl flex flex-col h-full">
      {/* Figure with fixed height */}
      <figure className="h-[450px] w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </figure>
      <div className="card-body flex flex-col flex-grow">
        <h2 className="card-title">{product.name}</h2>
        <h2 className="card-title text-base">Category : {product.category}</h2>
        <h2 className="card-title text-base">Price : ${product.price}</h2>
        <p className="flex-grow">{product.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
