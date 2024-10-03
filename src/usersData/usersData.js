import { MdOutlinePeople } from "react-icons/md";
import icon from "./book.png";

// users Data
export const users = [
  {
    id: 1,
    name: "Elena",
    email: "mselena122@gmail.com",
    amount: "3.442",
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    name: "Emma",
    email: "emma122@gmail.com",
    amount: "4.442",
    img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    name: "Alex",
    email: "alex32@gmail.com",
    amount: "6.442",
    img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    name: "Angel",
    email: "angel00@gmail.com",
    amount: "10.442",
    img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    name: "Maria",
    email: "maria45@gmail.com",
    amount: "6.442",
    img: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 6,
    name: "Raj",
    email: "raj64@gmail.com",
    amount: "3.442",
    img: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

// chartBoxUser Data
export const chartBoxUser = {
  color: "#8884d8",
  title: "Total Users",
  icon: icon,
  number: 11.423,
  dataKey: "users",
  percentage: 45,
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 800 },
    { name: "Fri", users: 900 },
    { name: "Sat", users: 300 },
  ],
};
// total products Data
export const chartBoxProducts = {
  color: "#8884d8",
  title: "Total Products",
  icon: icon,
  number: 423,
  dataKey: "products",
  percentage: 25,
  chartData: [
    { name: "Maria", products: 50 },
    { name: "Eva", products: 40 },
    { name: "John", products: 100 },
    { name: "Jack", products: 450 },
    { name: "Angel", products: 200 },
    { name: "Kumar", products: 130 },
    { name: "Pet", products: 440 },
  ],
};
// total ratio Data
export const chartBoxRatios = {
  color: "#8884d8",
  title: "Total Ratios",
  icon: icon,
  number: 2.8,
  dataKey: "ratios",
  percentage: 12,
  chartData: [
    { name: "Sun", ratios: 30 },
    { name: "Mon", ratios: 50 },
    { name: "Tue", ratios: 60 },
    { name: "Wed", ratios: 660 },
    { name: "Thu", ratios: 80 },
    { name: "Fri", ratios: 90 },
    { name: "Sat", ratios: 30 },
  ],
};
// total revenue Data
export const chartBoxRevenue = {
  color: "#8884d8",
  title: "Total Revenue",
  icon: icon,
  number: "$56.363",
  dataKey: "revenue",
  percentage: -12,
  chartData: [
    { name: "Sun", revenue: 10 },
    { name: "Mon", revenue: 40 },
    { name: "Tue", revenue: 5 },
    { name: "Wed", revenue: 7 },
    { name: "Thu", revenue: 40 },
    { name: "Fri", revenue: 17 },
    { name: "Sat", revenue: 10 },
  ],
};

// total visit Data
export const chartBoxTotalVisit = {
  title: "Total Visit",
  color: "tomato",
  dataKey: "visit",
  chartData: [
    {
      name: "Sun",
      visit: 400,
    },
    {
      name: "Mon",
      visit: 2210,
    },
    {
      name: "Tue",
      visit: 2000,
    },
    {
      name: "Wed",
      visit: 2780,
    },
    {
      name: "Thu",
      visit: 1890,
    },
    {
      name: "Fri",
      visit: 2390,
    },
    {
      name: "Sat",
      visit: 3490,
    },
  ],
};
// total profit Data
export const chartBoxTotalProfit = {
  title: "Total Profit",
  color: "#8884d8",
  dataKey: "profit",
  chartData: [
    {
      name: "Sun",
      profit: 4000,
    },
    {
      name: "Mon",
      profit: 2210,
    },
    {
      name: "Tue",
      profit: 2000,
    },
    {
      name: "Wed",
      profit: 2780,
    },
    {
      name: "Thu",
      profit: 1890,
    },
    {
      name: "Fri",
      profit: 2390,
    },
    {
      name: "Sat",
      profit: 3490,
    },
  ],
};

// picChartData

export const data = {
  title: "Leads by Source",

  chartData: [
    { name: "Mobile", value: 400 },
    { name: "Desktop", value: 300 },
    { name: "Laptop", value: 300 },
    { name: "Tablet", value: 200 },
  ],
};

// rowUser Data
export const rows = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    phone: "353 453 442",
    status: true,
    email: "snowjon12@gmail.com",
    createDate: "13-03-2024",
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    phone: "353 453 442",
    status: true,
    email: "lannistercersei@gmail.com",
    createDate: "13-03-2024",
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    phone: "353 453 442",
    status: false,
    email: "lannisterjaime@gmail.com",
    createDate: "13-03-2024",
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    phone: "353 453 442",
    status: true,
    email: "starkarya@gmail.com",
    createDate: "13-03-2024",
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    phone: "353 453 442",
    status: false,
    email: "snowjon12@gmail.com",
    createDate: "13-03-2024",
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 6,
    lastName: "Melisandre",
    firstName: "Eva",
    phone: "353 453 442",
    status: true,
    email: "snowjon12@gmail.com",
    createDate: "13-03-2024",
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    phone: "353 453 442",
    status: false,
    email: "snowjon12@gmail.com",
    createDate: "13-03-2024",
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    phone: "353 453 442",
    status: true,
    email: "snowjon12@gmail.com",
    createDate: "13-03-2024",
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 9,
    lastName: "Roxie",
    firstName: "Harvey",
    phone: "353 453 442",
    status: true,
    email: "snowjon12@gmail.com",
    createDate: "13-03-2024",
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export const inputProducts = [
  {
    id: 1,
    title: "This is very good product.",
    img: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600",
    colors: "gray",
    producer: "Mobile",
    price: "$542.42",
    createAt: "01-02-2024",
    inStock: true,
  },
  {
    id: 2,
    title: "This is very good product.",
    img: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600",
    colors: "gray",
    producer: "Samsung",
    price: "$542.42",
    createAt: "01-02-2024",
    inStock: true,
  },
  {
    id: 3,
    title: "This is very good product.",
    img: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600",
    colors: "gray",
    producer: "Samsung",
    price: "$542.42",
    createAt: "01-02-2024",
    inStock: true,
  },
  {
    id: 4,
    title: "This is very good product.",
    img: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600",
    colors: "gray",
    producer: "Samsung",
    price: "$542.42",
    createAt: "01-02-2024",
    inStock: true,
  },
  {
    id: 5,
    title: "This is very good product.",
    img: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600",
    colors: "gray",
    producer: "Samsung",
    price: "$542.42",
    createAt: "01-02-2024",
    inStock: true,
  },
  {
    id: 6,
    title: "This is very good product.",
    img: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600",
    colors: "gray",
    producer: "Samsung",
    price: "$542.42",
    createAt: "01-02-2024",
    inStock: true,
  },
  {
    id: 7,
    title: "This is very good product.",
    img: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600",
    colors: "gray",
    producer: "Samsung",
    price: "$542.42",
    createAt: "01-02-2024",
    inStock: true,
  },
  {
    id: 8,
    title: "This is very good product.",
    img: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600",
    colors: "gray",
    producer: "Samsung",
    price: "$542.42",
    createAt: "01-02-2024",
    inStock: true,
  },
];

// Single user Data
export const singleUserData = {
  profilePic:
    "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=600",
  name: "John Doe",
  username: "johndoe322",
  fullName: "John Doe",
  email: "johndoe32@gmail.com",
  phone: "+88 0175003324",
  status: "Verified",
};

export const singleActivityData = [
  {
    description: "John Doe purchased 5 Digital Edition",
    timeAgo: "3 days ago",
  },
  {
    description: "John Doe added 3 items to their wishlist",
    timeAgo: "1 week ago",
  },
  { description: "John Doe purchased a Sony camera", timeAgo: "2 weeks ago" },
  { description: "John Doe purchased a Digital pen", timeAgo: "2 weeks ago" },
  { description: "John Doe purchased a mobile phone", timeAgo: "1 month ago" },
  { description: "John Doe purchased a smart TV", timeAgo: "5 weeks ago" },
];

export const singleChartData = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

// Single user Product Data
export const singleProductData = {
  profilePic:
    "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
  name: "Sony Camera",
  Producer: "Sony",
  ProductId: "pro4e233",
  Color: "Black",
  Price: "$1200.00",
  Export: "Japan",
};
