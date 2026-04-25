import { getProduct } from "@/utils/products";
import ProductClient from "@/components/ProductClient";

const page = async ({ params }) => {
  const { id } = await params;

  const product = await getProduct(id);

  return (
    <section className="md:grid min-h-screen capitalize items-center relative md:grid-cols-2">
      <div className="sticky z-0 top-0">
        <div className="flex flex-row overflow-x-scroll no-scrollbar">
          {product.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt="product image"
              className="z-0"
            />
          ))}
        </div>
      </div>
      <div className="p-6 flex flex-col relative z-10 justify-center bg-(--cloud)/50 rounded-3xl shadow-md backdrop-blur-xl ">
        <p className="text-3xl font-bold text-(--ink) mb-1">{product.name}</p>
        <div className="flex gap-2 items-center text-(--slate) mb-3">
          <p className="text-2xl font-bold ">{product.brand}</p> |
          <p>{product.category}</p>
        </div>
        <p className="text-(--graphite) mb-2">{product.description}</p>
        <div>
          <div className=" my-3 mb-6  flex gap-30 items-center-safe">
            <div className={`w-[${(2 / 5) * 100}%]`}>
              <p className="text-(--graphite)">{product.tag}</p>
              ★★★★★ {product.rating}
            </div>
            <p className="text-(--graphite) font-bold text-2xl py-2">
              ₹{product.price}
            </p>
          </div>

          <ProductClient id={id} />

        </div>
        <table className="">
          <tbody className="rounded-2xl overflow-hidden">

          {
            product.specLabels.map((label ,i) => (
            <tr key={i} className={` shadow  overflow-hidden   `} >
              <td className="w-2/5 content-start p-2">{label}</td><td className="p-2">{product.specs[label]}</td>
            </tr>
          ))}
            </tbody>
        </table>
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
