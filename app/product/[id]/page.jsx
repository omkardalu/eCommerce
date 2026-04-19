import { getProduct } from "@/utils/products";
import Image from "next/image";
const page = async ({ params }) => {
  const { id } = await params;

  const product = await getProduct(id);
  return (
    <section className="sm:grid capitalize sm:grid-cols-2">
      <div className="flex overflow-scroll">
        {product.images.map((img) => (
          <img src={img} alt="no image" />
        ))}
      </div>
      <div>
        <p>{product.name}</p>
        <p>{product.brand}</p>
        <p>{product.category}</p>
        <p>{product.description}</p>
        <div>
        <p>{product.rating}</p>
        <p>{product.tag}</p>
        <p>{product.price}</p>
        </div>
        <p>{product.specLabels.map((label) => product.specs[label])}</p>
      </div>
    </section>
  );
};

export default page;

/*{
    id: "apple-iphone-15-pro",
    name: "iPhone 15 Pro",
    brand: "Apple",
    category: "smartphones",
    price: 134900,
    tag: "Best Seller",
    images: [
      "/images/apple-iphone-15-pro-1.png",
      "/images/apple-iphone-15-pro-2.png",
      "/images/apple-iphone-15-pro-3.png",
    ],
    description: "Titanium frame. A17 Pro chip. The benchmark everything else chases.",
    specs: {
      display: "6.1-inch Super Retina XDR OLED, 120Hz ProMotion",
      chip: "Apple A17 Pro",
      battery: "3274 mAh, 27W USB-C fast charging",
      camera: "48MP main + 12MP ultrawide + 12MP 3x telephoto",
      storage: "128GB / 256GB / 512GB / 1TB",
    },
    specLabels: specLabels.smartphones,
    variants: [
      { type: "color", value: "Natural Titanium" },
      { type: "color", value: "Black Titanium" },
      { type: "color", value: "White Titanium" },
      { type: "color", value: "Blue Titanium" },
      { type: "storage", value: "128GB", price: 134900 },
      { type: "storage", value: "256GB", price: 144900 },
      { type: "storage", value: "512GB", price: 164900 },
      { type: "storage", value: "1TB",   price: 184900 },
    ],
    rating: 4.9,
    isFeatured: true,
  },*/
