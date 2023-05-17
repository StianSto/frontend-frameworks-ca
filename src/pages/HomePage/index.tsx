import useApi from "../../hooks/useApi";
import { API_URL } from "../../constants";
import ProductList from "../../components/ProductList";

export default function HomePage() {
  const { data, isLoading, isError } = useApi(API_URL);

  return (
    <div>
      <ProductList products={data} />
    </div>
  );
}

const products = [
  {
    id: "f99cafd2-bd40-4694-8b33-a6052f36b435",
    title: "USB charger cable",
    description:
      "USB 2.0 to USB Type-C. This can be used to power all compliant mobile devices.",
    price: 45.99,
    discountedPrice: 45.99,
    imageUrl: "https://api.noroff.dev/images/online-shop/0-usb-plug.jpg",
    rating: 4.5,
    tags: ["electronics"],
    reviews: [
      {
        id: "c6e4fb1a-4c3d-4a4b-b785-a269f7f0707d",
        username: "Ola N.",
        rating: 4,
        description: "Did what it needed to do but wish it lasted longer",
      },
      {
        id: "dbe6d28f-35f7-43a7-88f4-93a68f3c131c",
        username: "Kate M.",
        rating: 5,
        description: "Perfect!",
      },
    ],
  },
  {
    id: "109566af-c5c2-4f87-86cb-76f36fb8d378",
    title: "Vanilla Perfume",
    description:
      "Women's perfume that smells a warm and sweet, with nuances of wood and jasmine.",
    price: 2599.99,
    discountedPrice: 2079.99,
    imageUrl: "https://api.noroff.dev/images/online-shop/1-perfume-white.jpg",
    rating: 5,
    tags: ["perfume", "beauty"],
    reviews: [
      {
        id: "90a61e3e-355a-42e4-b038-d91dcad33c20",
        username: "Jim N.",
        rating: 5,
        description: "My partner loves it, its her favourite.",
      },
    ],
  },
  {
    id: "f2d44fba-09a7-4ccb-9ceb-a6212bf5c213",
    title: "Pink shoes",
    description:
      "Gold-trimmed pink shoes perfect for any women with a sense of adventure.",
    price: 899.99,
    discountedPrice: 899.99,
    imageUrl: "https://api.noroff.dev/images/online-shop/2-shoes-pink.jpg",
    rating: 0,
    tags: ["shoes"],
    reviews: [],
  },
  {
    id: "159fdd2f-2b12-46de-9654-d9139525ba87",
    title: "Gold headphones",
    description: "Professional headphones with gold trim.",
    price: 449.99,
    discountedPrice: 382.49,
    imageUrl:
      "https://api.noroff.dev/images/online-shop/3-headphones-beats.jpg",
    rating: 4,
    tags: ["headphones"],
    reviews: [
      {
        id: "88e11191-d2e5-4bfb-9bcb-d7e158284657",
        username: "Michael J.",
        rating: 4,
        description: "Good sound quality.",
      },
    ],
  },
];
