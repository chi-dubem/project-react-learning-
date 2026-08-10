function ProductCard({
  name,
  price,
  category,
  rating,
  discription,
  brand,
  image,
}) {
  return (
    <div className="w-80 overflow-hidden rounded-xl bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {" "}
      {/* Product Image */}{" "}
      <img src={image} alt={name} className="h-56 w-full object-cover" />{" "}
      {/* Product Information */}{" "}
      <div className="p-5">
        {" "}
        <p className="mb-1 text-sm font-medium text-gray-500"> {brand} </p>{" "}
        <h2 className="mb-2 text-xl font-bold text-gray-900"> {name} </h2>{" "}
        <p className="mb-3 text-lg font-semibold text-green-600"> ₦{price} </p>{" "}
        <p className="mb-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">
          {" "}
          {category}{" "}
        </p>{" "}
        <p className="mb-2 text-sm text-yellow-500"> ⭐ {rating} </p>{" "}
        <p className="text-sm leading-relaxed text-gray-600">
          {" "}
          {discription}{" "}
        </p>{" "}
      </div>{" "}
    </div>
  );
}

export default ProductCard;
