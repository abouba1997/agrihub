import { BgGreen1 } from "../assets";

// const ImageList = [
//   {
//     id: 1,
//     image: Food1,
//   },
//   {
//     id: 2,
//     image: Food2,
//   },
//   {
//     id: 3,
//     image: Food3,
//   },
//   {
//     id: 4,
//     image: Food4,
//   },
// ];

const BgImgStyle = {
  backgroundImage: `url(${BgGreen1})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
};

const NavbarLinks = [
  { id: 2, text: "Formations", path: "/formations" },
  { id: 1, text: "MarketPlace", path: "/marketplace" },
  { id: 5, text: "A propos de nous", path: "/about" },
  { id: 4, text: "Bussiness", path: "/business" },
];

export { BgImgStyle, NavbarLinks };
