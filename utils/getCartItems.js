import products from "./products";
export const getCartItems = async (productids) => {
  if(productids.length == 0) return [];
  return productids.map((id)=>{
    return products.find((product)=>{
      console.log(product);
      return product.id === id;
    }) 
  })
}
