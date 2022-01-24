import type { Product } from "../interfaces/Product";

export async function fetchProducts() {
  try {
    const response = await fetch("https://efuktshirts.com/products.json");
    const json = await response.json();

    let data: Product[] = [];

    json.products.forEach((product) => {
      // Iterate over the variants as these need to be the unique products, not the parent product.
      product.variants.forEach((variant) => {
        const p: Product = {
          id: variant.id,
          productTitle: product.title,
          variantTitle: variant.title,
          price: +variant.price,
          image: variant.featured_image.src,
        };

        data.push(p);
      });
    });

    return [...data];
  } catch (e) {
    throw Error("An error occurred");
  }
}
