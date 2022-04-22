import { v4 as uuidv4 } from "uuid";

const Products = [
  {
    id: uuidv4(),
    slug: "fall-limite",
    title: "Fall Limite Sneakers",
    titlethumb: 'Fall Limite',
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
    illo facere deserunt delectus maxime sit aliquam nihil a architecto
    veritatis saepe repellat quae ut perferendis tempore quisquam
    tenetur nemo illum?`,
    price: "250",
    img: [
      "/images/kanao/sliderProduct/image-product-1.jpg",
      "/images/kanao/sliderProduct/image-product-2.jpg",
      "/images/kanao/sliderProduct/image-product-3.jpg",
      "/images/kanao/sliderProduct/image-product-4.jpg",
    ],
    company: "sneaker company",
    pricedisc: '125',
  },
];

export default Products;
