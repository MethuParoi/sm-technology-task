"use client";

import React, { useState } from "react";
import { Button, Chip, TextField } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Image from "next/image";
import { ShoppingCart } from "@mui/icons-material";

interface Product {
  id: string;
  productName: string;
  description: string;
  price: number;
  images: string[];
  categoryName: string;
  categoryId: string;
  stock: number;
}

export default function ProductDetails({ product }: { product: Product }) {
  const [qty, setQty] = useState(1); // Initialize the quantity with 1

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Ensure the quantity is a positive number and within the range of 1 to stock
    const value = Math.max(1, Math.min(Number(e.target.value), product.stock));
    setQty(value);
  };

  return (
    <section className="flex flex-col lg:flex-row gap-10">
      {/* image */}
      <div className="w-full relative lg:w-[40%] aspect-[1/1] rounded-xl bg-white border border-gray-300 p-4">
        {/* Assuming a placeholder image here */}
        <Image
          src={product?.images?.[0] ?? "/placeholder.png"}
          alt={product?.productName}
          layout="fill"
          objectFit="contain"
        />
      </div>

      {/* textual info */}
      <div className="flex-1 space-y-3">
        <Chip
          label={product?.categoryName ?? "Fruits"}
          sx={{
            backgroundColor: "#eaeee5",
            color: "#749B3F",
            fontWeight: 600,
            fontSize: {
              xs: "0.75rem",
              sm: "0.875rem",
              md: "1rem",
              lg: "1.25rem",
            },
          }}
        />
        <h2 className="text-[clamp(2rem,5vw,4rem)] font-semibold">
          {product?.productName}
        </h2>
        <p className="text-[clamp(1.5rem,5vw,2.5rem)] font-medium text-[#FF6A1A]">
          ${product?.price}/kg
        </p>
        <p className="text-xs md:text-sm xl:text-base text-[#4A4A52] leading-relaxed">
          {product?.description}
        </p>

        {/* quantity selector */}
        <div className="flex items-center gap-3 mt-4">
          <span className="text-xs md:text-sm xl:text-base font-semibold text-[#4A4A52]">
            Quantity
          </span>
          <TextField
            type="number"
            size="small"
            value={qty}
            onChange={handleQuantityChange}
            InputProps={{
              inputProps: { min: 1, max: product?.stock || 10 },
            }}
            sx={{ width: 80 }}
          />
          <span className="text-sm text-[#4A4A52]">/kg</span>
        </div>

        {/* action buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <Button
            variant="outlined"
            startIcon={<FavoriteBorderIcon />}
            sx={{
              flex: 1,
              borderColor: "#D9D9D9",
              color: "#101010",
              textTransform: "none",
            }}
          >
            Save as favorite
          </Button>
          <Button
            variant="contained"
            startIcon={<ShoppingCart />}
            sx={{
              flex: 1,
              backgroundColor: "#FF6A1A",
              "&:hover": { backgroundColor: "#FF6A1A" },
              textTransform: "none",
            }}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </section>
  );
}
