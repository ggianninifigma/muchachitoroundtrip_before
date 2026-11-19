import { asset } from "../lib/asset";

export type ProductType = "Vinyl" | "Album" | "Apparel" | "Bundle";

export interface Product {
  id: string;
  name: string;
  type: ProductType;
  price: number;
  priceLabel: string;
  onSale: boolean;
  image: string;
  blurb: string;
  description: string;
  details: string[];
}

export const products: Product[] = [
  {
    id: "el-jiro",
    name: 'Vinyl "El Jiro"',
    type: "Vinyl",
    price: 21.5,
    priceLabel: "€21.50",
    onSale: true,
    image: asset("/images/Ficticio_JiroVinilo_tienda.webp"),
    blurb: "Limited edition 12\" vinyl + bonus CD “La Maqueta”.",
    description:
      "The fourth studio album from Muchachito, self-produced alongside Diego Pozo “El Ratón” and Ale Acosta. A full-throttle mix of rumba, swing and street soul, pressed on heavyweight vinyl.",
    details: [
      "Format: 12\" vinyl + bonus CD",
      "Includes printed inner sleeve",
      "Ships worldwide in 3–5 business days",
    ],
  },
  {
    id: "vamos-que-nos-vamos",
    name: 'Vinyl "Vamos Que Nos Vamos"',
    type: "Vinyl",
    price: 29.0,
    priceLabel: "€29.00",
    onSale: true,
    image: asset("/images/Ficticio_VamosVinilo.webp"),
    blurb: "Limited double-vinyl edition of the 2004 debut.",
    description:
      "The record that started it all. The 2004 debut of Bombo Infierno, reissued as a limited double-vinyl edition. Barcelona street rumba at its rawest.",
    details: [
      "Format: 2×12\" vinyl",
      "Limited reissue — numbered run",
      "Ships worldwide in 3–5 business days",
    ],
  },
  {
    id: "que-puede-salir-mal",
    name: 'Album "Qué Puede Salir Mal"',
    type: "Album",
    price: 23.9,
    priceLabel: "€12.50 – €23.90",
    onSale: true,
    image: asset("/images/Vinilo_CD_1080.webp"),
    blurb: "The 2023 album. Available on CD or vinyl.",
    description:
      "The 2023 Muchachito Bombo Infierno album, mixed by Ferris Aromí and Muchachito, produced by Muchachito and David Carrasco. Sonido RumbaOrleans at its finest.",
    details: [
      "Format: CD (€12.50) or vinyl (€23.90)",
      "Gatefold sleeve with lyrics",
      "Ships worldwide in 3–5 business days",
    ],
  },
  {
    id: "tshirt-qpsm",
    name: 'T-Shirt "Qué Puede Salir Mal"',
    type: "Apparel",
    price: 20.0,
    priceLabel: "€20.00",
    onSale: true,
    image: asset("/images/QPSM_Coche_Tienda_cuadrado.webp"),
    blurb: "Black cotton tee — “Qué Puede Salir Mal” artwork.",
    description:
      "100% cotton black tee featuring the “Qué Puede Salir Mal” cover art. Screen-printed, soft-hand finish. Unisex fit.",
    details: [
      "100% combed cotton",
      "Sizes S–XXL",
      "Ships worldwide in 3–5 business days",
    ],
  },
  {
    id: "discografia",
    name: "Discography Bundle",
    type: "Bundle",
    price: 19.0,
    priceLabel: "€5.00 – €19.00",
    onSale: true,
    image: asset("/images/discos.webp"),
    blurb: "Pick-your-own bundle across the full catalogue.",
    description:
      "Build your own bundle from the full Muchachito catalogue — from “Vamos que nos vamos” to “El Jiro”. The more you add, the more you save.",
    details: [
      "Mix and match any titles",
      "Bundle pricing applied at checkout",
      "Ships worldwide in 3–5 business days",
    ],
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
