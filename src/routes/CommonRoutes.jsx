import Exchange from "../views/Exchange/Exchange";

import BuyChip from "../views/BuyChip/BuyChip";
import Cart from "../views/Cart/Cart";

import About from "../views/Common/About";
import Contact from "../views/Common/Contact";

const CommonRoutes = [
  {
    path: "/exchange",
    component: Exchange
  },

  {
    path: "/buychip",
    component: BuyChip
  },
  {
    path: "/cart",
    component: Cart
  },

  {
    path: "/about",
    component: About
  },
  {
    path: "/contact",
    component: Contact
  },

  { redirect: true, path: "/", to: "/" }
];
export default CommonRoutes;
