export const menuItems = [
  { name: "Beranda", path: "/" },
  { name: "Service", path: "/service" },
  { name: "About Us", path: "/about" },
];

export const houseItems = [
  {
    id: 1,
    title: "Korean Modern Indah",
    designer: "Indah NW",
    img: "/img/House/house1.png",
    rating: 5,
    price: 100000000,
  },
  {
    id: 2,
    title: "Japan Modern Sakura",
    designer: "Indah NW",
    img: "/img/House/house2.png",
    rating: 5,
    price: 100000000,
  },
  {
    id: 3,
    title: "France Modern Zahra",
    designer: "Indah NW",
    img: "/img/House/house3.png",
    rating: 5,
    price: 100000000,
  },
  {
    id: 4,
    title: "Italia Modern Vincenzo",
    designer: "Indah NW",
    img: "/img/House/house4.png",
    rating: 5,
    price: 100000000,
  },
  {
    id: 5,
    title: "Italia Modern Vincenzo",
    designer: "Indah NW",
    img: "/img/House/house4.png",
    rating: 5,
    price: 100000000,
  },
];
export const notifications = [
  {
    id: 1,
    avatar: "https://via.placeholder.com/40",
    message: "You have a new message from John Doe",
    timeAgo: 5,
  },
  {
    id: 2,
    avatar: "https://via.placeholder.com/40",
    message: "Your order has been shipped",
    timeAgo: 15,
  },
  {
    id: 3,
    avatar: "https://via.placeholder.com/40",
    message: "Anna commented on your post",
    timeAgo: 30,
  },
  {
    id: 4,
    avatar: "https://via.placeholder.com/40",
    message: "Reminder: Meeting at 3 PM",
    timeAgo: 45,
  },
  {
    id: 5,
    avatar: "https://via.placeholder.com/40",
    message: "New friend request from Emily",
    timeAgo: 60,
  },
];

export const wishlists = [];

export const users = [
  {
    id: 1,
    name: "Alissa Gerrand",
    role: "Architect & Building Designer",
    phone: "081234567890",
  },
  {
    id: 2,
    name: "Alissa Gerrand",
    role: "Architect & Building Designer",
    phone: "082345678901",
  },
  {
    id: 3,
    name: "Alissa Gerrand",
    role: "Architect & Building Designer",
    phone: "083456789012",
  },
  {
    id: 4,
    name: "Alissa Gerrand",
    role: "Architect & Building Designer",
    phone: "084567890123",
  },
  {
    id: 5,
    name: "Alissa Gerrand",
    role: "Architect & Building Designer",
    phone: "085678901234",
  },
  {
    id: 6,
    name: "Alissa Gerrand",
    role: "Architect & Building Designer",
    phone: "086789012345",
  },
  {
    id: 7,
    name: "Alissa Gerrand",
    role: "Architect & Building Designer",
    phone: "087890123456",
  },
  {
    id: 8,
    name: "Alissa Gerrand",
    role: "Architect & Building Designer",
    phone: "088901234567",
  },
  {
    id: 9,
    name: "Alissa Gerrand",
    role: "Architect & Building Designer",
    phone: "089012345678",
  },
];

export const projects = [
  { id: 1, projectName: "Project Of Mosque Square ", location: "Bali" },
  { id: 2, projectName: "Project Of Mosque Square ", location: "Bali" },
  { id: 3, projectName: "Project Of Mosque Square ", location: "Bali" },
];

export const duplicatedItems = [...houseItems];
while (duplicatedItems.length < 16) {
  duplicatedItems.push(...houseItems.slice(0, 16 - duplicatedItems.length));
}
