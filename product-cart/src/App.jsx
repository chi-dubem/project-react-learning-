import ProductCard from "./ProductCard";
import image from "./assets/R.jpeg"
 

function App() {

  return (
    <div className="grid min-h-screen grid-cols-1 items-center justify-items-center gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
      {" "}
      <ProductCard
        name="Phone"
        price={300000}
        category="Mobile"
        rating={2}
        description="Good phone with great features"
        brand="HP"
        image={image}
      />
      <ProductCard
        name="Phone"
        price={300000}
        category="Mobile"
        rating={2}
        description="Good phone with great features"
        brand="HP"
        image={image}
      />
      <ProductCard
        name="Phone"
        price={300000}
        category="Mobile"
        rating={2}
        description="Good phone with great features"
        brand="HP"
        image={image}
      />
    </div>
  );
}

export default App
