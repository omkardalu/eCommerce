const ProductCard = () => {
  return (
    <section className="bg-(--surface) min-w-30 text-(--textSecondary) border border-(--borders) m-2 p-2 rounded">
      <div>
        <div className=" border border-(--borders) p-2" >img</div>
        <div>
          <p className="capitalize text-(--textPrimary) pt-2" >name</p>
          <p>tag</p>
          <p>rating</p>
          <p className="text-(--primary)">price</p>
        </div>
      </div>
    </section>
  );
};

/*
 {
    id: "bose-quietcomfort-45",
    name: "Bose QuietComfort 45",
    brand: "Bose",
    category: "audio",
    price: 26990,
    tag: "Best Seller",
    images: [
      "/images/bose-quietcomfort-45-1.png",
      "/images/bose-quietcomfort-45-2.png",
    ],
    description: "24 hours. Deep balanced sound. The definition of all-day wearability.",
    specs: {
      battery: "24 hours (ANC on) — 15 min charge = 3 hours",
      noiseCancellation: "Bose Quiet Mode + Aware Mode",
      driverSize: "40mm",
      connectivity: "Bluetooth 5.1, multipoint",
      codec: "AAC, SBC",
    },
    specLabels: specLabels.audio,
    variants: [
      { type: "color", value: "Triple Black" },
      { type: "color", value: "White Smoke" },
    ],
    rating: 4.7,
    isFeatured: false,
  },
*/

export default ProductCard;
