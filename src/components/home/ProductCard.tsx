import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export interface Product {
  id: string;
  productName: string;
  images: string[];
  price: number;
  categoryId: string;
  categoryName: string;
  description: string;
  stock: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="relative group w-full p-3 mx-auto bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-[101%] hover:shadow-2xl">
      {/* Product Image */}
      <Link href={`/product/${product.id}`} className="w-full block">
        <div className="relative w-full h-[116px] min-[500px]:h-[180px] md:h-[116px] min-[900px]:h-[180px] lg:h-[208px] rounded-xl bg-[#F4F6F6] mb-4">
          <Image
            src={product.images[0]}
            alt={product.productName}
            objectFit="contain"
            layout="fill"
          />
        </div>
      </Link>

      {/* Product Details */}
      <div className="text-center">
        <Link
          href={`/product/${product.id}`}
          className="block text-sm min-[500px]:text-lg md:text-sm min-[900px]:text-lg lg:text-xl font-medium mb-2"
        >
          {product.productName}
        </Link>
        <p className="text-xs min-[500px]:text-base md:text-xs min-[900px]:text-base lg:text-lg font-light text-[#4A4A52] mb-3">
          ${product.price}
        </p>

        {/* Add to Cart Button */}
        <Button
          variant="contained"
          sx={{
            ":hover": {
              backgroundColor: "#FF6A1A",
              border: "none",
              color: "white",
            },
            backgroundColor: "transparent",
            border: "1px solid #D9D9D9",
            boxShadow: "none",
            fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
            color: "black",
            borderRadius: "8px",
          }}
          className="w-full"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
