import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProductBySlug, products } from "@/lib/products";
import { ProductDetail } from "@/components/shop/ProductDetail";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.name} | Doxora Luxury Hampers`,
    description: product.description.slice(0, 160),
    openGraph: { images: [{ url: product.images[0] }] },
  };
}

export default function ProductPage({ params }: Props) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();
  return <ProductDetail product={product} />;
}
