"use client";

import React from "react";
import { Chip } from "@mui/material";
import {
  useGetProductByIdQuery,
  useGetProductsQuery,
} from "@/store/api/apiSlice";
import { Product } from "@/components/home/ProductCard";
import ProductDetails from "@/components/product-details/ProductDetails";
import RelatedProducts from "@/components/product-details/RelatedProducts";
import { notFound, useParams } from "next/navigation";
import Loader from "@/components/ui/Loader/Loader";

// Using React.use to unwrap params
const ProductPage: React.FC = () => {
  const params = useParams();
  const id = params.id as string;

  // Fetch the single product using RTK Query
  const {
    data: productData,
    isLoading: productLoading,
    isError: productError,
  } = useGetProductByIdQuery(id);

  // Fetch all products for related products
  const {
    data: allProducts,
    isLoading: allLoading,
    isError: allError,
  } = useGetProductsQuery({});

  if (productError || allError) notFound(); // Handle errors

  if (productLoading || allLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader />
      </div>
    );

  const product: Product = productData?.data;
  const related = allProducts?.data?.filter(
    (p: Product) => p.categoryId === product.categoryId && p.id !== product.id
  );

  return (
    <main className="w-[90%] md:w-[83.33%] mx-auto py-28">
      <ProductDetails product={product} />

      <section className="mt-8">
        <div className="flex gap-2 mb-6">
          <Chip
            label="Description"
            sx={{
              backgroundColor: "#749B3F",
              color: "white",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          />
          <Chip
            label={`Reviews (0)`}
            sx={{
              borderRadius: "6px",
              backgroundColor: "white",
              color: "gray",
              border: "1px solid gray",
              cursor: "pointer",
            }}
          />
        </div>
        <p className="w-full lg:w-[60%] bg-[#F4F6F6] p-6 rounded-lg text-xs md:text-sm xl:text-base leading-relaxed">
          {product?.description ?? "No description available for this product."}
        </p>
      </section>

      {related?.length > 0 && <RelatedProducts products={related} />}
    </main>
  );
};

export default ProductPage;
