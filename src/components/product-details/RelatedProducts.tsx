import React from "react";
import { Chip } from "@mui/material";
import ProductCard, { Product } from "@/components/home/ProductCard";

interface Props {
  products: Product[];
}

export default function RelatedProducts({ products }: Props) {
  return (
    <section className="mt-16">
      <div className="text-center mb-8">
        <Chip
          label="Our Products"
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
            marginBottom: "16px",
          }}
        />
        <h2 className="text-[clamp(2rem,5vw,4rem)] font-medium mb-4">
          Related Products
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.slice(0, 4).map((p) => (
          <ProductCard product={p} key={p.id} />
        ))}
      </div>
    </section>
  );
}
