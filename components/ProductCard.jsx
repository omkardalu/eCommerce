"use client";
import Link from "next/link";
import { useState } from "react";
import Card from "./Card";
import AddToCartButton from "./AddToCartButton";
import WishListButton from "./WishListButton";

const ProductCard = ({
  id,
  name,
  brand,
  price,
  originalPrice,
  tag,
  rating,
  image = "images/mobile/iphone15pro1.jpg",
  badge,
  discount
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const discountPercentage = discount || (originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0);

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 shrink-0 lg:w-1/4 xl:w-1/5 px-2 sm:px-3 mb-4">
      <Link href={`/product/${id}`}>
        <Card className="h-full">
          <div
            className="relative overflow-hidden bg-linear-to-br from-slate-50 to-slate-100 rounded-xl transition-all duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Image Container */}
            <div className="relative overflow-hidden h-48 sm:h-56 md:h-64 flex items-center justify-center bg-white">
              <img
                src={image}
                alt={name}
                className={`w-full h-full object-cover transition-transform duration-500 ease-out ${
                  isHovered ? "scale-110" : "scale-100"
                }`}
              />

              {/* Badge */}
              {badge && (
                <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1.5 rounded-full text-xs sm:text-sm font-bold animate-pulse">
                  {badge}
                </div>
              )}

              {/* Discount Badge */}
              {discountPercentage > 0 && (
                <div className="absolute top-3 right-3 bg-orange-500 text-white px-2.5 py-1 rounded-lg text-xs sm:text-sm font-bold shadow-lg">
                  -{discountPercentage}%
                </div>
              )}

              {/* Wishlist Button */}
              <WishListButton id={id} />

              
            </div>

            {/* Content Section */}
            <div className="p-3 sm:p-4">
              {/* Brand */}
              <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider font-semibold">
                {brand}
              </p>

              {/* Product Name */}
              <h3 className="text-sm sm:text-base font-bold text-gray-900 mt-2 line-clamp-2 hover:text-blue-600 transition-colors">
                {name}
              </h3>

              {/* Rating */}
              <div className="flex items-center gap-1.5 mt-2.5">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                        i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs sm:text-sm font-semibold text-gray-700">
                  {rating.toFixed(1)}
                </span>
              </div>

              {/* Price Section */}
              <div className="mt-3.5 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg sm:text-xl font-bold text-gray-900">
                    ₹{price.toLocaleString()}
                  </span>
                  {originalPrice && (
                    <span className="text-xs sm:text-sm text-gray-400 line-through">
                      ₹{originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>

                {/* Add to Cart Button */}
                <AddToCartButton id={id} type={1} />
              </div>
            </div>
          </div>
        </Card>
      </Link>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
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
