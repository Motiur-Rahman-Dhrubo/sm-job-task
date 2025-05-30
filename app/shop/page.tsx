"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

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

const ShopPage = () => {
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
    <div className="w-full bg-white py-[80px]">
      <div className="w-11/12 mx-auto">
        <div className="font-normal text-lg pt-8 flex text-[#A6A6A6] gap-6">
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

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {loading ? (
            <p className="text-center col-span-full">Loading products...</p>
          ) : filteredProducts.length === 0 ? (
            <p className="text-center col-span-full">No products found.</p>
          ) : (
            filteredProducts.map((product) => (
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
                  Show Details
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
