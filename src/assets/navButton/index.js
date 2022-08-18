import home from "./IconHome.png";
import feed from "./iconFeed.png";
import official from "./iconOfficial.png";
import transaction from "./iconTransaction.png"
import wishlist from "./iconWishlist.png";

const icons = () => [
  {
    img: home,
    type: 'Menu'
  },
  {
    img: feed,
    type: "Feed"
  },
  {
    img: official,
    type: "Oficial"
  },
  {
    img: transaction,
    type: "Transaction"
  },
  {
    img: wishlist,
    type: "Wishlist"
  }
]


// const icon = () => [
//   {
//     id: 1,
//     src: "./icon_home",
//     text: "testes",
//   },
//   {
//     id: 2,
//     src: "./iconFeed",
//     text: "testes",
//   },
//   {
//     id: 3,
//     src: "./iconOfficial",
//     text: "testes",
//   },
//   {
//     id: 4,
//     src: "./iconWishlist",
//     text: "testes",
//   },
//   {
//     id: 5,
//     src: "./iconTransaction",
//     text: "testes",
//   },
// ];

export default icons;