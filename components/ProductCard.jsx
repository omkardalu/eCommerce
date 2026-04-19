import Link from "next/link";
import Card from "./Card";

const ProductCard = ({ id, name, brand, price, tag, rating }) => {
  return (
    <div className="md:w-1/4 md:mb-2 lg:w-1/5 xl:mb-4 xl:w-1/6 mx-4 ">
    <Link href={`/product/${id}`}>
      <Card>
        <div className="grid grid-cols-2 md:grid-cols-1 md:grid-rows-2 bg-linear-to-l  from-(--cloud) to-(--snow)">
          <div className="overflow-hidden z-0 hover:shadow-inner flex items-center ">
              <img className="hover:scale-125 rounded-xl h-full w-auto" src="images/mobile/iphone15pro1.jpg" alt="" />
          </div>

          <div className="flex flex-col p-2 px-4 justify-center">
            <p className="font-bold max-h-[2lh] overflow-hidden  xl:text-xl xl:pb-4 text-lg text-(--ink)">
              {name}
            </p>
            <p className=" pb-2 text-(--silver) xl:text-xl xl:pb-4">{brand}</p>
            <div className="flex justify-between sm:pr-4">
              <p className="text-(--graphite) font-bold ">₹{price}</p>
              <p className="text-(--graphite) border text-sm border-(--slate) rounded-2xl px-2 ">★{rating}</p>
            </div>
          </div>
        </div>
      </Card>
    </Link>
    </div>
  );
};
export default ProductCard;

/*
{
     id: "nothing-ear-2",
     name: "Nothing Ear (2)",
     brand: "Nothing",
     category: "audio",
     price: 9999,
     tag: "New",
     images: [
       "/images/nothing-ear-2-1.png",
       "/images/nothing-ear-2-2.png",
       ],
     description: "Transparent. Dual-chamber. LHDC 5.0 wireless. Nothing to hide, everything to hear.",
     specs: {
       battery: "6.3 hours bud (36 hours with case)",
       noiseCancellation: "Active Noise Cancellation + Transparency mode",
       driverSize: "11.6mm",
       connectivity: "Bluetooth 5.3, multipoint",
       codec: "LHDC 5.0, AAC, SBC",
     },
     specLabels: specLabels.audio,
     variants: [
       { type: "color", value: "White" },
       { type: "color", value: "Black" },
       ],
     rating: 4.6,
     isFeatured: false,
   },
*/

