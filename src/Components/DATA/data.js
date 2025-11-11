// Using placeholder images from reliable sources that won't break
const PLACEHOLDER_IMAGES = {
  // Garments Images
  mensShirt: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
  mensTshirt: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
  mensHoodie: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
  mensJeans: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop",
  womensDress: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop",
  womensTop: "https://images.unsplash.com/photo-1583496661160-fb5886a13d77?w=400&h=400&fit=crop",
  womensSkirt: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop",
  kidsClothing: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=400&h=400&fit=crop",
  
  // Footwear Images
  mensShoes: "https://images.unsplash.com/photo-1542280756-74b2f55e73ab?w=400&h=400&fit=crop",
  womensShoes: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop",
  kidsShoes: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
  sportsShoes: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
  
  // Fabrics Images
  cottonFabric: "https://plus.unsplash.com/premium_photo-1675202428354-31b4d814df9d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1143",
  silkFabric: "https://images.unsplash.com/photo-1624516268152-1e48624026ed?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEZhYnJpY3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
  denimFabric: "https://images.unsplash.com/photo-1624516268152-1e48624026ed?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEZhYnJpY3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
  linenFabric: "https://images.unsplash.com/photo-1705250466297-90035b3a2b26?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEZhYnJpY3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
  
  // Home Textile Images
  bedsheet: "https://images.unsplash.com/photo-1705250466297-90035b3a2b26?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEZhYnJpY3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
  curtain: "https://images.unsplash.com/photo-1705250466297-90035b3a2b26?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEZhYnJpY3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
  pillow: "https://images.unsplash.com/photo-1705250466297-90035b3a2b26?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEZhYnJpY3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
  
  // Electronics Images
  ledLights: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
  homeAppliances: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=400&fit=crop",
  kitchenAppliances: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
  
  // Category images
  garmentsCategory: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
  footwearCategory: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop",
  fabricsCategory: "https://images.unsplash.com/photo-1705250466297-90035b3a2b26?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEZhYnJpY3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
  homeTextileCategory: "https://images.unsplash.com/photo-1552710307-537199cd41c0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEZhYnJpY3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
  electronicsCategory: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop",


  // TESTIMONIALS IMAGES
    avatar1 : "https://images.unsplash.com/photo-1696505523865-84c7c9372901?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    avatar2 :"https://plus.unsplash.com/premium_photo-1691784781482-9af9bce05096?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFzc3BvcnQlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    avatar3 :"https://images.unsplash.com/photo-1616002411355-49593fd89721?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFzc3BvcnQlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    avatar4 :"https://images.unsplash.com/photo-1594751684241-bcef815d5a57?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBhc3Nwb3J0JTIwcGhvdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
};

// Helper function to generate multiple products
const generateProducts = (baseProduct, count, variations) => {
  const products = [];
  for (let i = 1; i <= count; i++) {
    const variation = variations[i % variations.length];
    products.push({
      ...baseProduct,
      id: baseProduct.id * 100 + i,
      title: `${variation.prefix} ${baseProduct.title} ${variation.suffix}`.trim(),
      category: baseProduct.category,
      tags: [...baseProduct.tags, ...variation.tags],
      shortDescription: `${variation.description} ${baseProduct.shortDescription}`,
    });
  }
  return products;
};

// Product data organized by header categories with 10+ products each
const productData = {
  // Garments Category - 40+ products
  garments: {
    men: {
      shirts: [
        {
          id: 1,
          title: "Premium Cotton Formal Shirt",
          image: PLACEHOLDER_IMAGES.mensShirt,
          images: [PLACEHOLDER_IMAGES.mensShirt, PLACEHOLDER_IMAGES.mensShirt],
          alt: "Premium Cotton Formal Shirt",
          shortDescription: "High-quality cotton formal shirt for professional wear",
          description: "This premium cotton formal shirt is crafted from 100% Egyptian cotton with superior stitching and elegant design. Perfect for office wear and formal occasions.",
          specifications: {
            Material: "100% Egyptian Cotton",
            Style: "Formal",
            CareInstructions: "Machine wash cold",
            Size: "S, M, L, XL, XXL",
            Color: "White, Blue, Light Pink",
            Quality: "Export Grade A"
          },
          availability: "In Stock",
          category: "garments-men-shirts",
          tags: ["Formal", "Premium", "Cotton", "Office Wear", "Shirts"]
        },
        {
          id: 2,
          title: "Designer Casual Shirt",
          image: PLACEHOLDER_IMAGES.mensShirt,
          images: [PLACEHOLDER_IMAGES.mensShirt, PLACEHOLDER_IMAGES.mensShirt],
          alt: "Designer Casual Shirt",
          shortDescription: "Trendy casual shirt for everyday wear",
          description: "Comfortable and stylish casual shirt made from breathable fabric with modern patterns and designs.",
          specifications: {
            Material: "Cotton Blend",
            Style: "Casual",
            CareInstructions: "Machine wash",
            Size: "S, M, L, XL",
            Color: "Multiple colors available",
            Quality: "Export Grade A"
          },
          availability: "In Stock",
          category: "garments-men-shirts",
          tags: ["Casual", "Designer", "Comfort", "Trendy", "Shirts"]
        },
        {
          id: 3,
          title: "Linen Summer Shirt",
          image: PLACEHOLDER_IMAGES.mensShirt,
          images: [PLACEHOLDER_IMAGES.mensShirt, PLACEHOLDER_IMAGES.mensShirt],
          alt: "Linen Summer Shirt",
          shortDescription: "Lightweight linen shirt perfect for summer",
          description: "Breathable linen shirt that keeps you cool in hot weather while maintaining a stylish appearance.",
          specifications: {
            Material: "100% Linen",
            Style: "Casual",
            CareInstructions: "Dry clean recommended",
            Size: "S, M, L, XL",
            Color: "Beige, White, Blue",
            Quality: "Export Grade A"
          },
          availability: "In Stock",
          category: "garments-men-shirts",
          tags: ["Summer", "Linen", "Breathable", "Lightweight", "Shirts"]
        },
        {
          id: 4,
          title: "Classic Oxford Shirt",
          image: PLACEHOLDER_IMAGES.mensShirt,
          images: [PLACEHOLDER_IMAGES.mensShirt, PLACEHOLDER_IMAGES.mensShirt],
          alt: "Classic Oxford Shirt",
          shortDescription: "Timeless Oxford shirt for formal occasions",
          description: "Classic Oxford shirt with button-down collar, perfect for business casual and formal events.",
          specifications: {
            Material: "100% Cotton Oxford",
            Style: "Formal",
            CareInstructions: "Machine wash",
            Size: "S, M, L, XL, XXL",
            Color: "White, Blue, Pink",
            Quality: "Export Grade A"
          },
          availability: "In Stock",
          category: "garments-men-shirts",
          tags: ["Oxford", "Classic", "Formal", "Business", "Shirts"]
        },
        {
          id: 5,
          title: "Striped Business Shirt",
          image: PLACEHOLDER_IMAGES.mensShirt,
          images: [PLACEHOLDER_IMAGES.mensShirt, PLACEHOLDER_IMAGES.mensShirt],
          alt: "Striped Business Shirt",
          shortDescription: "Elegant striped shirt for professional settings",
          description: "Sophisticated striped business shirt with fine detailing and premium finish.",
          specifications: {
            Material: "Cotton Poplin",
            Style: "Business Formal",
            CareInstructions: "Dry clean",
            Size: "S, M, L, XL",
            Color: "Blue Stripes, Gray Stripes",
            Quality: "Export Grade A"
          },
          availability: "In Stock",
          category: "garments-men-shirts",
          tags: ["Striped", "Business", "Professional", "Elegant", "Shirts"]
        },
        {
          id: 6,
          title: "Denim Casual Shirt",
          image: PLACEHOLDER_IMAGES.mensShirt,
          images: [PLACEHOLDER_IMAGES.mensShirt, PLACEHOLDER_IMAGES.mensShirt],
          alt: "Denim Casual Shirt",
          shortDescription: "Rugged denim shirt for casual outings",
          description: "Durable denim shirt with comfortable fit, perfect for casual weekends and outdoor activities.",
          specifications: {
            Material: "100% Cotton Denim",
            Style: "Casual",
            CareInstructions: "Machine wash",
            Size: "S, M, L, XL, XXL",
            Color: "Blue Denim, Black Denim",
            Quality: "Export Grade A"
          },
          availability: "In Stock",
          category: "garments-men-shirts",
          tags: ["Denim", "Casual", "Rugged", "Durable", "Shirts"]
        },
        {
          id: 7,
          title: "Silk Blend Luxury Shirt",
          image: PLACEHOLDER_IMAGES.mensShirt,
          images: [PLACEHOLDER_IMAGES.mensShirt, PLACEHOLDER_IMAGES.mensShirt],
          alt: "Silk Blend Luxury Shirt",
          shortDescription: "Premium silk blend shirt for special occasions",
          description: "Luxurious silk blend shirt with exceptional comfort and sophisticated appearance.",
          specifications: {
            Material: "Silk-Cotton Blend",
            Style: "Luxury Formal",
            CareInstructions: "Dry clean only",
            Size: "S, M, L, XL",
            Color: "Ivory, Champagne, Navy",
            Quality: "Export Grade A+"
          },
          availability: "In Stock",
          category: "garments-men-shirts",
          tags: ["Silk", "Luxury", "Premium", "Special Occasion", "Shirts"]
        },
        {
          id: 8,
          title: "Checkered Flannel Shirt",
          image: PLACEHOLDER_IMAGES.mensShirt,
          images: [PLACEHOLDER_IMAGES.mensShirt, PLACEHOLDER_IMAGES.mensShirt],
          alt: "Checkered Flannel Shirt",
          shortDescription: "Warm flannel shirt with checkered pattern",
          description: "Comfortable flannel shirt perfect for cold weather with classic checkered designs.",
          specifications: {
            Material: "100% Cotton Flannel",
            Style: "Casual",
            CareInstructions: "Machine wash",
            Size: "S, M, L, XL, XXL",
            Color: "Red Check, Black Check, Blue Check",
            Quality: "Export Grade A"
          },
          availability: "In Stock",
          category: "garments-men-shirts",
          tags: ["Flannel", "Checkered", "Warm", "Winter", "Shirts"]
        },
        {
          id: 9,
          title: "Slim Fit Dress Shirt",
          image: PLACEHOLDER_IMAGES.mensShirt,
          images: [PLACEHOLDER_IMAGES.mensShirt, PLACEHOLDER_IMAGES.mensShirt],
          alt: "Slim Fit Dress Shirt",
          shortDescription: "Modern slim fit dress shirt",
          description: "Contemporary slim fit dress shirt tailored for modern fashion preferences.",
          specifications: {
            Material: "Cotton Twill",
            Style: "Slim Fit Formal",
            CareInstructions: "Machine wash cold",
            Size: "S, M, L, XL",
            Color: "White, Light Blue, Lavender",
            Quality: "Export Grade A"
          },
          availability: "In Stock",
          category: "garments-men-shirts",
          tags: ["Slim Fit", "Modern", "Dress Shirt", "Contemporary", "Shirts"]
        },
        {
          id: 10,
          title: "Short Sleeve Summer Shirt",
          image: PLACEHOLDER_IMAGES.mensShirt,
          images: [PLACEHOLDER_IMAGES.mensShirt, PLACEHOLDER_IMAGES.mensShirt],
          alt: "Short Sleeve Summer Shirt",
          shortDescription: "Comfortable short sleeve shirt for summer",
          description: "Lightweight short sleeve shirt perfect for hot summer days and casual outings.",
          specifications: {
            Material: "Linen-Cotton Blend",
            Style: "Casual",
            CareInstructions: "Machine wash",
            Size: "S, M, L, XL, XXL",
            Color: "Multiple summer colors",
            Quality: "Export Grade A"
          },
          availability: "In Stock",
          category: "garments-men-shirts",
          tags: ["Short Sleeve", "Summer", "Lightweight", "Casual", "Shirts"]
        }
      ],
      tshirts: [
        {
          id: 11,
          title: "Premium Cotton T-Shirt Pack",
          image: PLACEHOLDER_IMAGES.mensTshirt,
          images: [PLACEHOLDER_IMAGES.mensTshirt, PLACEHOLDER_IMAGES.mensTshirt],
          alt: "Premium Cotton T-Shirt Pack",
          shortDescription: "3-pack of high-quality cotton t-shirts",
          description: "Comfortable and durable cotton t-shirts perfect for daily wear. Made from premium quality fabric.",
          specifications: {
            Material: "100% Cotton",
            Style: "Casual",
            CareInstructions: "Machine wash",
            Size: "S, M, L, XL, XXL",
            Color: "Black, White, Gray",
            Quality: "Export Grade A"
          },
          availability: "In Stock",
          category: "garments-men-tshirts",
          tags: ["Cotton", "Comfort", "Daily Wear", "Pack", "T-shirts"]
        },
        {
          id: 12,
          title: "Graphic Print T-Shirt",
          image: PLACEHOLDER_IMAGES.mensTshirt,
          images: [PLACEHOLDER_IMAGES.mensTshirt, PLACEHOLDER_IMAGES.mensTshirt],
          alt: "Graphic Print T-Shirt",
          shortDescription: "Trendy graphic print t-shirt for casual wear",
          description: "Fashionable t-shirt with unique graphic prints, perfect for casual outings and social events.",
          specifications: {
            Material: "Cotton Blend",
            Style: "Casual",
            CareInstructions: "Machine wash inside out",
            Size: "S, M, L, XL",
            Color: "Multiple colors with prints",
            Quality: "Export Grade A"
          },
          availability: "In Stock",
          category: "garments-men-tshirts",
          tags: ["Graphic", "Trendy", "Fashion", "Print", "T-shirts"]
        },
        // Additional t-shirts to reach 10+
        {
          id: 13,
          title: "V-Neck Cotton T-Shirt",
          image: PLACEHOLDER_IMAGES.mensTshirt,
          images: [PLACEHOLDER_IMAGES.mensTshirt, PLACEHOLDER_IMAGES.mensTshirt],
          alt: "V-Neck Cotton T-Shirt",
          shortDescription: "Comfortable V-neck t-shirt for casual style",
          description: "Soft V-neck t-shirt that offers comfort and style for everyday casual wear.",
          specifications: {
            Material: "100% Cotton Jersey",
            Style: "Casual",
            CareInstructions: "Machine wash",
            Size: "S, M, L, XL",
            Color: "Black, White, Navy, Gray",
            Quality: "Export Grade A"
          },
          availability: "In Stock",
          category: "garments-men-tshirts",
          tags: ["V-Neck", "Casual", "Comfort", "Jersey", "T-shirts"]
        },
        {
          id: 14,
          title: "Polo T-Shirt Classic",
          image: PLACEHOLDER_IMAGES.mensTshirt,
          images: [PLACEHOLDER_IMAGES.mensTshirt, PLACEHOLDER_IMAGES.mensTshirt],
          alt: "Polo T-Shirt Classic",
          shortDescription: "Classic polo t-shirt for smart casual look",
          description: "Timeless polo t-shirt that bridges the gap between casual and formal wear.",
          specifications: {
            Material: "Cotton Piqué",
            Style: "Smart Casual",
            CareInstructions: "Machine wash",
            Size: "S, M, L, XL, XXL",
            Color: "Multiple classic colors",
            Quality: "Export Grade A"
          },
          availability: "In Stock",
          category: "garments-men-tshirts",
          tags: ["Polo", "Classic", "Smart Casual", "Piqué", "T-shirts"]
        },
        {
          id: 15,
          title: "Organic Cotton T-Shirt",
          image: PLACEHOLDER_IMAGES.mensTshirt,
          images: [PLACEHOLDER_IMAGES.mensTshirt, PLACEHOLDER_IMAGES.mensTshirt],
          alt: "Organic Cotton T-Shirt",
          shortDescription: "Eco-friendly organic cotton t-shirt",
          description: "Sustainable organic cotton t-shirt for environmentally conscious consumers.",
          specifications: {
            Material: "100% Organic Cotton",
            Style: "Casual",
            CareInstructions: "Machine wash cold",
            Size: "S, M, L, XL",
            Color: "Natural colors",
            Quality: "Eco Grade A"
          },
          availability: "In Stock",
          category: "garments-men-tshirts",
          tags: ["Organic", "Eco-friendly", "Sustainable", "Natural", "T-shirts"]
        },
        {
          id: 16,
          title: "Performance Sport T-Shirt",
          image: PLACEHOLDER_IMAGES.mensTshirt,
          images: [PLACEHOLDER_IMAGES.mensTshirt, PLACEHOLDER_IMAGES.mensTshirt],
          alt: "Performance Sport T-Shirt",
          shortDescription: "Moisture-wicking sport t-shirt",
          description: "High-performance sport t-shirt with moisture-wicking technology for active lifestyle.",
          specifications: {
            Material: "Polyester-Spandex Blend",
            Style: "Sports",
            CareInstructions: "Machine wash",
            Size: "S, M, L, XL, XXL",
            Color: "Sport colors",
            Quality: "Performance Grade"
          },
          availability: "In Stock",
          category: "garments-men-tshirts",
          tags: ["Sport", "Performance", "Moisture-wicking", "Active", "T-shirts"]
        },
        {
          id: 17,
          title: "Oversized Fashion T-Shirt",
          image: PLACEHOLDER_IMAGES.mensTshirt,
          images: [PLACEHOLDER_IMAGES.mensTshirt, PLACEHOLDER_IMAGES.mensTshirt],
          alt: "Oversized Fashion T-Shirt",
          shortDescription: "Trendy oversized t-shirt for street style",
          description: "Fashion-forward oversized t-shirt perfect for contemporary street style looks.",
          specifications: {
            Material: "Cotton Blend",
            Style: "Street Fashion",
            CareInstructions: "Machine wash",
            Size: "Oversized S-XXL",
            Color: "Fashion colors",
            Quality: "Fashion Grade A"
          },
          availability: "In Stock",
          category: "garments-men-tshirts",
          tags: ["Oversized", "Fashion", "Street Style", "Trendy", "T-shirts"]
        },
        {
          id: 18,
          title: "Long Sleeve Basic T-Shirt",
          image: PLACEHOLDER_IMAGES.mensTshirt,
          images: [PLACEHOLDER_IMAGES.mensTshirt, PLACEHOLDER_IMAGES.mensTshirt],
          alt: "Long Sleeve Basic T-Shirt",
          shortDescription: "Essential long sleeve t-shirt",
          description: "Versatile long sleeve t-shirt perfect for layering or wearing alone in cooler weather.",
          specifications: {
            Material: "100% Cotton",
            Style: "Casual",
            CareInstructions: "Machine wash",
            Size: "S, M, L, XL",
            Color: "Basic colors",
            Quality: "Export Grade A"
          },
          availability: "In Stock",
          category: "garments-men-tshirts",
          tags: ["Long Sleeve", "Basic", "Essential", "Layering", "T-shirts"]
        },
        {
          id: 19,
          title: "Ringer T-Shirt Vintage",
          image: PLACEHOLDER_IMAGES.mensTshirt,
          images: [PLACEHOLDER_IMAGES.mensTshirt, PLACEHOLDER_IMAGES.mensTshirt],
          alt: "Ringer T-Shirt Vintage",
          shortDescription: "Vintage style ringer t-shirt",
          description: "Retro-inspired ringer t-shirt with contrasting sleeve and neckline trim.",
          specifications: {
            Material: "100% Cotton",
            Style: "Vintage Casual",
            CareInstructions: "Machine wash",
            Size: "S, M, L, XL",
            Color: "Vintage color combinations",
            Quality: "Export Grade A"
          },
          availability: "In Stock",
          category: "garments-men-tshirts",
          tags: ["Ringer", "Vintage", "Retro", "Contrast", "T-shirts"]
        },
        {
          id: 20,
          title: "Henley Neck T-Shirt",
          image: PLACEHOLDER_IMAGES.mensTshirt,
          images: [PLACEHOLDER_IMAGES.mensTshirt, PLACEHOLDER_IMAGES.mensTshirt],
          alt: "Henley Neck T-Shirt",
          shortDescription: "Stylish henley neck t-shirt",
          description: "Fashionable henley neck t-shirt with button placket for a sophisticated casual look.",
          specifications: {
            Material: "Cotton Blend",
            Style: "Casual",
            CareInstructions: "Machine wash",
            Size: "S, M, L, XL, XXL",
            Color: "Various colors",
            Quality: "Export Grade A"
          },
          availability: "In Stock",
          category: "garments-men-tshirts",
          tags: ["Henley", "Button Placket", "Stylish", "Casual", "T-shirts"]
        }
      ],
      hoodies: [
        {
          id: 21,
          title: "Premium Zip Hoodie",
          image: PLACEHOLDER_IMAGES.mensHoodie,
          images: [PLACEHOLDER_IMAGES.mensHoodie, PLACEHOLDER_IMAGES.mensHoodie],
          alt: "Premium Zip Hoodie",
          shortDescription: "Comfortable zip-up hoodie for casual wear",
          description: "Warm and comfortable hoodie with front zip, perfect for casual outings and cool weather.",
          specifications: {
            Material: "Cotton-Polyester Blend",
            Style: "Casual",
            CareInstructions: "Machine wash",
            Size: "S, M, L, XL, XXL",
            Color: "Black, Gray, Navy, Burgundy",
            Quality: "Export Grade A"
          },
          availability: "In Stock",
          category: "garments-men-hoodies",
          tags: ["Hoodie", "Comfort", "Warm", "Casual", "Zip-up"]
        },
        // Additional hoodies to reach 10+
        {
          id: 22,
          title: "Pullover Hoodie Classic",
          image: PLACEHOLDER_IMAGES.mensHoodie,
          images: [PLACEHOLDER_IMAGES.mensHoodie, PLACEHOLDER_IMAGES.mensHoodie],
          alt: "Pullover Hoodie Classic",
          shortDescription: "Classic pullover hoodie for everyday comfort",
          description: "Traditional pullover hoodie with front pocket, perfect for lounging and casual wear.",
          specifications: {
            Material: "Fleece Cotton Blend",
            Style: "Casual",
            CareInstructions: "Machine wash",
            Size: "S, M, L, XL, XXL",
            Color: "Heather Gray, Navy, Black",
            Quality: "Export Grade A"
          },
          availability: "In Stock",
          category: "garments-men-hoodies",
          tags: ["Pullover", "Classic", "Fleece", "Comfort", "Hoodies"]
        },
        {
          id: 23,
          title: "Sports Performance Hoodie",
          image: PLACEHOLDER_IMAGES.mensHoodie,
          images: [PLACEHOLDER_IMAGES.mensHoodie, PLACEHOLDER_IMAGES.mensHoodie],
          alt: "Sports Performance Hoodie",
          shortDescription: "Athletic hoodie for sports and training",
          description: "Performance-oriented hoodie with moisture-wicking fabric for sports activities.",
          specifications: {
            Material: "Polyester-Spandex Blend",
            Style: "Sports",
            CareInstructions: "Machine wash",
            Size: "S, M, L, XL",
            Color: "Sport colors",
            Quality: "Performance Grade"
          },
          availability: "In Stock",
          category: "garments-men-hoodies",
          tags: ["Sports", "Performance", "Athletic", "Training", "Hoodies"]
        },
        {
          id: 24,
          title: "Designer Graphic Hoodie",
          image: PLACEHOLDER_IMAGES.mensHoodie,
          images: [PLACEHOLDER_IMAGES.mensHoodie, PLACEHOLDER_IMAGES.mensHoodie],
          alt: "Designer Graphic Hoodie",
          shortDescription: "Fashion hoodie with designer graphics",
          description: "Street-style hoodie featuring unique designer graphics and premium construction.",
          specifications: {
            Material: "Premium Cotton Blend",
            Style: "Street Fashion",
            CareInstructions: "Machine wash inside out",
            Size: "S, M, L, XL",
            Color: "Fashion colors with prints",
            Quality: "Designer Grade"
          },
          availability: "In Stock",
          category: "garments-men-hoodies",
          tags: ["Designer", "Graphic", "Street Style", "Fashion", "Hoodies"]
        },
        {
          id: 25,
          title: "Lightweight Summer Hoodie",
          image: PLACEHOLDER_IMAGES.mensHoodie,
          images: [PLACEHOLDER_IMAGES.mensHoodie, PLACEHOLDER_IMAGES.mensHoodie],
          alt: "Lightweight Summer Hoodie",
          shortDescription: "Light hoodie for summer evenings",
          description: "Lightweight hoodie perfect for cool summer evenings and air-conditioned environments.",
          specifications: {
            Material: "Light Cotton Blend",
            Style: "Casual",
            CareInstructions: "Machine wash",
            Size: "S, M, L, XL",
            Color: "Pastel colors",
            Quality: "Export Grade A"
          },
          availability: "In Stock",
          category: "garments-men-hoodies",
          tags: ["Lightweight", "Summer", "Evening", "Comfort", "Hoodies"]
        },
        {
          id: 26,
          title: "Heavyweight Winter Hoodie",
          image: PLACEHOLDER_IMAGES.mensHoodie,
          images: [PLACEHOLDER_IMAGES.mensHoodie, PLACEHOLDER_IMAGES.mensHoodie],
          alt: "Heavyweight Winter Hoodie",
          shortDescription: "Warm hoodie for cold winter days",
          description: "Heavyweight hoodie with thick fleece lining for maximum warmth in winter conditions.",
          specifications: {
            Material: "Heavy Cotton Fleece",
            Style: "Winter Casual",
            CareInstructions: "Machine wash",
            Size: "S, M, L, XL, XXL",
            Color: "Winter colors",
            Quality: "Export Grade A"
          },
          availability: "In Stock",
          category: "garments-men-hoodies",
          tags: ["Heavyweight", "Winter", "Warm", "Fleece", "Hoodies"]
        },
        {
          id: 27,
          title: "Organic Cotton Hoodie",
          image: PLACEHOLDER_IMAGES.mensHoodie,
          images: [PLACEHOLDER_IMAGES.mensHoodie, PLACEHOLDER_IMAGES.mensHoodie],
          alt: "Organic Cotton Hoodie",
          shortDescription: "Eco-friendly organic cotton hoodie",
          description: "Sustainable hoodie made from 100% organic cotton for environmentally conscious consumers.",
          specifications: {
            Material: "100% Organic Cotton",
            Style: "Eco Casual",
            CareInstructions: "Machine wash cold",
            Size: "S, M, L, XL",
            Color: "Natural dyes",
            Quality: "Eco Grade A"
          },
          availability: "In Stock",
          category: "garments-men-hoodies",
          tags: ["Organic", "Eco-friendly", "Sustainable", "Natural", "Hoodies"]
        },
        {
          id: 28,
          title: "Vintage Washed Hoodie",
          image: PLACEHOLDER_IMAGES.mensHoodie,
          images: [PLACEHOLDER_IMAGES.mensHoodie, PLACEHOLDER_IMAGES.mensHoodie],
          alt: "Vintage Washed Hoodie",
          shortDescription: "Vintage style washed hoodie",
          description: "Hoodie with vintage wash treatment for a worn-in, comfortable feel and retro appearance.",
          specifications: {
            Material: "Cotton Blend",
            Style: "Vintage Casual",
            CareInstructions: "Machine wash",
            Size: "S, M, L, XL",
            Color: "Vintage wash colors",
            Quality: "Export Grade A"
          },
          availability: "In Stock",
          category: "garments-men-hoodies",
          tags: ["Vintage", "Washed", "Retro", "Comfort", "Hoodies"]
        },
        {
          id: 29,
          title: "Tech Fleece Hoodie",
          image: PLACEHOLDER_IMAGES.mensHoodie,
          images: [PLACEHOLDER_IMAGES.mensHoodie, PLACEHOLDER_IMAGES.mensHoodie],
          alt: "Tech Fleece Hoodie",
          shortDescription: "Advanced technology fleece hoodie",
          description: "Hoodie made with advanced technical fleece for superior warmth-to-weight ratio.",
          specifications: {
            Material: "Technical Fleece",
            Style: "Tech Casual",
            CareInstructions: "Machine wash",
            Size: "S, M, L, XL",
            Color: "Tech colors",
            Quality: "Technical Grade"
          },
          availability: "In Stock",
          category: "garments-men-hoodies",
          tags: ["Tech", "Fleece", "Advanced", "Performance", "Hoodies"]
        },
        {
          id: 30,
          title: "Oversized Fashion Hoodie",
          image: PLACEHOLDER_IMAGES.mensHoodie,
          images: [PLACEHOLDER_IMAGES.mensHoodie, PLACEHOLDER_IMAGES.mensHoodie],
          alt: "Oversized Fashion Hoodie",
          shortDescription: "Trendy oversized hoodie for streetwear",
          description: "Fashion-forward oversized hoodie perfect for contemporary streetwear ensembles.",
          specifications: {
            Material: "Cotton Blend",
            Style: "Street Fashion",
            CareInstructions: "Machine wash",
            Size: "Oversized S-XXL",
            Color: "Fashion colors",
            Quality: "Fashion Grade A"
          },
          availability: "In Stock",
          category: "garments-men-hoodies",
          tags: ["Oversized", "Fashion", "Streetwear", "Trendy", "Hoodies"]
        }
      ],
      jeans: [
        {
          id: 31,
          title: "Slim Fit Denim Jeans",
          image: PLACEHOLDER_IMAGES.mensJeans,
          images: [PLACEHOLDER_IMAGES.mensJeans, PLACEHOLDER_IMAGES.mensJeans],
          alt: "Slim Fit Denim Jeans",
          shortDescription: "Modern slim fit denim jeans",
          description: "Stylish slim fit jeans made from premium denim with excellent durability and comfort.",
          specifications: {
            Material: "100% Cotton Denim",
            Style: "Slim Fit",
            CareInstructions: "Machine wash",
            Size: "28-40 waist",
            Color: "Blue, Black, Gray",
            Quality: "Export Grade A"
          },
          availability: "In Stock",
          category: "garments-men-jeans",
          tags: ["Denim", "Slim Fit", "Modern", "Durable", "Jeans"]
        },
        // Additional jeans to reach 10+
        {
          id: 32,
          title: "Regular Fit Classic Jeans",
          image: PLACEHOLDER_IMAGES.mensJeans,
          images: [PLACEHOLDER_IMAGES.mensJeans, PLACEHOLDER_IMAGES.mensJeans],
          alt: "Regular Fit Classic Jeans",
          shortDescription: "Classic regular fit denim jeans",
          description: "Timeless regular fit jeans offering comfort and traditional denim style.",
          specifications: {
            Material: "100% Cotton Denim",
            Style: "Regular Fit",
            CareInstructions: "Machine wash",
            Size: "28-42 waist",
            Color: "Classic denim colors",
            Quality: "Export Grade A"
          },
          availability: "In Stock",
          category: "garments-men-jeans",
          tags: ["Regular Fit", "Classic", "Traditional", "Comfort", "Jeans"]
        },
        {
          id: 33,
          title: "Skinny Fit Stretch Jeans",
          image: PLACEHOLDER_IMAGES.mensJeans,
          images: [PLACEHOLDER_IMAGES.mensJeans, PLACEHOLDER_IMAGES.mensJeans],
          alt: "Skinny Fit Stretch Jeans",
          shortDescription: "Comfortable skinny fit stretch jeans",
          description: "Modern skinny fit jeans with stretch technology for enhanced comfort and mobility.",
          specifications: {
            Material: "Cotton-Elastane Blend",
            Style: "Skinny Fit",
            CareInstructions: "Machine wash cold",
            Size: "28-38 waist",
            Color: "Various colors",
            Quality: "Export Grade A"
          },
          availability: "In Stock",
          category: "garments-men-jeans",
          tags: ["Skinny Fit", "Stretch", "Modern", "Comfort", "Jeans"]
        },
        {
          id: 34,
          title: "Relaxed Fit Comfort Jeans",
          image: PLACEHOLDER_IMAGES.mensJeans,
          images: [PLACEHOLDER_IMAGES.mensJeans, PLACEHOLDER_IMAGES.mensJeans],
          alt: "Relaxed Fit Comfort Jeans",
          shortDescription: "Comfortable relaxed fit jeans",
          description: "Easy-going relaxed fit jeans perfect for casual wear and all-day comfort.",
          specifications: {
            Material: "Soft Denim Blend",
            Style: "Relaxed Fit",
            CareInstructions: "Machine wash",
            Size: "30-44 waist",
            Color: "Comfort colors",
            Quality: "Export Grade A"
          },
          availability: "In Stock",
          category: "garments-men-jeans",
          tags: ["Relaxed Fit", "Comfort", "Casual", "Easy-going", "Jeans"]
        },
        {
          id: 35,
          title: "Raw Denim Selvedge Jeans",
          image: PLACEHOLDER_IMAGES.mensJeans,
          images: [PLACEHOLDER_IMAGES.mensJeans, PLACEHOLDER_IMAGES.mensJeans],
          alt: "Raw Denim Selvedge Jeans",
          shortDescription: "Premium raw selvedge denim jeans",
          description: "High-quality raw selvedge denim jeans that develop unique character with wear.",
          specifications: {
            Material: "100% Raw Selvedge Denim",
            Style: "Straight Fit",
            CareInstructions: "Special care required",
            Size: "28-36 waist",
            Color: "Raw indigo",
            Quality: "Premium Grade"
          },
          availability: "In Stock",
          category: "garments-men-jeans",
          tags: ["Raw Denim", "Selvedge", "Premium", "Heritage", "Jeans"]
        },
        {
          id: 36,
          title: "Distressed Designer Jeans",
          image: PLACEHOLDER_IMAGES.mensJeans,
          images: [PLACEHOLDER_IMAGES.mensJeans, PLACEHOLDER_IMAGES.mensJeans],
          alt: "Distressed Designer Jeans",
          shortDescription: "Fashionable distressed denim jeans",
          description: "Designer jeans with artistic distressing and unique wash treatments for fashion-forward looks.",
          specifications: {
            Material: "Denim Blend",
            Style: "Slim Fit",
            CareInstructions: "Machine wash inside out",
            Size: "28-38 waist",
            Color: "Distressed finishes",
            Quality: "Designer Grade"
          },
          availability: "In Stock",
          category: "garments-men-jeans",
          tags: ["Distressed", "Designer", "Fashion", "Artistic", "Jeans"]
        },
        {
          id: 37,
          title: "Bootcut Denim Jeans",
          image: PLACEHOLDER_IMAGES.mensJeans,
          images: [PLACEHOLDER_IMAGES.mensJeans, PLACEHOLDER_IMAGES.mensJeans],
          alt: "Bootcut Denim Jeans",
          shortDescription: "Classic bootcut style jeans",
          description: "Traditional bootcut jeans that flare slightly at the bottom to accommodate boots.",
          specifications: {
            Material: "100% Cotton Denim",
            Style: "Bootcut",
            CareInstructions: "Machine wash",
            Size: "30-40 waist",
            Color: "Classic denim",
            Quality: "Export Grade A"
          },
          availability: "In Stock",
          category: "garments-men-jeans",
          tags: ["Bootcut", "Classic", "Traditional", "Western", "Jeans"]
        },
        {
          id: 38,
          title: "Carpenter Work Jeans",
          image: PLACEHOLDER_IMAGES.mensJeans,
          images: [PLACEHOLDER_IMAGES.mensJeans, PLACEHOLDER_IMAGES.mensJeans],
          alt: "Carpenter Work Jeans",
          shortDescription: "Durable carpenter style work jeans",
          description: "Rugged work jeans with reinforced stitching and utility pockets for practical use.",
          specifications: {
            Material: "Heavy Denim",
            Style: "Relaxed Fit",
            CareInstructions: "Machine wash",
            Size: "30-42 waist",
            Color: "Work denim colors",
            Quality: "Work Grade"
          },
          availability: "In Stock",
          category: "garments-men-jeans",
          tags: ["Carpenter", "Work", "Durable", "Utility", "Jeans"]
        },
        {
          id: 39,
          title: "Light Wash Summer Jeans",
          image: PLACEHOLDER_IMAGES.mensJeans,
          images: [PLACEHOLDER_IMAGES.mensJeans, PLACEHOLDER_IMAGES.mensJeans],
          alt: "Light Wash Summer Jeans",
          shortDescription: "Lightweight summer denim jeans",
          description: "Light wash jeans made from lighter denim perfect for summer weather and casual outings.",
          specifications: {
            Material: "Light Denim",
            Style: "Slim Fit",
            CareInstructions: "Machine wash",
            Size: "28-38 waist",
            Color: "Light wash colors",
            Quality: "Export Grade A"
          },
          availability: "In Stock",
          category: "garments-men-jeans",
          tags: ["Light Wash", "Summer", "Lightweight", "Casual", "Jeans"]
        },
        {
          id: 40,
          title: "Black Denim Jeans",
          image: PLACEHOLDER_IMAGES.mensJeans,
          images: [PLACEHOLDER_IMAGES.mensJeans, PLACEHOLDER_IMAGES.mensJeans],
          alt: "Black Denim Jeans",
          shortDescription: "Versatile black denim jeans",
          description: "Sophisticated black denim jeans that can be dressed up or down for various occasions.",
          specifications: {
            Material: "Black Denim",
            Style: "Slim Fit",
            CareInstructions: "Machine wash separately",
            Size: "28-38 waist",
            Color: "Black",
            Quality: "Export Grade A"
          },
          availability: "In Stock",
          category: "garments-men-jeans",
          tags: ["Black", "Versatile", "Sophisticated", "Dressy", "Jeans"]
        }
      ]
    },
    women: {
      tops: [
        {
          id: 41,
          title: "Elegant Women's Blouse",
          image: PLACEHOLDER_IMAGES.womensTop,
          images: [PLACEHOLDER_IMAGES.womensTop, PLACEHOLDER_IMAGES.womensTop],
          alt: "Elegant Women's Blouse",
          shortDescription: "Beautiful blouse for formal and casual wear",
          description: "Elegant women's blouse with delicate designs and premium fabric quality.",
          specifications: {
            Material: "Silk Blend",
            Style: "Formal/Casual",
            CareInstructions: "Dry clean",
            Size: "XS, S, M, L, XL",
            Color: "White, Black, Navy, Pastels",
            Quality: "Export Grade A"
          },
          availability: "In Stock",
          category: "garments-women-tops",
          tags: ["Elegant", "Blouse", "Premium", "Versatile", "Tops"]
        },
        // Additional women's tops to reach 10+
        {
          id: 42,
          title: "Silk Camisole Top",
          image: PLACEHOLDER_IMAGES.womensTop,
          images: [PLACEHOLDER_IMAGES.womensTop, PLACEHOLDER_IMAGES.womensTop],
          alt: "Silk Camisole Top",
          shortDescription: "Luxurious silk camisole for layering",
          description: "Delicate silk camisole top perfect for layering or wearing as elegant innerwear.",
          specifications: {
            Material: "100% Silk",
            Style: "Lingerie/Casual",
            CareInstructions: "Hand wash",
            Size: "XS, S, M, L",
            Color: "Neutral colors",
            Quality: "Luxury Grade"
          },
          availability: "In Stock",
          category: "garments-women-tops",
          tags: ["Silk", "Camisole", "Luxurious", "Layering", "Tops"]
        },
        {
          id: 43,
          title: "Off-Shoulder Blouse",
          image: PLACEHOLDER_IMAGES.womensTop,
          images: [PLACEHOLDER_IMAGES.womensTop, PLACEHOLDER_IMAGES.womensTop],
          alt: "Off-Shoulder Blouse",
          shortDescription: "Fashionable off-shoulder top",
          description: "Trendy off-shoulder blouse perfect for summer parties and casual outings.",
          specifications: {
            Material: "Cotton Blend",
            Style: "Fashion Casual",
            CareInstructions: "Machine wash",
            Size: "XS, S, M, L",
            Color: "Summer colors",
            Quality: "Fashion Grade"
          },
          availability: "In Stock",
          category: "garments-women-tops",
          tags: ["Off-Shoulder", "Fashionable", "Summer", "Party", "Tops"]
        },
        {
          id: 44,
          title: "Wrap Style Blouse",
          image: PLACEHOLDER_IMAGES.womensTop,
          images: [PLACEHOLDER_IMAGES.womensTop, PLACEHOLDER_IMAGES.womensTop],
          alt: "Wrap Style Blouse",
          shortDescription: "Flattering wrap-style top",
          description: "Elegant wrap-style blouse that creates a flattering silhouette for all body types.",
          specifications: {
            Material: "Viscose Blend",
            Style: "Casual/Formal",
            CareInstructions: "Machine wash",
            Size: "XS, S, M, L, XL",
            Color: "Various colors",
            Quality: "Export Grade A"
          },
          availability: "In Stock",
          category: "garments-women-tops",
          tags: ["Wrap Style", "Flattering", "Elegant", "Versatile", "Tops"]
        },
        {
          id: 45,
          title: "Ruffle Detail Blouse",
          image: PLACEHOLDER_IMAGES.womensTop,
          images: [PLACEHOLDER_IMAGES.womensTop, PLACEHOLDER_IMAGES.womensTop],
          alt: "Ruffle Detail Blouse",
          shortDescription: "Feminine blouse with ruffle details",
          description: "Charming blouse featuring delicate ruffle details for a feminine and romantic look.",
          specifications: {
            Material: "Polyester Blend",
            Style: "Feminine Casual",
            CareInstructions: "Machine wash",
            Size: "XS, S, M, L",
            Color: "Feminine colors",
            Quality: "Export Grade A"
          },
          availability: "In Stock",
          category: "garments-women-tops",
          tags: ["Ruffle", "Feminine", "Romantic", "Charming", "Tops"]
        },
        {
          id: 46,
          title: "High-Neck Blouse",
          image: PLACEHOLDER_IMAGES.womensTop,
          images: [PLACEHOLDER_IMAGES.womensTop, PLACEHOLDER_IMAGES.womensTop],
          alt: "High-Neck Blouse",
          shortDescription: "Sophisticated high-neck top",
          description: "Elegant high-neck blouse that offers sophisticated coverage and modern style.",
          specifications: {
            Material: "Cotton Blend",
            Style: "Modern Formal",
            CareInstructions: "Machine wash",
            Size: "XS, S, M, L",
            Color: "Sophisticated colors",
            Quality: "Export Grade A"
          },
          availability: "In Stock",
          category: "garments-women-tops",
          tags: ["High-Neck", "Sophisticated", "Modern", "Elegant", "Tops"]
        },
        {
          id: 47,
          title: "Peplum Style Top",
          image: PLACEHOLDER_IMAGES.womensTop,
          images: [PLACEHOLDER_IMAGES.womensTop, PLACEHOLDER_IMAGES.womensTop],
          alt: "Peplum Style Top",
          shortDescription: "Flattering peplum style blouse",
          description: "Fashionable peplum top that accentuates the waist and creates a beautiful silhouette.",
          specifications: {
            Material: "Stretch Blend",
            Style: "Fashion",
            CareInstructions: "Machine wash",
            Size: "XS, S, M, L",
            Color: "Fashion colors",
            Quality: "Fashion Grade"
          },
          availability: "In Stock",
          category: "garments-women-tops",
          tags: ["Peplum", "Flattering", "Fashion", "Accentuating", "Tops"]
        },
        {
          id: 48,
          title: "Cold Shoulder Top",
          image: PLACEHOLDER_IMAGES.womensTop,
          images: [PLACEHOLDER_IMAGES.womensTop, PLACEHOLDER_IMAGES.womensTop],
          alt: "Cold Shoulder Top",
          shortDescription: "Trendy cold shoulder blouse",
          description: "Stylish cold shoulder top that combines coverage with fashionable cut-out details.",
          specifications: {
            Material: "Knit Blend",
            Style: "Fashion Casual",
            CareInstructions: "Machine wash",
            Size: "XS, S, M, L",
            Color: "Trendy colors",
            Quality: "Fashion Grade"
          },
          availability: "In Stock",
          category: "garments-women-tops",
          tags: ["Cold Shoulder", "Trendy", "Cut-out", "Fashion", "Tops"]
        },
        {
          id: 49,
          title: "Boat Neck Striped Top",
          image: PLACEHOLDER_IMAGES.womensTop,
          images: [PLACEHOLDER_IMAGES.womensTop, PLACEHOLDER_IMAGES.womensTop],
          alt: "Boat Neck Striped Top",
          shortDescription: "Classic boat neck striped blouse",
          description: "Timeless boat neck top with classic stripes for a nautical-inspired look.",
          specifications: {
            Material: "Cotton Jersey",
            Style: "Classic Casual",
            CareInstructions: "Machine wash",
            Size: "XS, S, M, L, XL",
            Color: "Nautical stripes",
            Quality: "Export Grade A"
          },
          availability: "In Stock",
          category: "garments-women-tops",
          tags: ["Boat Neck", "Striped", "Classic", "Nautical", "Tops"]
        },
        {
          id: 50,
          title: "Embroidered peasant Top",
          image: PLACEHOLDER_IMAGES.womensTop,
          images: [PLACEHOLDER_IMAGES.womensTop, PLACEHOLDER_IMAGES.womensTop],
          alt: "Embroidered peasant Top",
          shortDescription: "Bohemian style embroidered top",
          description: "Beautiful peasant top with intricate embroidery for a bohemian and romantic style.",
          specifications: {
            Material: "Cotton Voile",
            Style: "Bohemian",
            CareInstructions: "Hand wash recommended",
            Size: "XS, S, M, L",
            Color: "Bohemian colors",
            Quality: "Artisan Grade"
          },
          availability: "In Stock",
          category: "garments-women-tops",
          tags: ["Embroidered", "Peasant", "Bohemian", "Romantic", "Tops"]
        }
      ],
      dresses: [
        {
          id: 51,
          title: "Evening Party Gown",
          image: PLACEHOLDER_IMAGES.womensDress,
          images: [PLACEHOLDER_IMAGES.womensDress, PLACEHOLDER_IMAGES.womensDress],
          alt: "Evening Party Gown",
          shortDescription: "Stunning evening gown for special occasions",
          description: "Beautiful evening gown with elegant design, perfect for parties and special events.",
          specifications: {
            Material: "Satin",
            Style: "Evening Wear",
            CareInstructions: "Dry clean only",
            Size: "XS, S, M, L, XL",
            Color: "Black, Red, Navy, Emerald",
            Quality: "Export Grade A"
          },
          availability: "In Stock",
          category: "garments-women-dresses",
          tags: ["Evening", "Gown", "Elegant", "Party", "Dresses"]
        },
        // Additional dresses to reach 10+
        {
          id: 52,
          title: "Summer Floral Maxi Dress",
          image: PLACEHOLDER_IMAGES.womensDress,
          images: [PLACEHOLDER_IMAGES.womensDress, PLACEHOLDER_IMAGES.womensDress],
          alt: "Summer Floral Maxi Dress",
          shortDescription: "Beautiful floral maxi dress for summer",
          description: "Flowing maxi dress with vibrant floral patterns perfect for summer occasions.",
          specifications: {
            Material: "Rayon Blend",
            Style: "Summer Casual",
            CareInstructions: "Machine wash",
            Size: "XS, S, M, L, XL",
            Color: "Floral patterns",
            Quality: "Export Grade A"
          },
          availability: "In Stock",
          category: "garments-women-dresses",
          tags: ["Summer", "Floral", "Maxi", "Flowing", "Dresses"]
        },
        {
          id: 53,
          title: "Cocktail Little Black Dress",
          image: PLACEHOLDER_IMAGES.womensDress,
          images: [PLACEHOLDER_IMAGES.womensDress, PLACEHOLDER_IMAGES.womensDress],
          alt: "Cocktail Little Black Dress",
          shortDescription: "Classic little black dress for cocktails",
          description: "Timeless little black dress perfect for cocktail parties and evening events.",
          specifications: {
            Material: "Stretch Crepe",
            Style: "Cocktail",
            CareInstructions: "Dry clean",
            Size: "XS, S, M, L",
            Color: "Black",
            Quality: "Export Grade A"
          },
          availability: "In Stock",
          category: "garments-women-dresses",
          tags: ["Cocktail", "Little Black Dress", "Classic", "Evening", "Dresses"]
        },
        {
          id: 54,
          title: "A-Line Sundress",
          image: PLACEHOLDER_IMAGES.womensDress,
          images: [PLACEHOLDER_IMAGES.womensDress, PLACEHOLDER_IMAGES.womensDress],
          alt: "A-Line Sundress",
          shortDescription: "Flattering A-line sundress",
          description: "Comfortable A-line sundress perfect for warm weather and casual outings.",
          specifications: {
            Material: "Cotton Poplin",
            Style: "Casual",
            CareInstructions: "Machine wash",
            Size: "XS, S, M, L, XL",
            Color: "Summer colors",
            Quality: "Export Grade A"
          },
          availability: "In Stock",
          category: "garments-women-dresses",
          tags: ["A-Line", "Sundress", "Flattering", "Casual", "Dresses"]
        },
        {
          id: 55,
          title: "Wrap Midi Dress",
          image: PLACEHOLDER_IMAGES.womensDress,
          images: [PLACEHOLDER_IMAGES.womensDress, PLACEHOLDER_IMAGES.womensDress],
          alt: "Wrap Midi Dress",
          shortDescription: "Elegant wrap midi dress",
          description: "Sophisticated wrap dress in midi length that flatters all body types.",
          specifications: {
            Material: "Jersey Knit",
            Style: "Casual/Formal",
            CareInstructions: "Machine wash",
            Size: "XS, S, M, L, XL",
            Color: "Various colors",
            Quality: "Export Grade A"
          },
          availability: "In Stock",
          category: "garments-women-dresses",
          tags: ["Wrap", "Midi", "Elegant", "Flattering", "Dresses"]
        },
        {
          id: 56,
          title: "Bodycon Party Dress",
          image: PLACEHOLDER_IMAGES.womensDress,
          images: [PLACEHOLDER_IMAGES.womensDress, PLACEHOLDER_IMAGES.womensDress],
          alt: "Bodycon Party Dress",
          shortDescription: "Sleek bodycon dress for parties",
          description: "Form-fitting bodycon dress perfect for nightlife and party occasions.",
          specifications: {
            Material: "Stretch Knit",
            Style: "Party",
            CareInstructions: "Machine wash",
            Size: "XS, S, M, L",
            Color: "Party colors",
            Quality: "Fashion Grade"
          },
          availability: "In Stock",
          category: "garments-women-dresses",
          tags: ["Bodycon", "Party", "Sleek", "Form-fitting", "Dresses"]
        },
        {
          id: 57,
          title: "Shirt Dress Classic",
          image: PLACEHOLDER_IMAGES.womensDress,
          images: [PLACEHOLDER_IMAGES.womensDress, PLACEHOLDER_IMAGES.womensDress],
          alt: "Shirt Dress Classic",
          shortDescription: "Versatile shirt dress for everyday wear",
          description: "Classic shirt dress that can be dressed up or down for various occasions.",
          specifications: {
            Material: "Cotton Twill",
            Style: "Casual",
            CareInstructions: "Machine wash",
            Size: "XS, S, M, L, XL",
            Color: "Classic colors",
            Quality: "Export Grade A"
          },
          availability: "In Stock",
          category: "garments-women-dresses",
          tags: ["Shirt Dress", "Classic", "Versatile", "Everyday", "Dresses"]
        },
        {
          id: 58,
          title: "Bohemian Maxi Dress",
          image: PLACEHOLDER_IMAGES.womensDress,
          images: [PLACEHOLDER_IMAGES.womensDress, PLACEHOLDER_IMAGES.womensDress],
          alt: "Bohemian Maxi Dress",
          shortDescription: "Free-spirited bohemian maxi dress",
          description: "Flowing bohemian maxi dress with ethnic patterns and relaxed silhouette.",
          specifications: {
            Material: "Rayon Blend",
            Style: "Bohemian",
            CareInstructions: "Machine wash",
            Size: "XS, S, M, L, XL",
            Color: "Bohemian patterns",
            Quality: "Export Grade A"
          },
          availability: "In Stock",
          category: "garments-women-dresses",
          tags: ["Bohemian", "Maxi", "Free-spirited", "Ethnic", "Dresses"]
        },
        {
          id: 59,
          title: "Fit and Flare Dress",
          image: PLACEHOLDER_IMAGES.womensDress,
          images: [PLACEHOLDER_IMAGES.womensDress, PLACEHOLDER_IMAGES.womensDress],
          alt: "Fit and Flare Dress",
          shortDescription: "Feminine fit and flare dress",
          description: "Charming fit and flare dress that accentuates the waist and creates a beautiful shape.",
          specifications: {
            Material: "Polyester Blend",
            Style: "Feminine",
            CareInstructions: "Machine wash",
            Size: "XS, S, M, L, XL",
            Color: "Feminine colors",
            Quality: "Export Grade A"
          },
          availability: "In Stock",
          category: "garments-women-dresses",
          tags: ["Fit and Flare", "Feminine", "Charming", "Accentuating", "Dresses"]
        },
        {
          id: 60,
          title: "Office Sheath Dress",
          image: PLACEHOLDER_IMAGES.womensDress,
          images: [PLACEHOLDER_IMAGES.womensDress, PLACEHOLDER_IMAGES.womensDress],
          alt: "Office Sheath Dress",
          shortDescription: "Professional sheath dress for office",
          description: "Sophisticated sheath dress perfect for professional settings and business occasions.",
          specifications: {
            Material: "Wool Blend",
            Style: "Professional",
            CareInstructions: "Dry clean",
            Size: "XS, S, M, L, XL",
            Color: "Professional colors",
            Quality: "Professional Grade"
          },
          availability: "In Stock",
          category: "garments-women-dresses",
          tags: ["Sheath", "Office", "Professional", "Business", "Dresses"]
        }
      ],
      skirts: [
        {
          id: 61,
          title: "A-Line Casual Skirt",
          image: PLACEHOLDER_IMAGES.womensSkirt,
          images: [PLACEHOLDER_IMAGES.womensSkirt, PLACEHOLDER_IMAGES.womensSkirt],
          alt: "A-Line Casual Skirt",
          shortDescription: "Comfortable A-line skirt for daily wear",
          description: "Versatile A-line skirt that can be dressed up or down for various occasions.",
          specifications: {
            Material: "Cotton Blend",
            Style: "Casual",
            CareInstructions: "Machine wash",
            Size: "XS, S, M, L, XL",
            Color: "Black, Navy, Beige, Patterns",
            Quality: "Export Grade A"
          },
          availability: "In Stock",
          category: "garments-women-skirts",
          tags: ["A-Line", "Casual", "Versatile", "Comfort", "Skirts"]
        },
        // Additional skirts to reach 10+
        {
          id: 62,
          title: "Pencil Skirt Professional",
          image: PLACEHOLDER_IMAGES.womensSkirt,
          images: [PLACEHOLDER_IMAGES.womensSkirt, PLACEHOLDER_IMAGES.womensSkirt],
          alt: "Pencil Skirt Professional",
          shortDescription: "Classic pencil skirt for office wear",
          description: "Professional pencil skirt that offers a sleek and sophisticated silhouette for work settings.",
          specifications: {
            Material: "Wool Blend",
            Style: "Professional",
            CareInstructions: "Dry clean",
            Size: "XS, S, M, L, XL",
            Color: "Professional colors",
            Quality: "Professional Grade"
          },
          availability: "In Stock",
          category: "garments-women-skirts",
          tags: ["Pencil", "Professional", "Office", "Sleek", "Skirts"]
        },
        {
          id: 63,
          title: "Maxi Skirt Bohemian",
          image: PLACEHOLDER_IMAGES.womensSkirt,
          images: [PLACEHOLDER_IMAGES.womensSkirt, PLACEHOLDER_IMAGES.womensSkirt],
          alt: "Maxi Skirt Bohemian",
          shortDescription: "Flowing bohemian maxi skirt",
          description: "Beautiful maxi skirt with bohemian patterns perfect for casual and festival wear.",
          specifications: {
            Material: "Rayon Blend",
            Style: "Bohemian",
            CareInstructions: "Machine wash",
            Size: "XS, S, M, L, XL",
            Color: "Bohemian patterns",
            Quality: "Export Grade A"
          },
          availability: "In Stock",
          category: "garments-women-skirts",
          tags: ["Maxi", "Bohemian", "Flowing", "Festival", "Skirts"]
        },
        {
          id: 64,
          title: "Pleated Midi Skirt",
          image: PLACEHOLDER_IMAGES.womensSkirt,
          images: [PLACEHOLDER_IMAGES.womensSkirt, PLACEHOLDER_IMAGES.womensSkirt],
          alt: "Pleated Midi Skirt",
          shortDescription: "Elegant pleated midi skirt",
          description: "Sophisticated pleated midi skirt that adds movement and elegance to any outfit.",
          specifications: {
            Material: "Polyester Crepe",
            Style: "Elegant",
            CareInstructions: "Dry clean",
            Size: "XS, S, M, L, XL",
            Color: "Elegant colors",
            Quality: "Export Grade A"
          },
          availability: "In Stock",
          category: "garments-women-skirts",
          tags: ["Pleated", "Midi", "Elegant", "Movement", "Skirts"]
        },
        {
          id: 65,
          title: "Denim Mini Skirt",
          image: PLACEHOLDER_IMAGES.womensSkirt,
          images: [PLACEHOLDER_IMAGES.womensSkirt, PLACEHOLDER_IMAGES.womensSkirt],
          alt: "Denim Mini Skirt",
          shortDescription: "Casual denim mini skirt",
          description: "Fun and casual denim mini skirt perfect for weekend wear and casual outings.",
          specifications: {
            Material: "Denim",
            Style: "Casual",
            CareInstructions: "Machine wash",
            Size: "XS, S, M, L",
            Color: "Denim washes",
            Quality: "Export Grade A"
          },
          availability: "In Stock",
          category: "garments-women-skirts",
          tags: ["Denim", "Mini", "Casual", "Weekend", "Skirts"]
        },
        {
          id: 66,
          title: "Wrap Style Skirt",
          image: PLACEHOLDER_IMAGES.womensSkirt,
          images: [PLACEHOLDER_IMAGES.womensSkirt, PLACEHOLDER_IMAGES.womensSkirt],
          alt: "Wrap Style Skirt",
          shortDescription: "Flattering wrap style skirt",
          description: "Versatile wrap skirt that adjusts to fit perfectly and creates a beautiful silhouette.",
          specifications: {
            Material: "Jersey Knit",
            Style: "Casual",
            CareInstructions: "Machine wash",
            Size: "XS, S, M, L, XL",
            Color: "Various colors",
            Quality: "Export Grade A"
          },
          availability: "In Stock",
          category: "garments-women-skirts",
          tags: ["Wrap", "Flattering", "Adjustable", "Versatile", "Skirts"]
        },
        {
          id: 67,
          title: "Tulle Party Skirt",
          image: PLACEHOLDER_IMAGES.womensSkirt,
          images: [PLACEHOLDER_IMAGES.womensSkirt, PLACEHOLDER_IMAGES.womensSkirt],
          alt: "Tulle Party Skirt",
          shortDescription: "Dramatic tulle party skirt",
          description: "Beautiful tulle skirt perfect for parties, photoshoots, and special occasions.",
          specifications: {
            Material: "Polyester Tulle",
            Style: "Party",
            CareInstructions: "Hand wash",
            Size: "XS, S, M, L",
            Color: "Party colors",
            Quality: "Fashion Grade"
          },
          availability: "In Stock",
          category: "garments-women-skirts",
          tags: ["Tulle", "Party", "Dramatic", "Special Occasion", "Skirts"]
        },
        {
          id: 68,
          title: "Leather Look Skirt",
          image: PLACEHOLDER_IMAGES.womensSkirt,
          images: [PLACEHOLDER_IMAGES.womensSkirt, PLACEHOLDER_IMAGES.womensSkirt],
          alt: "Leather Look Skirt",
          shortDescription: "Edgy leather look skirt",
          description: "Fashion-forward skirt with leather-like finish for an edgy and modern look.",
          specifications: {
            Material: "PU Leather",
            Style: "Edgy Fashion",
            CareInstructions: "Wipe clean",
            Size: "XS, S, M, L",
            Color: "Black, Brown, Burgundy",
            Quality: "Fashion Grade"
          },
          availability: "In Stock",
          category: "garments-women-skirts",
          tags: ["Leather Look", "Edgy", "Fashion", "Modern", "Skirts"]
        },
        {
          id: 69,
          title: "Tiered Ruffle Skirt",
          image: PLACEHOLDER_IMAGES.womensSkirt,
          images: [PLACEHOLDER_IMAGES.womensSkirt, PLACEHOLDER_IMAGES.womensSkirt],
          alt: "Tiered Ruffle Skirt",
          shortDescription: "Feminine tiered ruffle skirt",
          description: "Romantic skirt with multiple tiers of ruffles for a feminine and playful look.",
          specifications: {
            Material: "Cotton Voile",
            Style: "Feminine",
            CareInstructions: "Machine wash",
            Size: "XS, S, M, L, XL",
            Color: "Feminine colors",
            Quality: "Export Grade A"
          },
          availability: "In Stock",
          category: "garments-women-skirts",
          tags: ["Tiered", "Ruffle", "Feminine", "Romantic", "Skirts"]
        },
        {
          id: 70,
          title: "High-Waisted Skirt",
          image: PLACEHOLDER_IMAGES.womensSkirt,
          images: [PLACEHOLDER_IMAGES.womensSkirt, PLACEHOLDER_IMAGES.womensSkirt],
          alt: "High-Waisted Skirt",
          shortDescription: "Flattering high-waisted skirt",
          description: "Stylish high-waisted skirt that elongates the legs and creates a beautiful silhouette.",
          specifications: {
            Material: "Cotton Blend",
            Style: "Fashion",
            CareInstructions: "Machine wash",
            Size: "XS, S, M, L, XL",
            Color: "Fashion colors",
            Quality: "Export Grade A"
          },
          availability: "In Stock",
          category: "garments-women-skirts",
          tags: ["High-Waisted", "Flattering", "Stylish", "Elongating", "Skirts"]
        }
      ]
    },
    kids: {
      tshirts: [
        {
          id: 71,
          title: "Kids Cartoon Print T-Shirt",
          image: PLACEHOLDER_IMAGES.kidsClothing,
          images: [PLACEHOLDER_IMAGES.kidsClothing, PLACEHOLDER_IMAGES.kidsClothing],
          alt: "Kids Cartoon Print T-Shirt",
          shortDescription: "Colorful cartoon print t-shirts for children",
          description: "Fun and colorful t-shirts with popular cartoon characters, made from child-safe materials.",
          specifications: {
            Material: "100% Cotton",
            Style: "Casual",
            CareInstructions: "Machine wash",
            Size: "2-14 Years",
            Color: "Multiple colors with cartoon prints",
            Quality: "Child-Safe Grade A"
          },
          availability: "In Stock",
          category: "garments-kids-tshirts",
          tags: ["Kids", "Cartoon", "Colorful", "Safe", "T-shirts"]
        },
        // Additional kids t-shirts to reach 10+
        {
          id: 72,
          title: "Kids Animal Print T-Shirt",
          image: PLACEHOLDER_IMAGES.kidsClothing,
          images: [PLACEHOLDER_IMAGES.kidsClothing, PLACEHOLDER_IMAGES.kidsClothing],
          alt: "Kids Animal Print T-Shirt",
          shortDescription: "Fun animal print t-shirts for children",
          description: "Adorable t-shirts featuring various animal prints and patterns for kids.",
          specifications: {
            Material: "100% Cotton",
            Style: "Casual",
            CareInstructions: "Machine wash",
            Size: "2-14 Years",
            Color: "Animal print colors",
            Quality: "Child-Safe Grade A"
          },
          availability: "In Stock",
          category: "garments-kids-tshirts",
          tags: ["Kids", "Animal", "Print", "Fun", "T-shirts"]
        },
        {
          id: 73,
          title: "Kids Sports T-Shirt",
          image: PLACEHOLDER_IMAGES.kidsClothing,
          images: [PLACEHOLDER_IMAGES.kidsClothing, PLACEHOLDER_IMAGES.kidsClothing],
          alt: "Kids Sports T-Shirt",
          shortDescription: "Active wear t-shirts for sporty kids",
          description: "Comfortable sports t-shirts perfect for active children and physical activities.",
          specifications: {
            Material: "Cotton Blend",
            Style: "Sports",
            CareInstructions: "Machine wash",
            Size: "4-16 Years",
            Color: "Sport colors",
            Quality: "Child-Safe Grade A"
          },
          availability: "In Stock",
          category: "garments-kids-tshirts",
          tags: ["Kids", "Sports", "Active", "Comfort", "T-shirts"]
        },
        {
          id: 74,
          title: "Kids Organic Cotton T-Shirt",
          image: PLACEHOLDER_IMAGES.kidsClothing,
          images: [PLACEHOLDER_IMAGES.kidsClothing, PLACEHOLDER_IMAGES.kidsClothing],
          alt: "Kids Organic Cotton T-Shirt",
          shortDescription: "Eco-friendly organic t-shirts for kids",
          description: "Soft organic cotton t-shirts safe for children's sensitive skin.",
          specifications: {
            Material: "100% Organic Cotton",
            Style: "Casual",
            CareInstructions: "Machine wash cold",
            Size: "2-12 Years",
            Color: "Natural colors",
            Quality: "Organic Child-Safe"
          },
          availability: "In Stock",
          category: "garments-kids-tshirts",
          tags: ["Kids", "Organic", "Eco-friendly", "Soft", "T-shirts"]
        },
        {
          id: 75,
          title: "Kids Long Sleeve T-Shirt",
          image: PLACEHOLDER_IMAGES.kidsClothing,
          images: [PLACEHOLDER_IMAGES.kidsClothing, PLACEHOLDER_IMAGES.kidsClothing],
          alt: "Kids Long Sleeve T-Shirt",
          shortDescription: "Comfortable long sleeve t-shirts for kids",
          description: "Warm long sleeve t-shirts perfect for cooler weather and layering.",
          specifications: {
            Material: "100% Cotton",
            Style: "Casual",
            CareInstructions: "Machine wash",
            Size: "2-14 Years",
            Color: "Various colors",
            Quality: "Child-Safe Grade A"
          },
          availability: "In Stock",
          category: "garments-kids-tshirts",
          tags: ["Kids", "Long Sleeve", "Warm", "Layering", "T-shirts"]
        },
        {
          id: 76,
          title: "Kids Character T-Shirt Pack",
          image: PLACEHOLDER_IMAGES.kidsClothing,
          images: [PLACEHOLDER_IMAGES.kidsClothing, PLACEHOLDER_IMAGES.kidsClothing],
          alt: "Kids Character T-Shirt Pack",
          shortDescription: "Multi-pack of character t-shirts for kids",
          description: "Value pack of t-shirts featuring different popular characters for children.",
          specifications: {
            Material: "100% Cotton",
            Style: "Casual",
            CareInstructions: "Machine wash",
            Size: "4-12 Years",
            Color: "Multiple character designs",
            Quality: "Child-Safe Grade A"
          },
          availability: "In Stock",
          category: "garments-kids-tshirts",
          tags: ["Kids", "Character", "Multi-pack", "Value", "T-shirts"]
        },
        {
          id: 77,
          title: "Kids Graphic Print T-Shirt",
          image: PLACEHOLDER_IMAGES.kidsClothing,
          images: [PLACEHOLDER_IMAGES.kidsClothing, PLACEHOLDER_IMAGES.kidsClothing],
          alt: "Kids Graphic Print T-Shirt",
          shortDescription: "Trendy graphic print t-shirts for kids",
          description: "Fashionable t-shirts with cool graphic prints that kids love.",
          specifications: {
            Material: "Cotton Blend",
            Style: "Fashion",
            CareInstructions: "Machine wash inside out",
            Size: "4-14 Years",
            Color: "Graphic print colors",
            Quality: "Child-Safe Grade A"
          },
          availability: "In Stock",
          category: "garments-kids-tshirts",
          tags: ["Kids", "Graphic", "Trendy", "Fashion", "T-shirts"]
        },
        {
          id: 78,
          title: "Kids Striped T-Shirt",
          image: PLACEHOLDER_IMAGES.kidsClothing,
          images: [PLACEHOLDER_IMAGES.kidsClothing, PLACEHOLDER_IMAGES.kidsClothing],
          alt: "Kids Striped T-Shirt",
          shortDescription: "Classic striped t-shirts for children",
          description: "Timeless striped t-shirts that never go out of style for kids' wardrobe.",
          specifications: {
            Material: "100% Cotton",
            Style: "Classic Casual",
            CareInstructions: "Machine wash",
            Size: "2-14 Years",
            Color: "Classic stripes",
            Quality: "Child-Safe Grade A"
          },
          availability: "In Stock",
          category: "garments-kids-tshirts",
          tags: ["Kids", "Striped", "Classic", "Timeless", "T-shirts"]
        },
        {
          id: 79,
          title: "Kids Color Block T-Shirt",
          image: PLACEHOLDER_IMAGES.kidsClothing,
          images: [PLACEHOLDER_IMAGES.kidsClothing, PLACEHOLDER_IMAGES.kidsClothing],
          alt: "Kids Color Block T-Shirt",
          shortDescription: "Modern color block t-shirts for kids",
          description: "Contemporary color block designs that add style to kids' casual wear.",
          specifications: {
            Material: "100% Cotton",
            Style: "Modern Casual",
            CareInstructions: "Machine wash",
            Size: "4-12 Years",
            Color: "Color block combinations",
            Quality: "Child-Safe Grade A"
          },
          availability: "In Stock",
          category: "garments-kids-tshirts",
          tags: ["Kids", "Color Block", "Modern", "Contemporary", "T-shirts"]
        },
        {
          id: 80,
          title: "Kids Tie-Dye T-Shirt",
          image: PLACEHOLDER_IMAGES.kidsClothing,
          images: [PLACEHOLDER_IMAGES.kidsClothing, PLACEHOLDER_IMAGES.kidsClothing],
          alt: "Kids Tie-Dye T-Shirt",
          shortDescription: "Fun tie-dye t-shirts for creative kids",
          description: "Colorful tie-dye t-shirts that allow kids to express their creativity and individuality.",
          specifications: {
            Material: "100% Cotton",
            Style: "Creative Casual",
            CareInstructions: "Machine wash cold",
            Size: "4-14 Years",
            Color: "Tie-dye patterns",
            Quality: "Child-Safe Grade A"
          },
          availability: "In Stock",
          category: "garments-kids-tshirts",
          tags: ["Kids", "Tie-Dye", "Creative", "Colorful", "T-shirts"]
        }
      ]
    }
  },

  // Footwear Category - 30+ products
  footwear: {
    men: {
      sportsShoes: [
        {
          id: 81,
          title: "Men's Running Shoes",
          image: PLACEHOLDER_IMAGES.sportsShoes,
          images: [PLACEHOLDER_IMAGES.sportsShoes, PLACEHOLDER_IMAGES.sportsShoes],
          alt: "Men's Running Shoes",
          shortDescription: "Comfortable running shoes for sports and casual wear",
          description: "High-performance running shoes with excellent cushioning and support for various activities.",
          specifications: {
            Material: "Mesh and Synthetic",
            Style: "Sports",
            CareInstructions: "Wipe clean",
            Size: "6-12 UK",
            Color: "Black, White, Blue, Red",
            Quality: "Premium Grade"
          },
          availability: "In Stock",
          category: "footwear-men-sports",
          tags: ["Running", "Sports", "Comfort", "Performance", "Shoes"]
        },
        // Additional sports shoes to reach 10+
        {
          id: 82,
          title: "Men's Basketball Shoes",
          image: PLACEHOLDER_IMAGES.sportsShoes,
          images: [PLACEHOLDER_IMAGES.sportsShoes, PLACEHOLDER_IMAGES.sportsShoes],
          alt: "Men's Basketball Shoes",
          shortDescription: "High-top basketball shoes for court performance",
          description: "Professional basketball shoes with ankle support and superior traction for court sports.",
          specifications: {
            Material: "Leather and Mesh",
            Style: "Basketball",
            CareInstructions: "Wipe clean",
            Size: "7-13 UK",
            Color: "Team colors",
            Quality: "Professional Grade"
          },
          availability: "In Stock",
          category: "footwear-men-sports",
          tags: ["Basketball", "High-top", "Performance", "Court", "Shoes"]
        },
        {
          id: 83,
          title: "Men's Training Shoes",
          image: PLACEHOLDER_IMAGES.sportsShoes,
          images: [PLACEHOLDER_IMAGES.sportsShoes, PLACEHOLDER_IMAGES.sportsShoes],
          alt: "Men's Training Shoes",
          shortDescription: "Versatile training shoes for gym workouts",
          description: "Multi-purpose training shoes suitable for various gym exercises and fitness activities.",
          specifications: {
            Material: "Synthetic and Mesh",
            Style: "Training",
            CareInstructions: "Wipe clean",
            Size: "6-12 UK",
            Color: "Training colors",
            Quality: "Performance Grade"
          },
          availability: "In Stock",
          category: "footwear-men-sports",
          tags: ["Training", "Gym", "Versatile", "Fitness", "Shoes"]
        },
        {
          id: 84,
          title: "Men's Trail Running Shoes",
          image: PLACEHOLDER_IMAGES.sportsShoes,
          images: [PLACEHOLDER_IMAGES.sportsShoes, PLACEHOLDER_IMAGES.sportsShoes],
          alt: "Men's Trail Running Shoes",
          shortDescription: "Rugged trail running shoes for outdoor terrain",
          description: "Durable trail running shoes with aggressive tread for off-road and mountain running.",
          specifications: {
            Material: "Reinforced Mesh",
            Style: "Trail Running",
            CareInstructions: "Brush clean",
            Size: "6-12 UK",
            Color: "Outdoor colors",
            Quality: "Outdoor Grade"
          },
          availability: "In Stock",
          category: "footwear-men-sports",
          tags: ["Trail", "Running", "Outdoor", "Rugged", "Shoes"]
        },
        {
          id: 85,
          title: "Men's Walking Shoes",
          image: PLACEHOLDER_IMAGES.sportsShoes,
          images: [PLACEHOLDER_IMAGES.sportsShoes, PLACEHOLDER_IMAGES.sportsShoes],
          alt: "Men's Walking Shoes",
          shortDescription: "Comfortable walking shoes for daily use",
          description: "Supportive walking shoes with cushioning designed for extended walking comfort.",
          specifications: {
            Material: "Leather and Mesh",
            Style: "Walking",
            CareInstructions: "Wipe clean",
            Size: "6-12 UK",
            Color: "Comfort colors",
            Quality: "Comfort Grade"
          },
          availability: "In Stock",
          category: "footwear-men-sports",
          tags: ["Walking", "Comfort", "Supportive", "Daily", "Shoes"]
        },
        {
          id: 86,
          title: "Men's Cross Training Shoes",
          image: PLACEHOLDER_IMAGES.sportsShoes,
          images: [PLACEHOLDER_IMAGES.sportsShoes, PLACEHOLDER_IMAGES.sportsShoes],
          alt: "Men's Cross Training Shoes",
          shortDescription: "Versatile cross training shoes for multiple activities",
          description: "Adaptable cross training shoes suitable for various sports and fitness disciplines.",
          specifications: {
            Material: "Synthetic Blend",
            Style: "Cross Training",
            CareInstructions: "Wipe clean",
            Size: "6-12 UK",
            Color: "Training colors",
            Quality: "Versatile Grade"
          },
          availability: "In Stock",
          category: "footwear-men-sports",
          tags: ["Cross Training", "Versatile", "Multi-sport", "Adaptable", "Shoes"]
        },
        {
          id: 87,
          title: "Men's Tennis Shoes",
          image: PLACEHOLDER_IMAGES.sportsShoes,
          images: [PLACEHOLDER_IMAGES.sportsShoes, PLACEHOLDER_IMAGES.sportsShoes],
          alt: "Men's Tennis Shoes",
          shortDescription: "Court shoes for tennis and racket sports",
          description: "Specialized tennis shoes with lateral support and court-specific traction.",
          specifications: {
            Material: "Reinforced Synthetic",
            Style: "Tennis",
            CareInstructions: "Wipe clean",
            Size: "6-12 UK",
            Color: "Court colors",
            Quality: "Sports Grade"
          },
          availability: "In Stock",
          category: "footwear-men-sports",
          tags: ["Tennis", "Court", "Racket Sports", "Lateral Support", "Shoes"]
        },
        {
          id: 88,
          title: "Men's Soccer Cleats",
          image: PLACEHOLDER_IMAGES.sportsShoes,
          images: [PLACEHOLDER_IMAGES.sportsShoes, PLACEHOLDER_IMAGES.sportsShoes],
          alt: "Men's Soccer Cleats",
          shortDescription: "Professional soccer cleats for field performance",
          description: "High-performance soccer cleats with stud configuration for optimal field traction.",
          specifications: {
            Material: "Synthetic Leather",
            Style: "Soccer",
            CareInstructions: "Brush clean",
            Size: "6-12 UK",
            Color: "Team colors",
            Quality: "Professional Grade"
          },
          availability: "In Stock",
          category: "footwear-men-sports",
          tags: ["Soccer", "Cleats", "Field", "Professional", "Shoes"]
        },
        {
          id: 89,
          title: "Men's Golf Shoes",
          image: PLACEHOLDER_IMAGES.sportsShoes,
          images: [PLACEHOLDER_IMAGES.sportsShoes, PLACEHOLDER_IMAGES.sportsShoes],
          alt: "Men's Golf Shoes",
          shortDescription: "Spiked golf shoes for course performance",
          description: "Specialized golf shoes with spikes for excellent grip during golf swings and walking the course.",
          specifications: {
            Material: "Waterproof Leather",
            Style: "Golf",
            CareInstructions: "Wipe clean",
            Size: "6-12 UK",
            Color: "Golf colors",
            Quality: "Golf Grade"
          },
          availability: "In Stock",
          category: "footwear-men-sports",
          tags: ["Golf", "Spiked", "Course", "Waterproof", "Shoes"]
        },
        {
          id: 90,
          title: "Men's Hiking Shoes",
          image: PLACEHOLDER_IMAGES.sportsShoes,
          images: [PLACEHOLDER_IMAGES.sportsShoes, PLACEHOLDER_IMAGES.sportsShoes],
          alt: "Men's Hiking Shoes",
          shortDescription: "Durable hiking shoes for outdoor adventures",
          description: "Robust hiking shoes designed for trail walking and outdoor exploration with excellent support.",
          specifications: {
            Material: "Waterproof Nubuck",
            Style: "Hiking",
            CareInstructions: "Brush and wipe clean",
            Size: "6-12 UK",
            Color: "Outdoor colors",
            Quality: "Outdoor Grade"
          },
          availability: "In Stock",
          category: "footwear-men-sports",
          tags: ["Hiking", "Outdoor", "Adventure", "Waterproof", "Shoes"]
        }
      ],
      casualShoes: [
        {
          id: 91,
          title: "Men's Leather Casual Shoes",
          image: PLACEHOLDER_IMAGES.mensShoes,
          images: [PLACEHOLDER_IMAGES.mensShoes, PLACEHOLDER_IMAGES.mensShoes],
          alt: "Men's Leather Casual Shoes",
          shortDescription: "Premium leather casual shoes",
          description: "Elegant leather shoes perfect for casual outings and semi-formal occasions.",
          specifications: {
            Material: "Genuine Leather",
            Style: "Casual",
            CareInstructions: "Leather care recommended",
            Size: "6-12 UK",
            Color: "Brown, Black, Tan",
            Quality: "Premium Grade"
          },
          availability: "In Stock",
          category: "footwear-men-casual",
          tags: ["Leather", "Casual", "Premium", "Elegant", "Shoes"]
        },
        // Additional casual shoes to reach 10+
        {
          id: 92,
          title: "Men's Canvas Sneakers",
          image: PLACEHOLDER_IMAGES.mensShoes,
          images: [PLACEHOLDER_IMAGES.mensShoes, PLACEHOLDER_IMAGES.mensShoes],
          alt: "Men's Canvas Sneakers",
          shortDescription: "Classic canvas sneakers for everyday wear",
          description: "Timeless canvas sneakers that offer comfort and style for daily casual wear.",
          specifications: {
            Material: "Canvas and Rubber",
            Style: "Casual",
            CareInstructions: "Machine washable",
            Size: "6-12 UK",
            Color: "Various colors",
            Quality: "Casual Grade"
          },
          availability: "In Stock",
          category: "footwear-men-casual",
          tags: ["Canvas", "Sneakers", "Classic", "Everyday", "Shoes"]
        },
        {
          id: 93,
          title: "Men's Loafers",
          image: PLACEHOLDER_IMAGES.mensShoes,
          images: [PLACEHOLDER_IMAGES.mensShoes, PLACEHOLDER_IMAGES.mensShoes],
          alt: "Men's Loafers",
          shortDescription: "Comfortable slip-on loafers",
          description: "Sophisticated loafers that combine ease of wear with elegant style.",
          specifications: {
            Material: "Genuine Leather",
            Style: "Smart Casual",
            CareInstructions: "Leather care",
            Size: "6-12 UK",
            Color: "Brown, Black, Burgundy",
            Quality: "Premium Grade"
          },
          availability: "In Stock",
          category: "footwear-men-casual",
          tags: ["Loafers", "Slip-on", "Sophisticated", "Smart Casual", "Shoes"]
        },
        {
          id: 94,
          title: "Men's Boat Shoes",
          image: PLACEHOLDER_IMAGES.mensShoes,
          images: [PLACEHOLDER_IMAGES.mensShoes, PLACEHOLDER_IMAGES.mensShoes],
          alt: "Men's Boat Shoes",
          shortDescription: "Classic boat shoes for nautical style",
          description: "Traditional boat shoes with non-marking soles perfect for maritime activities and casual wear.",
          specifications: {
            Material: "Leather or Canvas",
            Style: "Nautical Casual",
            CareInstructions: "Clean with damp cloth",
            Size: "6-12 UK",
            Color: "Nautical colors",
            Quality: "Casual Grade"
          },
          availability: "In Stock",
          category: "footwear-men-casual",
          tags: ["Boat Shoes", "Nautical", "Classic", "Non-marking", "Shoes"]
        },
        {
          id: 95,
          title: "Men's Espadrilles",
          image: PLACEHOLDER_IMAGES.mensShoes,
          images: [PLACEHOLDER_IMAGES.mensShoes, PLACEHOLDER_IMAGES.mensShoes],
          alt: "Men's Espadrilles",
          shortDescription: "Summer espadrilles for warm weather",
          description: "Lightweight espadrilles perfect for summer vacations and warm weather casual wear.",
          specifications: {
            Material: "Canvas and Jute",
            Style: "Summer Casual",
            CareInstructions: "Spot clean",
            Size: "6-12 UK",
            Color: "Summer colors",
            Quality: "Summer Grade"
          },
          availability: "In Stock",
          category: "footwear-men-casual",
          tags: ["Espadrilles", "Summer", "Lightweight", "Vacation", "Shoes"]
        },
        {
          id: 96,
          title: "Men's Moccasins",
          image: PLACEHOLDER_IMAGES.mensShoes,
          images: [PLACEHOLDER_IMAGES.mensShoes, PLACEHOLDER_IMAGES.mensShoes],
          alt: "Men's Moccasins",
          shortDescription: "Comfortable moccasins for indoor and outdoor wear",
          description: "Soft moccasins that provide comfort for both indoor lounging and casual outdoor wear.",
          specifications: {
            Material: "Soft Leather",
            Style: "Comfort Casual",
            CareInstructions: "Leather care",
            Size: "6-12 UK",
            Color: "Natural leather colors",
            Quality: "Comfort Grade"
          },
          availability: "In Stock",
          category: "footwear-men-casual",
          tags: ["Moccasins", "Comfort", "Soft", "Indoor/Outdoor", "Shoes"]
        },
        {
          id: 97,
          title: "Men's Desert Boots",
          image: PLACEHOLDER_IMAGES.mensShoes,
          images: [PLACEHOLDER_IMAGES.mensShoes, PLACEHOLDER_IMAGES.mensShoes],
          alt: "Men's Desert Boots",
          shortDescription: "Classic desert boots for versatile styling",
          description: "Timeless desert boots that work with various casual outfits and provide all-day comfort.",
          specifications: {
            Material: "Suede Leather",
            Style: "Casual Boots",
            CareInstructions: "Suede care",
            Size: "6-12 UK",
            Color: "Sand, Brown, Navy",
            Quality: "Casual Grade"
          },
          availability: "In Stock",
          category: "footwear-men-casual",
          tags: ["Desert Boots", "Classic", "Versatile", "Suede", "Shoes"]
        },
        {
          id: 98,
          title: "Men's Slip-on Sneakers",
          image: PLACEHOLDER_IMAGES.mensShoes,
          images: [PLACEHOLDER_IMAGES.mensShoes, PLACEHOLDER_IMAGES.mensShoes],
          alt: "Men's Slip-on Sneakers",
          shortDescription: "Convenient slip-on sneakers",
          description: "Easy-to-wear slip-on sneakers that combine comfort with modern casual style.",
          specifications: {
            Material: "Textile and Synthetic",
            Style: "Modern Casual",
            CareInstructions: "Machine washable",
            Size: "6-12 UK",
            Color: "Modern colors",
            Quality: "Casual Grade"
          },
          availability: "In Stock",
          category: "footwear-men-casual",
          tags: ["Slip-on", "Sneakers", "Convenient", "Modern", "Shoes"]
        },
        {
          id: 99,
          title: "Men's Fashion Sneakers",
          image: PLACEHOLDER_IMAGES.mensShoes,
          images: [PLACEHOLDER_IMAGES.mensShoes, PLACEHOLDER_IMAGES.mensShoes],
          alt: "Men's Fashion Sneakers",
          shortDescription: "Trendy fashion sneakers for style-conscious men",
          description: "Fashion-forward sneakers with unique designs and premium materials for style statements.",
          specifications: {
            Material: "Premium Materials",
            Style: "Fashion",
            CareInstructions: "Special care",
            Size: "6-12 UK",
            Color: "Fashion colors",
            Quality: "Fashion Grade"
          },
          availability: "In Stock",
          category: "footwear-men-casual",
          tags: ["Fashion", "Sneakers", "Trendy", "Style", "Shoes"]
        },
        {
          id: 100,
          title: "Men's Driving Shoes",
          image: PLACEHOLDER_IMAGES.mensShoes,
          images: [PLACEHOLDER_IMAGES.mensShoes, PLACEHOLDER_IMAGES.mensShoes],
          alt: "Men's Driving Shoes",
          shortDescription: "Comfortable driving shoes with flexible soles",
          description: "Specialized driving shoes with thin, flexible soles for better pedal feel and control.",
          specifications: {
            Material: "Leather",
            Style: "Driving",
            CareInstructions: "Leather care",
            Size: "6-12 UK",
            Color: "Driving colors",
            Quality: "Specialized Grade"
          },
          availability: "In Stock",
          category: "footwear-men-casual",
          tags: ["Driving", "Flexible", "Comfort", "Specialized", "Shoes"]
        }
      ]
    },
    women: {
      casualShoes: [
        {
          id: 101,
          title: "Women's Fashion Sneakers",
          image: PLACEHOLDER_IMAGES.womensShoes,
          images: [PLACEHOLDER_IMAGES.womensShoes, PLACEHOLDER_IMAGES.womensShoes],
          alt: "Women's Fashion Sneakers",
          shortDescription: "Trendy sneakers for women",
          description: "Fashionable sneakers that combine style and comfort for everyday wear.",
          specifications: {
            Material: "Synthetic and Fabric",
            Style: "Casual",
            CareInstructions: "Wipe clean",
            Size: "3-8 UK",
            Color: "White, Pink, Black, Multicolor",
            Quality: "Premium Grade"
          },
          availability: "In Stock",
          category: "footwear-women-casual",
          tags: ["Sneakers", "Fashion", "Comfort", "Trendy", "Shoes"]
        },
        // Additional women's casual shoes to reach 10+
        {
          id: 102,
          title: "Women's Ballet Flats",
          image: PLACEHOLDER_IMAGES.womensShoes,
          images: [PLACEHOLDER_IMAGES.womensShoes, PLACEHOLDER_IMAGES.womensShoes],
          alt: "Women's Ballet Flats",
          shortDescription: "Elegant ballet flats for women",
          description: "Classic ballet flats that offer feminine style and comfort for various occasions.",
          specifications: {
            Material: "Leather or Synthetic",
            Style: "Casual",
            CareInstructions: "Wipe clean",
            Size: "3-8 UK",
            Color: "Various colors",
            Quality: "Casual Grade"
          },
          availability: "In Stock",
          category: "footwear-women-casual",
          tags: ["Ballet Flats", "Elegant", "Feminine", "Classic", "Shoes"]
        },
        {
          id: 103,
          title: "Women's Loafers",
          image: PLACEHOLDER_IMAGES.womensShoes,
          images: [PLACEHOLDER_IMAGES.womensShoes, PLACEHOLDER_IMAGES.womensShoes],
          alt: "Women's Loafers",
          shortDescription: "Sophisticated loafers for women",
          description: "Smart casual loafers that combine comfort with sophisticated style.",
          specifications: {
            Material: "Genuine Leather",
            Style: "Smart Casual",
            CareInstructions: "Leather care",
            Size: "3-8 UK",
            Color: "Neutral colors",
            Quality: "Premium Grade"
          },
          availability: "In Stock",
          category: "footwear-women-casual",
          tags: ["Loafers", "Sophisticated", "Smart Casual", "Comfort", "Shoes"]
        },
        {
          id: 104,
          title: "Women's Espadrilles",
          image: PLACEHOLDER_IMAGES.womensShoes,
          images: [PLACEHOLDER_IMAGES.womensShoes, PLACEHOLDER_IMAGES.womensShoes],
          alt: "Women's Espadrilles",
          shortDescription: "Summer espadrilles for women",
          description: "Lightweight espadrilles perfect for summer outfits and warm weather.",
          specifications: {
            Material: "Canvas and Jute",
            Style: "Summer Casual",
            CareInstructions: "Spot clean",
            Size: "3-8 UK",
            Color: "Summer colors",
            Quality: "Summer Grade"
          },
          availability: "In Stock",
          category: "footwear-women-casual",
          tags: ["Espadrilles", "Summer", "Lightweight", "Vacation", "Shoes"]
        },
        {
          id: 105,
          title: "Women's Mules",
          image: PLACEHOLDER_IMAGES.womensShoes,
          images: [PLACEHOLDER_IMAGES.womensShoes, PLACEHOLDER_IMAGES.womensShoes],
          alt: "Women's Mules",
          shortDescription: "Trendy mules for easy wear",
          description: "Fashionable mules that offer style and convenience for quick outings.",
          specifications: {
            Material: "Various materials",
            Style: "Fashion Casual",
            CareInstructions: "Material specific",
            Size: "3-8 UK",
            Color: "Fashion colors",
            Quality: "Fashion Grade"
          },
          availability: "In Stock",
          category: "footwear-women-casual",
          tags: ["Mules", "Trendy", "Convenient", "Fashion", "Shoes"]
        },
        {
          id: 106,
          title: "Women's Slip-on Sneakers",
          image: PLACEHOLDER_IMAGES.womensShoes,
          images: [PLACEHOLDER_IMAGES.womensShoes, PLACEHOLDER_IMAGES.womensShoes],
          alt: "Women's Slip-on Sneakers",
          shortDescription: "Convenient slip-on sneakers for women",
          description: "Easy-to-wear slip-on sneakers that combine comfort with casual style.",
          specifications: {
            Material: "Textile and Synthetic",
            Style: "Casual",
            CareInstructions: "Machine washable",
            Size: "3-8 UK",
            Color: "Various colors",
            Quality: "Casual Grade"
          },
          availability: "In Stock",
          category: "footwear-women-casual",
          tags: ["Slip-on", "Sneakers", "Convenient", "Comfort", "Shoes"]
        },
        {
          id: 107,
          title: "Women's Fashion Sandals",
          image: PLACEHOLDER_IMAGES.womensShoes,
          images: [PLACEHOLDER_IMAGES.womensShoes, PLACEHOLDER_IMAGES.womensShoes],
          alt: "Women's Fashion Sandals",
          shortDescription: "Stylish sandals for warm weather",
          description: "Fashionable sandals perfect for summer and warm climate casual wear.",
          specifications: {
            Material: "Leather or Synthetic",
            Style: "Summer Casual",
            CareInstructions: "Wipe clean",
            Size: "3-8 UK",
            Color: "Summer colors",
            Quality: "Casual Grade"
          },
          availability: "In Stock",
          category: "footwear-women-casual",
          tags: ["Sandals", "Fashion", "Summer", "Warm Weather", "Shoes"]
        },
        {
          id: 108,
          title: "Women's Platform Sneakers",
          image: PLACEHOLDER_IMAGES.womensShoes,
          images: [PLACEHOLDER_IMAGES.womensShoes, PLACEHOLDER_IMAGES.womensShoes],
          alt: "Women's Platform Sneakers",
          shortDescription: "Trendy platform sneakers for height and style",
          description: "Fashion-forward platform sneakers that add height while maintaining comfort.",
          specifications: {
            Material: "Synthetic and Rubber",
            Style: "Fashion",
            CareInstructions: "Wipe clean",
            Size: "3-8 UK",
            Color: "Fashion colors",
            Quality: "Fashion Grade"
          },
          availability: "In Stock",
          category: "footwear-women-casual",
          tags: ["Platform", "Sneakers", "Trendy", "Height", "Shoes"]
        },
        {
          id: 109,
          title: "Women's Oxford Shoes",
          image: PLACEHOLDER_IMAGES.womensShoes,
          images: [PLACEHOLDER_IMAGES.womensShoes, PLACEHOLDER_IMAGES.womensShoes],
          alt: "Women's Oxford Shoes",
          shortDescription: "Classic Oxford shoes for women",
          description: "Timeless Oxford shoes that offer sophisticated style for smart casual occasions.",
          specifications: {
            Material: "Leather",
            Style: "Smart Casual",
            CareInstructions: "Leather care",
            Size: "3-8 UK",
            Color: "Classic colors",
            Quality: "Premium Grade"
          },
          availability: "In Stock",
          category: "footwear-women-casual",
          tags: ["Oxford", "Classic", "Sophisticated", "Smart Casual", "Shoes"]
        },
        {
          id: 110,
          title: "Women's Fashion Loafers",
          image: PLACEHOLDER_IMAGES.womensShoes,
          images: [PLACEHOLDER_IMAGES.womensShoes, PLACEHOLDER_IMAGES.womensShoes],
          alt: "Women's Fashion Loafers",
          shortDescription: "Stylish fashion loafers for women",
          description: "Contemporary loafers with fashion-forward details and comfortable fit.",
          specifications: {
            Material: "Various materials",
            Style: "Fashion Casual",
            CareInstructions: "Material specific",
            Size: "3-8 UK",
            Color: "Fashion colors",
            Quality: "Fashion Grade"
          },
          availability: "In Stock",
          category: "footwear-women-casual",
          tags: ["Fashion", "Loafers", "Contemporary", "Comfort", "Shoes"]
        }
      ]
    },
    kids: {
      sportsShoes: [
        {
          id: 111,
          title: "Kids Sports Shoes",
          image: PLACEHOLDER_IMAGES.kidsShoes,
          images: [PLACEHOLDER_IMAGES.kidsShoes, PLACEHOLDER_IMAGES.kidsShoes],
          alt: "Kids Sports Shoes",
          shortDescription: "Comfortable sports shoes for children",
          description: "Durable and comfortable sports shoes designed specifically for active children.",
          specifications: {
            Material: "Mesh and Synthetic",
            Style: "Sports",
            CareInstructions: "Wipe clean",
            Size: "Child sizes 10-4",
            Color: "Multiple colors available",
            Quality: "Child-Safe Grade"
          },
          availability: "In Stock",
          category: "footwear-kids-sports",
          tags: ["Kids", "Sports", "Comfort", "Durable", "Shoes"]
        },
        // Additional kids sports shoes to reach 10+
        {
          id: 112,
          title: "Kids Running Shoes",
          image: PLACEHOLDER_IMAGES.kidsShoes,
          images: [PLACEHOLDER_IMAGES.kidsShoes, PLACEHOLDER_IMAGES.kidsShoes],
          alt: "Kids Running Shoes",
          shortDescription: "Lightweight running shoes for active kids",
          description: "Specially designed running shoes that support children's active lifestyle and growing feet.",
          specifications: {
            Material: "Breathable Mesh",
            Style: "Running",
            CareInstructions: "Wipe clean",
            Size: "Child sizes 10-4",
            Color: "Kids colors",
            Quality: "Child-Safe Grade"
          },
          availability: "In Stock",
          category: "footwear-kids-sports",
          tags: ["Kids", "Running", "Lightweight", "Active", "Shoes"]
        },
        {
          id: 113,
          title: "Kids Basketball Shoes",
          image: PLACEHOLDER_IMAGES.kidsShoes,
          images: [PLACEHOLDER_IMAGES.kidsShoes, PLACEHOLDER_IMAGES.kidsShoes],
          alt: "Kids Basketball Shoes",
          shortDescription: "Court shoes for young basketball players",
          description: "Supportive basketball shoes designed for children's court sports and activities.",
          specifications: {
            Material: "Synthetic and Mesh",
            Style: "Basketball",
            CareInstructions: "Wipe clean",
            Size: "Child sizes 10-4",
            Color: "Team colors",
            Quality: "Child-Safe Grade"
          },
          availability: "In Stock",
          category: "footwear-kids-sports",
          tags: ["Kids", "Basketball", "Court", "Supportive", "Shoes"]
        },
        {
          id: 114,
          title: "Kids Soccer Cleats",
          image: PLACEHOLDER_IMAGES.kidsShoes,
          images: [PLACEHOLDER_IMAGES.kidsShoes, PLACEHOLDER_IMAGES.kidsShoes],
          alt: "Kids Soccer Cleats",
          shortDescription: "Soccer cleats for young players",
          description: "Proper soccer cleats designed for children learning and playing soccer.",
          specifications: {
            Material: "Synthetic",
            Style: "Soccer",
            CareInstructions: "Brush clean",
            Size: "Child sizes 10-4",
            Color: "Soccer colors",
            Quality: "Child-Safe Grade"
          },
          availability: "In Stock",
          category: "footwear-kids-sports",
          tags: ["Kids", "Soccer", "Cleats", "Field", "Shoes"]
        },
        {
          id: 115,
          title: "Kids Training Shoes",
          image: PLACEHOLDER_IMAGES.kidsShoes,
          images: [PLACEHOLDER_IMAGES.kidsShoes, PLACEHOLDER_IMAGES.kidsShoes],
          alt: "Kids Training Shoes",
          shortDescription: "Versatile training shoes for active kids",
          description: "Multi-purpose training shoes suitable for various children's sports and activities.",
          specifications: {
            Material: "Durable Synthetic",
            Style: "Training",
            CareInstructions: "Wipe clean",
            Size: "Child sizes 10-4",
            Color: "Training colors",
            Quality: "Child-Safe Grade"
          },
          availability: "In Stock",
          category: "footwear-kids-sports",
          tags: ["Kids", "Training", "Versatile", "Multi-sport", "Shoes"]
        },
        {
          id: 116,
          title: "Kids Skate Shoes",
          image: PLACEHOLDER_IMAGES.kidsShoes,
          images: [PLACEHOLDER_IMAGES.kidsShoes, PLACEHOLDER_IMAGES.kidsShoes],
          alt: "Kids Skate Shoes",
          shortDescription: "Durable skate shoes for young skaters",
          description: "Tough skate shoes designed to withstand the demands of skateboarding and casual wear.",
          specifications: {
            Material: "Reinforced Synthetic",
            Style: "Skate",
            CareInstructions: "Wipe clean",
            Size: "Child sizes 10-4",
            Color: "Skate colors",
            Quality: "Durable Grade"
          },
          availability: "In Stock",
          category: "footwear-kids-sports",
          tags: ["Kids", "Skate", "Durable", "Reinforced", "Shoes"]
        },
        {
          id: 117,
          title: "Kids Hiking Shoes",
          image: PLACEHOLDER_IMAGES.kidsShoes,
          images: [PLACEHOLDER_IMAGES.kidsShoes, PLACEHOLDER_IMAGES.kidsShoes],
          alt: "Kids Hiking Shoes",
          shortDescription: "Outdoor hiking shoes for adventurous kids",
          description: "Sturdy hiking shoes designed for children's outdoor adventures and nature exploration.",
          specifications: {
            Material: "Water-resistant Materials",
            Style: "Hiking",
            CareInstructions: "Brush clean",
            Size: "Child sizes 10-4",
            Color: "Outdoor colors",
            Quality: "Outdoor Grade"
          },
          availability: "In Stock",
          category: "footwear-kids-sports",
          tags: ["Kids", "Hiking", "Outdoor", "Adventure", "Shoes"]
        },
        {
          id: 118,
          title: "Kids Tennis Shoes",
          image: PLACEHOLDER_IMAGES.kidsShoes,
          images: [PLACEHOLDER_IMAGES.kidsShoes, PLACEHOLDER_IMAGES.kidsShoes],
          alt: "Kids Tennis Shoes",
          shortDescription: "Court shoes for young tennis players",
          description: "Specialized tennis shoes with proper support for children's court sports.",
          specifications: {
            Material: "Breathable Synthetic",
            Style: "Tennis",
            CareInstructions: "Wipe clean",
            Size: "Child sizes 10-4",
            Color: "Court colors",
            Quality: "Sports Grade"
          },
          availability: "In Stock",
          category: "footwear-kids-sports",
          tags: ["Kids", "Tennis", "Court", "Support", "Shoes"]
        },
        {
          id: 119,
          title: "Kids Cross Training Shoes",
          image: PLACEHOLDER_IMAGES.kidsShoes,
          images: [PLACEHOLDER_IMAGES.kidsShoes, PLACEHOLDER_IMAGES.kidsShoes],
          alt: "Kids Cross Training Shoes",
          shortDescription: "Versatile cross training shoes for kids",
          description: "Adaptable training shoes suitable for various children's sports and physical activities.",
          specifications: {
            Material: "Flexible Synthetic",
            Style: "Cross Training",
            CareInstructions: "Wipe clean",
            Size: "Child sizes 10-4",
            Color: "Training colors",
            Quality: "Versatile Grade"
          },
          availability: "In Stock",
          category: "footwear-kids-sports",
          tags: ["Kids", "Cross Training", "Versatile", "Flexible", "Shoes"]
        },
        {
          id: 120,
          title: "Kids Athletic Sneakers",
          image: PLACEHOLDER_IMAGES.kidsShoes,
          images: [PLACEHOLDER_IMAGES.kidsShoes, PLACEHOLDER_IMAGES.kidsShoes],
          alt: "Kids Athletic Sneakers",
          shortDescription: "All-purpose athletic sneakers for kids",
          description: "Comfortable athletic sneakers suitable for various sports and everyday active wear.",
          specifications: {
            Material: "Breathable Materials",
            Style: "Athletic",
            CareInstructions: "Wipe clean",
            Size: "Child sizes 10-4",
            Color: "Athletic colors",
            Quality: "Athletic Grade"
          },
          availability: "In Stock",
          category: "footwear-kids-sports",
          tags: ["Kids", "Athletic", "Sneakers", "All-purpose", "Shoes"]
        }
      ]
    }
  },

  // Continue with Fabrics, Home Textile, and Electronics categories...
  // For brevity, I'll show the structure and you can continue the pattern

  // Fabrics Category - 20+ products
  fabrics: {
    garmentFabrics: {
      cotton: [
        {
          id: 121,
          title: "Premium Cotton Fabric Roll",
          image: PLACEHOLDER_IMAGES.cottonFabric,
          images: [PLACEHOLDER_IMAGES.cottonFabric, PLACEHOLDER_IMAGES.cottonFabric],
          alt: "Premium Cotton Fabric Roll",
          shortDescription: "High-quality cotton fabric for garment manufacturing",
          description: "Premium quality cotton fabric suitable for various clothing applications with excellent durability.",
          specifications: {
            Material: "100% Cotton",
            Width: "44-45 inches",
            Weight: "Medium",
            Usage: "Garment Manufacturing",
            Color: "Multiple colors available",
            Quality: "Export Grade A"
          },
          availability: "In Stock",
          category: "fabrics-garment-cotton",
          tags: ["Cotton", "Premium", "Garment", "Durable", "Fabric"]
        },
        // Add 9 more cotton fabric products...
      ],
      denim: [
        {
          id: 131,
          title: "Stretch Denim Fabric",
          image: PLACEHOLDER_IMAGES.denimFabric,
          images: [PLACEHOLDER_IMAGES.denimFabric, PLACEHOLDER_IMAGES.denimFabric],
          alt: "Stretch Denim Fabric",
          shortDescription: "Comfortable stretch denim for jeans manufacturing",
          description: "High-quality stretch denim fabric perfect for modern jeans and denim wear.",
          specifications: {
            Material: "Cotton with Elastane",
            Width: "58-60 inches",
            Weight: "Heavy",
            Usage: "Jeans Manufacturing",
            Color: "Various denim shades",
            Quality: "Export Grade A"
          },
          availability: "In Stock",
          category: "fabrics-garment-denim",
          tags: ["Denim", "Stretch", "Jeans", "Comfort", "Fabric"]
        },
        // Add 9 more denim fabric products...
      ]
    },
    homeTextileFabrics: {
      curtain: [
        {
          id: 141,
          title: "Heavy Curtain Fabric",
          image: PLACEHOLDER_IMAGES.curtain,
          images: [PLACEHOLDER_IMAGES.curtain, PLACEHOLDER_IMAGES.curtain],
          alt: "Heavy Curtain Fabric",
          shortDescription: "Dense fabric for premium curtains",
          description: "Heavy-duty curtain fabric that provides excellent light blocking and durability.",
          specifications: {
            Material: "Polyester Blend",
            Width: "54 inches",
            Weight: "Heavy",
            Usage: "Curtain Manufacturing",
            Color: "Multiple colors and patterns",
            Quality: "Premium Grade"
          },
          availability: "In Stock",
          category: "fabrics-hometextile-curtain",
          tags: ["Curtain", "Heavy", "Durable", "Light Blocking", "Fabric"]
        },
        // Add 9 more curtain fabric products...
      ]
    }
  },

  // Home Textile Category - 20+ products
  homeTextile: {
    bedsheets: [
      {
        id: 151,
        title: "Premium Cotton Bedsheet Set",
        image: PLACEHOLDER_IMAGES.bedsheet,
        images: [PLACEHOLDER_IMAGES.bedsheet, PLACEHOLDER_IMAGES.bedsheet],
        alt: "Premium Cotton Bedsheet Set",
        shortDescription: "Luxury cotton bedsheet set with pillow covers",
        description: "Complete bedsheet set made from premium cotton with matching pillow covers for a coordinated look.",
        specifications: {
          Material: "100% Cotton",
          SetIncludes: "Bedsheet, 2 Pillow Covers",
          Sizes: "Single, Double, King, Super King",
          ThreadCount: "200-400",
          Color: "Multiple colors and patterns",
          Quality: "Premium Grade"
        },
        availability: "In Stock",
        category: "hometextile-bedsheets",
        tags: ["Bedsheet", "Cotton", "Luxury", "Set", "Home Textile"]
      },
      // Add 9 more bedsheet products...
    ],
    curtains: [
      {
        id: 161,
        title: "Designer Ready-Made Curtains",
        image: PLACEHOLDER_IMAGES.curtain,
        images: [PLACEHOLDER_IMAGES.curtain, PLACEHOLDER_IMAGES.curtain],
        alt: "Designer Ready-Made Curtains",
        shortDescription: "Elegant ready-made curtains for home decor",
        description: "Beautiful ready-made curtains that add elegance to any room with various design options.",
        specifications: {
          Material: "Polyester Blend",
          Sizes: "Various standard sizes",
          Features: "Light filtering, Thermal insulation",
          Color: "Multiple colors and patterns",
          Quality: "Premium Grade"
        },
        availability: "In Stock",
        category: "hometextile-curtains",
        tags: ["Curtains", "Ready-Made", "Designer", "Elegant", "Home Textile"]
      },
      // Add 9 more curtain products...
    ]
  },

  // Electronics & Appliances Category - 30+ products
  electronics: {
    ledLights: [
      {
        id: 171,
        title: "LED Panel Lights",
        image: PLACEHOLDER_IMAGES.ledLights,
        images: [PLACEHOLDER_IMAGES.ledLights, PLACEHOLDER_IMAGES.ledLights],
        alt: "LED Panel Lights",
        shortDescription: "Energy-efficient LED panel lights",
        description: "Modern LED panel lights that provide excellent illumination while being energy efficient.",
        specifications: {
          Type: "LED Panel",
          Wattage: "18W, 24W, 36W",
          ColorTemperature: "Warm White, Cool White",
          Lifespan: "50,000 hours",
          Certification: "CE, ROHS",
          Quality: "Premium Grade"
        },
        availability: "In Stock",
        category: "electronics-ledlights",
        tags: ["LED", "Energy Efficient", "Modern", "Panel Lights", "Electronics"]
      },
      // Add 9 more LED light products...
    ],
    homeAppliances: [
      {
        id: 181,
        title: "Table Fan with Remote",
        image: PLACEHOLDER_IMAGES.homeAppliances,
        images: [PLACEHOLDER_IMAGES.homeAppliances, PLACEHOLDER_IMAGES.homeAppliances],
        alt: "Table Fan with Remote",
        shortDescription: "Modern table fan with remote control",
        description: "Feature-rich table fan with remote control, multiple speed settings, and oscillation.",
        specifications: {
          Type: "Table Fan",
          Power: "45W",
          SpeedSettings: "3",
          Features: "Remote Control, Oscillation, Timer",
          Certification: "CE, ISO",
          Quality: "Premium Grade"
        },
        availability: "In Stock",
        category: "electronics-homeappliances",
        tags: ["Fan", "Remote", "Modern", "Energy Efficient", "Electronics"]
      },
      // Add 9 more home appliance products...
    ],
    kitchenAppliances: [
      {
        id: 191,
        title: "Electric Water Kettle",
        image: PLACEHOLDER_IMAGES.kitchenAppliances,
        images: [PLACEHOLDER_IMAGES.kitchenAppliances, PLACEHOLDER_IMAGES.kitchenAppliances],
        alt: "Electric Water Kettle",
        shortDescription: "Fast-boiling electric water kettle",
        description: "Efficient electric water kettle with automatic shut-off and boil-dry protection.",
        specifications: {
          Capacity: "1.7 Liters",
          Power: "1500W",
          Material: "Stainless Steel",
          Features: "Auto Shut-off, Boil-dry Protection",
          Certification: "CE, GS",
          Quality: "Premium Grade"
        },
        availability: "In Stock",
        category: "electronics-kitchenappliances",
        tags: ["Kettle", "Electric", "Fast Boiling", "Safe", "Electronics"]
      },
      // Add 9 more kitchen appliance products...
    ]
  }
};

// Flatten all products for featured collections
const flattenProducts = (data) => {
  const products = [];
  
  const traverse = (obj, path = '') => {
    for (const key in obj) {
      if (Array.isArray(obj[key])) {
        // Add products from arrays
        products.push(...obj[key]);
      } else if (typeof obj[key] === 'object') {
        // Recursively traverse nested objects
        traverse(obj[key], `${path}${key}-`);
      }
    }
  };
  
  traverse(data);
  return products;
};

// Generate featured collections from all products
export const featuredCollections = flattenProducts(productData);

// Product Categories Data matching header structure
export const productCategories = [
  {
    id: 1,
    name: "Garments",
    slug: "garments",
    image: PLACEHOLDER_IMAGES.garmentsCategory,
    description: "Premium quality clothing for men, women, and children",
    productCount: featuredCollections.filter(p => p.category.includes('garments')).length,
    subcategories: ["Men's Wear", "Women's Wear", "Kids Wear", "Shirts", "Dresses", "Casual Wear"],
    featured: true
  },
  {
    id: 2,
    name: "Footwear",
    slug: "footwear",
    image: PLACEHOLDER_IMAGES.footwearCategory,
    description: "Comfortable and stylish footwear for all ages",
    productCount: featuredCollections.filter(p => p.category.includes('footwear')).length,
    subcategories: ["Sports Shoes", "Casual Shoes", "Formal Shoes", "Sandals", "Kids Shoes"],
    featured: true
  },
  {
    id: 3,
    name: "Fabrics",
    slug: "fabrics",
    image: PLACEHOLDER_IMAGES.fabricsCategory,
    description: "High-quality fabrics for garment and home textile manufacturing",
    productCount: featuredCollections.filter(p => p.category.includes('fabrics')).length,
    subcategories: ["Cotton Fabric", "Denim", "Linen", "Silk", "Synthetic", "Blended"],
    featured: true
  },
  {
    id: 4,
    name: "Home Textile",
    slug: "hometextile",
    image: PLACEHOLDER_IMAGES.homeTextileCategory,
    description: "Beautiful home textile products for modern living",
    productCount: featuredCollections.filter(p => p.category.includes('hometextile')).length,
    subcategories: ["Bedsheets", "Curtains", "Pillow Covers", "Cushions", "Table Linen"],
    featured: true
  },
  {
    id: 5,
    name: "Electronics & Appliances",
    slug: "electronics",
    image: PLACEHOLDER_IMAGES.electronicsCategory,
    description: "Modern electronic gadgets and home appliances",
    productCount: featuredCollections.filter(p => p.category.includes('electronics')).length,
    subcategories: ["LED Lights", "Home Appliances", "Kitchen Appliances", "Fans", "Heaters"],
    featured: true
  }
];


// Testimonials Data
export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Fashion Retailer, USA",
    text: "Maya Exports has been our trusted partner for over 5 years. Their product quality and timely delivery are exceptional. The attention to detail in their manufacturing process sets them apart from other suppliers.",
    avatar: PLACEHOLDER_IMAGES.avatar1,
    rating: 5,
    company: "Style Boutique Inc."
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Import Business Owner, UK",
    text: "Working with Maya Exports has transformed our business. Their diverse product range and reliable supply chain have helped us expand into new markets. The customer service team is always responsive and helpful.",
    avatar: PLACEHOLDER_IMAGES.avatar2,
    rating: 5,
    company: "Global Imports Ltd."
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    position: "Boutique Owner, Canada",
    text: "The quality of products from Maya Exports consistently exceeds our expectations. Their commitment to sustainable practices and ethical manufacturing makes them our preferred supplier for all our fashion needs.",
    avatar: PLACEHOLDER_IMAGES.avatar3,
    rating: 5,
    company: "Elegance Boutique"
  },
  {
    id: 4,
    name: "David Thompson",
    position: "Department Store Manager, Australia",
    text: "Maya Exports understands the international market demands perfectly. Their products are always on-trend and meet the quality standards our customers expect. A truly reliable global partner.",
    avatar: PLACEHOLDER_IMAGES.avatar4,
    rating: 5,
    company: "Metro Department Stores"
  }
];

// Partners Data
export const partners = [
  {
    id: 1,
    name: "Global Fashion Inc.",
    logo: PLACEHOLDER_IMAGES.partner1,
    alt: "Global Fashion Inc.",
    website: "#"
  },
  {
    id: 2,
    name: "Style Masters",
    logo: PLACEHOLDER_IMAGES.partner2,
    alt: "Style Masters",
    website: "#"
  },
  {
    id: 3,
    name: "Elite Wear Group",
    logo: PLACEHOLDER_IMAGES.partner3,
    alt: "Elite Wear Group",
    website: "#"
  },
  {
    id: 4,
    name: "Trend Setters Ltd.",
    logo: PLACEHOLDER_IMAGES.partner4,
    alt: "Trend Setters Ltd.",
    website: "#"
  },
  {
    id: 5,
    name: "Urban Style Co.",
    logo: PLACEHOLDER_IMAGES.partner5,
    alt: "Urban Style Co.",
    website: "#"
  }
];

// Statistics Data
export const statistics = [
  {
    number: "500+",
    label: "Happy Clients",
    icon: "fas fa-users",
    description: "Satisfied customers worldwide"
  },
  {
    number: "1000+",
    label: "Products",
    icon: "fas fa-tshirt",
    description: "Quality items in our catalog"
  },
  {
    number: "50+",
    label: "Countries",
    icon: "fas fa-globe",
    description: "Global reach and presence"
  },
  {
    number: "15+",
    label: "Years Experience",
    icon: "fas fa-award",
    description: "Industry expertise"
  }
];

// Services Data
export const services = [
  {
    title: "Custom Manufacturing",
    description: "Transform your unique designs into high-quality products with our bespoke manufacturing service. We work closely with you to create custom pieces that match your specifications.",
    icon: "fas fa-palette",
    features: ["Custom Designs", "Private Labeling", "Bulk Production", "Quality Control"]
  },
  {
    title: "Quality Assurance",
    description: "Rigorous quality control processes ensure that every product meets international standards for craftsmanship, materials, and finish.",
    icon: "fas fa-clipboard-check",
    features: ["Quality Checks", "Standards Compliance", "Material Testing", "Final Inspection"]
  },
  {
    title: "Global Logistics",
    description: "Seamless global logistics and distribution services to ensure your products reach their destination efficiently and on time.",
    icon: "fas fa-shipping-fast",
    features: ["Worldwide Shipping", "Inventory Management", "Fast Delivery", "Tracking Support"]
  }
];

// Export default for easier imports
export default {
  featuredCollections,
  productCategories,
  productDataByCategory: productData,
    partners,
    testimonials,
};

  // featuredCollections,
  // productCategories,
  // testimonials,
  // partners,
  // statistics,
  // services,
  // productDataByCategory