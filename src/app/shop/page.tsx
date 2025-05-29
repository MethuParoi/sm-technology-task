"use client";

import { useState } from "react";
import {
  useGetCategoriesQuery,
  useGetProductsQuery,
} from "../../store/api/apiSlice";
import ProductCard, { Product } from "../../components/home/ProductCard";
import { Button, Chip } from "@mui/material";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Loader from "../../components/ui/Loader/Loader";

interface Category {
  id: string;
  categoryName: string;
}

const OurProducts: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const pathname = usePathname();

  // Fetch all categories using RTK Query
  const {
    data: categories,
    error: categoriesError,
    isLoading: categoriesLoading,
  } = useGetCategoriesQuery({});

  // Fetch all products using RTK Query
  const {
    data: allProducts,
    error: allProductsError,
    isLoading: allProductsLoading,
  } = useGetProductsQuery({});

  const products =
    selectedCategory === "All"
      ? allProducts?.data
      : allProducts?.data?.filter(
          (product: Product) => product.categoryId === selectedCategory
        );

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  if (categoriesLoading || allProductsLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader />
      </div>
    );
  if (categoriesError || allProductsError)
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <h3 className="text-xl md:text-3xl text-gray-400 font-medium leading-relaxed">
          Error loading data.
        </h3>
      </div>
    );

  return (
    <section className="relative w-[90%] md:w-[83.33%] mx-auto pt-16 pb-16">
      {/* Category Filters */}
      <div className="text-center mb-12">
       
        <h2 className="text-[clamp(2rem,5vw,4rem)] font-medium mb-4">
          Our Products
        </h2>
        <p className="w-[90%] lg:w-[60%] mx-auto text-xs md:text-sm xl:text-base leading-[1.71] text-[#4A4A52] mb-4">
          We pride ourselves on offering a wide variety of fresh and flavorful
          fruits, vegetables, and salad ingredients.
        </p>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
          <Button
            variant="outlined"
            onClick={() => handleCategoryClick("All")}
            sx={{
              ":hover": {
                backgroundColor: "#749B3F",
                border: "none",
                color: "white",
              },
              backgroundColor:
                selectedCategory === "All" ? "#749B3F" : "transparent",
              border: selectedCategory === "All" ? "none" : "1px solid #D9D9D9",
              color: selectedCategory === "All" ? "white" : "#D9D9D9",
            }}
          >
            All
          </Button>
          {categories?.data?.map((category: Category) => (
            <Button
              key={category.id}
              variant="outlined"
              onClick={() => handleCategoryClick(category.id)}
              sx={{
                ":hover": {
                  backgroundColor: "#749B3F",
                  border: "none",
                  color: "white",
                },
                backgroundColor:
                  selectedCategory === category.id ? "#749B3F" : "transparent",
                border:
                  selectedCategory === category.id
                    ? "none"
                    : "1px solid #D9D9D9",
                color: selectedCategory === category.id ? "white" : "#D9D9D9",
              }}
            >
              {category.categoryName}
            </Button>
          ))}
        </div>
      </div>

      {categoriesLoading ||
        (allProductsLoading && (
          <div className="flex items-center justify-center h-screen">
            <Loader />
          </div>
        ))}

      {/* Product Cards */}
      {products.length ? (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
          {products?.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="w-full h-screen flex items-center justify-center">
          <h3 className="text-xl md:text-3xl text-gray-400 font-medium leading-relaxed">
            No products available for this category.
          </h3>
        </div>
      )}

      {/* See All Products Button */}
    

      <div className="absolute top-10 md:top-30 left-0 md:left-23 z-30">
        <Image
          src="/leaf.png"
          alt="leaf"
          width={50}
          height={50}
          className="rotate-[320deg] scale-75"
        />
      </div>

      <div className="absolute top-0 md:top-14 right-0 md:right-20 z-30">
        <Image
          src="/leaf.png"
          alt="leaf"
          width={50}
          height={50}
          className="rotate-[260deg] scale-75"
        />
      </div>
    </section>
  );
};

export default OurProducts;
