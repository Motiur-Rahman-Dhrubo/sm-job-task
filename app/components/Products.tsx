"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import leaf from "../../public/image/leaf.png";
import Link from "next/link";

type Product = {
    id: string;
    productName: string;
    description: string;
    price: number;
    stock: number;
    images: string[];
    categoryId: string;
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
  };

  const categories = {
    all: "All",
    fruits: "6751516f9c52879c1fde6558",
    vegetables: "6751584feaeaa5cc21bbe21b",
    salad: "6751569e0e539396658e60a9",
  };

const Products = () => {

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [selectedCategory, setSelectedCategory] =
      useState<keyof typeof categories>("all");

    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const res = await fetch("https://code-commando.com/api/v1/products");
          const data = await res.json();
          setProducts(data?.data || []);
        } catch (error) {
          console.error("Error fetching products:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchProducts();
    }, []);

    // Filter products
    const filteredProducts =
      selectedCategory === "all"
        ? products
        : products.filter(
            (product) => product.categoryId === categories[selectedCategory]
          );

  return (
    <div className="w-full pt-[120px] relative bg-white">
      <Image
        src={leaf}
        width={60}
        alt="leaf"
        className="absolute top-[2%] right-[10%]"
      />
      <Image
        src={leaf}
        width={60}
        alt="leaf"
        className="absolute top-[6%] left-[10%] rotate-[45deg]"
      />
      <div className="flex w-11/12 mx-auto flex-col items-center">
        <h3 className="font-medium text-xl text-[#749B3F] text-center bg-[#749B3F1A] inline rounded-lg px-3 py-1">
          Our Products
        </h3>
        <h2 className="font-medium text-5xl text-center text-[#212337] mt-4">
          Our Fresh Products
        </h2>
        <p className="font-normal text-sm text-[#4A4A52] text-center mt-4">
          We pride ourselves on offering a wide variety of fresh and flavorful
          fruits, <br /> vegetables, and salad ingredients.
        </p>

        {/* Filter Buttons */}
        <div className="font-normal text-lg mt-4 flex text-[#A6A6A6] gap-6">
          {Object.entries(categories).map(([key]) => (
            <button
              key={key}
              onClick={() =>
                setSelectedCategory(key as keyof typeof categories)
              }
              className={`border px-6 py-3 rounded-lg transition hover:bg-[#F4F6F6] cursor-pointer ${
                selectedCategory === key
                  ? "bg-[#749B3F] text-white border-[#749B3F] hover:text-[#A6A6A6]"
                  : "border-[#A6A6A6]"
              }`}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {loading ? (
            <p className="text-center col-span-full">Loading products...</p>
          ) : filteredProducts.length === 0 ? (
            <p className="text-center col-span-full">No products found.</p>
          ) : (
            filteredProducts.slice(0, 8).map((product) => (
              <div key={product.id} className="rounded-[20px] p-3 shadow-lg">
                <Image
                  src={product.images[0]}
                  width={100}
                  height={100}
                  alt={product.productName}
                  className="w-full h-52 object-cover rounded-2xl bg-[#F4F6F6]"
                />
                <h4 className="font-medium text-lg text-[#212337] text-center mt-3">
                  {product.productName}
                </h4>
                <p className="text-[#4A4A52] font-normal text-lg text-center mt-2">
                  ৳{product.price}/kg
                </p>
                <button className="font-normal text-lg text-[#212337] border border-[#D9D9D9] rounded-lg w-full py-3 mt-3 hover:bg-[#FF6A19] hover:border-[#FF6A19] hover:text-white cursor-pointer">
                  Add to cart
                </button>
              </div>
            ))
          )}
        </div>

        
        <Link
          href="/shop"
          className="text-[#FF6A1A] border border-[#FF6A1A] hover:bg-[#FF6A1A] hover:text-white font-semibold text-lg px-8 py-4 rounded-lg mt-8"
        >
          See All Products
        </Link>
      </div>
    </div>
  );
};

export default Products;
