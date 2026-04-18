import Card from "./Card";

const ProductCard = ({ id, name, brand, price, tag, rating }) => {
  return (
    <div className="md:w-1/4 md:mb-2 lg:w-1/5 xl:mb-4 xl:w-1/6 mx-4 ">
      <Card>
        <div className="grid grid-cols-2 md:grid-cols-1 md:grid-rows-2 ">
          <div className="overflow-hidden z-0 hover:shadow-inner flex items-center">
              <img className="hover:scale-125 rounded-xl h-full w-auto" src="https://placehold.co/600x400" alt="" />
          </div>

          <div className="flex flex-col p-2 px-4 justify-center">
            <p className="font-bold max-h-[2lh] overflow-hidden  xl:text-xl xl:pb-4 text-lg text-(--ink)">
              {name}
            </p>
            <p className=" pb-2 text-(--slate) xl:text-xl xl:pb-4">{brand}</p>
            <div className="flex justify-between sm:pr-4">
              <p className="text-(--silver) font-bold ">₹{price}</p>
              <p className="text-(--graphite) border text-sm border-(--slate) rounded-2xl px-2 ">★{rating}</p>
            </div>
          </div>
        </div>
      </Card>
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

//   const a = <section className="bg-(--borders) max-w-3/4 sm:max-w-50  min-w-40 shadow-xl hover:shadow-2xl transition-shadow duration-150 text-(--textSecondary) border-4 border-background m-2 mx-6 rounded-xl">
//       <div className="flex sm:flex-col items-center ">
//         <div className="sm:h-40 h-full w-1/2 sm:w-auto overflow-hidden flex items-center justify-center bg-white"><img className="object-cover" src="/images/audio/Nothing-Ear-(2).png" alt={name} /></div>
//         <div className=" w-1/2 sm:w-auto p-4">
//           <p className="bg-white w-fit px-1 text-[10px] rounded-2xl">{tag}</p>
//           <p className="capitalize text-(--textPrimary) font-black text-2xl text-balance wrap-break-word overflow-hidden h-18 pt-2">{name}</p>
//           <p className="text-(--textSecondary) capitalize font-bold text-xl">{brand}</p>
//           <div className="flex justify-between">
//           <p>★ {rating}</p>
//           <p className="text-(--textPrimary)">₹{price}</p>
//           </div>
//         </div>
//       </div>
//     </section>
