import hero_background from "./hero_background.jpg";
import kids_collection from "./Kids_Collection.jpg";
import mens_collection from "./Mens_Collection.jpg";
import womens_collection from "./Womens_collection.jpg";
import accessories from "./accesories.jpg"; 
import logo from "./logo.webp";
import promise_image from "./promise_image.webp"

// Men's
import mens_tshirt from "./mens_tshirt.jpg";
import mens_shirt from "./mens_shirt.jpg";
import mens_jeans from "./mens_jeans.jpg";
import mens_trousers from "./mens_trousers.jpg";
import mens_lowers from "./mens_lowers.jpg";
import mens_hoodie from "./mens_hoodie.jpg";
import mens_footwear from "./mens_footwear.jpg";

// Women's
import women_top from "./women_top.jpg";
import women_tshirt from "./women_tshirt.jpg";
import women_jeans from "./women_jeans.jpg";
import women_dress from "./women_dress.jpg";
import women_kurti from "./women_kurti.jpg";
import women_handbag from "./women_handbag.jpg";
import women_footwear from "./women_footwear.jpg";

// Kids
import kids_boys_tshirt from "./kids_boys_tshirt.jpg";
import kids_girls_dress from "./kids_girls_dress.jpg";
import kids_jeans from "./kids_jeans.jpg";
import kids_shorts from "./kids_shorts.jpg";
import kids_ethnic from "./kids_ethnic.jpg";
import kids_footwear from "./kids_footwear.jpg";
import kids_accessories from "./kids_accessories.jpg";



export const assets = {
  hero_background,
  kids_collection,
  mens_collection,
  womens_collection,
  mens_tshirt,
  mens_shirt, 
  mens_jeans,
  mens_trousers,
  mens_lowers,
  mens_hoodie,
  mens_footwear,
  women_dress,
  women_tshirt,
  women_jeans,
  women_top,
  women_kurti,
  women_handbag,
  women_footwear,
  kids_boys_tshirt,
  kids_girls_dress,
  kids_jeans,
  kids_shorts,
  kids_ethnic,
  kids_footwear,
  kids_accessories,
  accessories,
  logo,
  promise_image
} 

export const collectionsdata = [
  {
    id: 1,
    title: "Men's Collection",
    description: "Upgrade your wardrobe with premium styles for every occasion.",
    categories: [
      {
        id: 1,
        name: "T-Shirts",
        image: assets.mens_tshirt,
        productCount: 120,
      },
      {
        id: 2,
        name: "Shirts",
        image: assets.mens_shirt,
        productCount: 95,
      },
      {
        id: 3,
        name: "Jeans",
        image: assets.mens_jeans,
        productCount: 82,
      },
      {
        id: 4,
        name: "Trousers",
        image: assets.mens_trousers,
        productCount: 67,
      },
      {
        id: 5,
        name: "Lowers",
        image: assets.mens_lowers,
        productCount: 54,
      },
      {
        id: 6,
        name: "Hoodies",
        image: assets.mens_hoodie,
        productCount: 46,
      },
      {
        id: 7,
        name: "Footwear",
        image: assets.mens_footwear,
        productCount: 91,
      },
    ],
  },

  {
    id: 2,
    title: "Women's Collection",
    description: "Explore elegant and trendy fashion for every season.",
    categories: [
      {
        id: 1,
        name: "Tops",
        image: assets.women_top,
        productCount: 110,
      },
      {
        id: 2,
        name: "T-Shirts",
        image: assets.women_tshirt,
        productCount: 88,
      },
      {
        id: 3,
        name: "Jeans",
        image: assets.women_jeans,
        productCount: 76,
      },
      {
        id: 4,
        name: "Dresses",
        image: assets.women_dress,
        productCount: 69,
      },
      {
        id: 5,
        name: "Kurtis",
        image: assets.women_kurti,
        productCount: 57,
      },
      {
        id: 6,
        name: "Handbags",
        image: assets.women_handbag,
        productCount: 35,
      },
      {
        id: 7,
        name: "Footwear",
        image: assets.women_footwear,
        productCount: 72,
      },
    ],
  },

  {
    id: 3,
    title: "Kids Collection",
    description: "Comfortable, colorful and stylish outfits for every little explorer.",
    categories: [
      {
        id: 1,
        name: "Boys T-Shirts",
        image: assets.kids_boys_tshirt,
        productCount: 64,
      },
      {
        id: 2,
        name: "Girls Dresses",
        image: assets.kids_girls_dress,
        productCount: 52,
      },
      {
        id: 3,
        name: "Jeans",
        image: assets.kids_jeans,
        productCount: 41,
      },
      {
        id: 4,
        name: "Shorts",
        image: assets.kids_shorts,
        productCount: 38,
      },
      {
        id: 5,
        name: "Ethnic Wear",
        image: assets.kids_ethnic,
        productCount: 29,
      },
      {
        id: 6,
        name: "Footwear",
        image: assets.kids_footwear,
        productCount: 33,
      },
      {
        id: 7,
        name: "Accessories",
        image: assets.kids_accessories,
        productCount: 21,
      },
    ],
  },
];