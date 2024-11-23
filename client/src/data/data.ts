import { Category } from "../components/Categories/types";
import { Business } from "../components/Businesses/types";

export const categories: Category[] = [
  { id: 1, name: "cleaning", bgcolor: "#fff", icon: "https://img.icons8.com/?size=100&id=8088&format=png&color=000000" },
  { id: 2, name: "repair", bgcolor: "#fff", icon: "https://img.icons8.com/?size=100&id=59827&format=png&color=000000" },
  { id: 3, name: "painting", bgcolor: "#fff", icon: "https://img.icons8.com/?size=100&id=8141&format=png&color=000000" },
  { id: 4, name: "shifting", bgcolor: "#000", icon: "https://img.icons8.com/?size=100&id=9341&format=png&color=000000" },
  { id: 5, name: "plumbing", bgcolor: "#fff", icon: "https://img.icons8.com/?size=100&id=24925&format=png&color=000000" },
  { id: 6, name: "electric", bgcolor: "#000", icon: "https://img.icons8.com/?size=100&id=9094&format=png&color=000000" }
];

export const businesses: Business[] = [
  {
    id: 1,
    image: "https://thecleanhaven.com/wp-content/uploads/2021/06/cleaning-service.jpeg",
    category: "cleaning",
    name: "Cleaning services",
    person: "Name Surname_1",
    address: "Street 1, Kaunas"
  },
  {
    id: 2,
    image: "https://www.nationalcargopackersandmovers.in/images/services/home-relocation.jpg",
    category: "shifting",
    name: "Shifting services",
    person: "Name Surname_2",
    address: "Street 2, Kaunas"
  },
  {
    id: 3,
    image: "https://5.imimg.com/data5/SELLER/Default/2024/4/410596179/HN/IF/ED/135629260/plumbing-work-service.jpg",
    category: "plumbing",
    name: "Plumber to the house",
    person: "Name Surname_3",
    address: "Street 3, Kaunas"
  },
  {
    id: 4,
    image: "https://www.ainsworth.com/wp-content/uploads/2022/09/Electrical-Services.png",
    category: "electric",
    name: "Electrician to the house",
    person: "Name Surname_4",
    address: "Street 4, Kaunas"
  }
];
