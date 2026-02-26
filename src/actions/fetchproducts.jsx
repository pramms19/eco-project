export const fetchProducts = async (limit) => {
  const response = await fetch(`https://dummyjson.com/products?limit=${limit}`);
  // const delay5Seconds =await new Promise(resolve => setTimeout(resolve, 5000));
  // console.log(delay5Seconds)
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
};
