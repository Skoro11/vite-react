export const products = [
  {
    id: 1,
    slug: "breed-dry-dog-food",
    image: "https://res.cloudinary.com/dvsuhy8uh/image/upload/v1741347629/dogFood_ksds31.png",
    stars: 5,
    name: "Breed Dry Dog Food",
    price: "$100",
    tag: "-40%", // Discounted tag
    numOfReviews: "35", // Number as string
    discountedPrice: "$140", // 40% increase
    description:
      "High-quality dry dog food specially formulated for specific breeds. Packed with essential nutrients to keep your pet healthy and strong.",
    category: "Pet Supplies",
    specialCategory: "Flash Sales", // Example of adding special category
  },
  {
    id: 2,
    slug: "canon-eos-dslr-camera",
    image: "Products/Camera.png",
    stars: 5,
    name: "CANON EOS DSLR Camera",
    price: "$360",
    numOfReviews: "95", // Number as string
    tag: "New", // No tag
    discountedPrice: "$380", // Price increased as there’s no discount
    description:
      "Capture stunning photos and videos with this versatile DSLR camera from Canon, offering excellent image quality and performance.",
    category: "Electronics",
    specialCategory: "Best Selling", // Example of adding special category
  },
  {
    id: 3,
    slug: "asus-fhd-gaming-laptop",
    image: "Products/Laptop.png",
    stars: 4,
    name: "ASUS FHD Gaming Laptop",
    price: "$700",
    numOfReviews: "325", // Number as string
    tag: "-30%", // Discounted tag
    discountedPrice: "$910", // 30% increase
    description:
      "Powerful gaming laptop with a Full HD display, high-end GPU, and fast processor to give you an immersive gaming experience.",
    category: "Electronics",
    specialCategory: "Flash Sales",
  },
  {
    id: 4,
    slug: "curology-product-set",
    image: "Products/Curology.png",
    stars: 5,
    name: "Curology Product Set",
    price: "$500",
    numOfReviews: "145", // Number as string
    tag: "-20%", // Discounted tag
    discountedPrice: "$600", // 20% increase
    description:
      "Customized skincare regimen designed for your unique needs. Helps with acne, wrinkles, and other skin concerns.",
    category: "Beauty & Skincare",
    specialCategory: "Explore", // Example of adding special category
  },
  {
    id: 5,
    slug: "kids-electric-car",
    image: "Products/Car.png",
    stars: 4,
    name: "Kids Electric Car",
    price: "$960",
    numOfReviews: "67", // Number as string
    tag: "-10%", // Discounted tag
    discountedPrice: "$1056", // 10% increase
    description:
      "A fun, battery-powered electric car for kids, offering hours of entertainment and outdoor play. Comes with safety features for peace of mind.",
    category: "Toys & Games",
    specialCategory: "Best Selling",
  },
  {
    id: 6,
    slug: "jr-zoom-soccer-cleats",
    image: "Products/Cleats.png",
    stars: 4,
    name: "Jr. Zoom Soccer Cleats",
    price: "$320",
    numOfReviews: "32", // Number as string
    tag: "", // No tag
    discountedPrice: "$350", // Price increased since there's no discount
    description:
      "High-performance soccer cleats designed for young athletes. Provides excellent traction and comfort for the best play on the field.",
    category: "Sports & Outdoors",
    specialCategory: "Explore",
  },
  {
    id: 7,
    slug: "gp11-shooter-usb-gamepad",
    image: "Products/Gamepad.png",
    stars: 4,
    name: "GP11 Shooter USB Gamepad",
    price: "$210",
    numOfReviews: "78", // Number as string
    tag: "-30%", // Discounted tag
    discountedPrice: "$273", // 30% increase
    description:
      "Ergonomic USB gamepad designed for shooter games. Offers precision controls and comfortable gameplay for hours of fun.",
    category: "Electronics",
    specialCategory: "Flash Sales",
  },
  {
    id: 8,
    slug: "quilted-satin-jacket",
    image: "Products/Quilted.png",
    stars: 5,
    name: "Quilted Satin Jacket",
    price: "$599",
    numOfReviews: "91", // Number as string
    tag: "", // No tag
    discountedPrice: "$629", // Price increased since there's no discount
    description:
      "Stylish quilted satin jacket that offers both warmth and luxury. Perfect for chilly evenings or adding a touch of elegance to your wardrobe.",
    category: "Fashion",
    specialCategory: "Explore",
  },
  {
    id: 9,
    slug: "product-a-bag",
    image: "Products/bag.png",
    stars: 3,
    name: "Gucci duffle bag",
    price: "$10",
    numOfReviews: "12", // Number as string
    discountedPrice: "$15", // Discounted price is higher
    tag: "-50%", // Discounted tag
    description:
      "A versatile and affordable bag that’s perfect for everyday use, offering ample space and durability.",
    category: "Accessories",
    specialCategory: "Best Selling",
  },
  {
    id: 10,
    slug: "product-d-jacket",
    image: "Products/jacket.png",
    stars: 4,
    name: "Quilted Satin Jacket",
    price: "$40",
    numOfReviews: "22", // Number as string
    discountedPrice: "$48", // Discounted price is higher
    tag: "-20%", // Discounted tag
    description:
      "Comfortable and stylish jacket perfect for cooler weather, offering a casual yet fashionable look.",
    category: "Fashion",
    specialCategory: "Explore",
  },
  {
    id: 11,
    slug: "product-e-monitor",
    image: "Products/monitor.png",
    stars: 4,
    name: "IPS LCD Gaming Monitor",
    price: "$50",
    numOfReviews: "58", // Number as string
    discountedPrice: "$65", // Discounted price is higher
    tag: "", // No tag
    description:
      "Affordable and compact monitor with great resolution, ideal for home offices or casual gaming setups.",
    category: "Electronics",
    specialCategory: "Flash Sales",
  },
  // New Products
  {
    id: 12,
    slug: "gaming-chair",
    image: "Products/chair.png",
    stars: 5,
    name: "Gaming Chair",
    price: "$120",
    numOfReviews: "42", // Number as string
    tag: "",
    discountedPrice: "$130", // Price increased since there's no discount
    description:
      "Ergonomic gaming chair designed for long hours of comfort and support. Adjustable and sleek, perfect for gaming or work.",
    category: "Furniture",
    specialCategory: "Flash Sales",
  },
  {
    id: 13,
    slug: "cooler",
    image: "Products/cooler.png",
    stars: 4,
    name: "RGB liquid CPU Cooler",
    price: "$89",
    numOfReviews: "55", // Number as string
    tag: "",
    discountedPrice: "$95", // Price increased since there's no discount
    description:
      "Portable cooler with spacious capacity to keep your drinks and snacks fresh on the go. Ideal for outdoor adventures.",
    category: "Outdoor Gear",
    specialCategory: "Best Selling",
  },
  {
    id: 14,
    slug: "flash-joystick",
    image: "Products/joystickFlash.png",
    stars: 4,
    name: "HAVIT HV-G92 Gamepad",
    price: "$50",
    numOfReviews: "38", // Number as string
    tag: "-15%", // Discounted tag
    discountedPrice: "$57.5", // 15% increase
    description:
      "A high-quality joystick for gaming enthusiasts, featuring responsive controls and smooth gameplay experience.",
    category: "Electronics",
    specialCategory: "Flash Sales",
  },
  {
    id: 15,
    slug: "mechanical-keyboard",
    image: "Products/keyboard.png",
    stars: 5,
    name: "AK-900 Wired Keyboard",
    price: "$95",
    numOfReviews: "105", // Number as string
    tag: "-10%", // Discounted tag
    discountedPrice: "$104.5", // 10% increase
    description:
      "A durable mechanical keyboard designed for fast typists and gamers, with customizable RGB lighting and responsive keys.",
    category: "Electronics",
    specialCategory: "Explore",
  },
  {
    id: 16,
    slug: "shelf",
    image: "Products/shelf.png",
    stars: 4,
    name: "Small BookSelf",
    price: "$70",
    numOfReviews: "27", // Number as string
    tag: "",
    discountedPrice: "$75", // Price increased since there's no discount
    description:
      "Stylish and functional wooden shelf perfect for any room, offering plenty of space for books, plants, or decor.",
    category: "Furniture",
    specialCategory: "Best Selling",
  },
];
