import AccountDetails from '../views/AccountDetails/AccountDetails';
import Cart from '../views/Cart/Cart';
import Checkout from '../views/Cart/Checkout';
import BuyChip from '../views/BuyChip/BuyChip';
import Landing from '../views/Landing/Landing';
import Exchange from '../views/Exchange/Exchange';
import { Congratulation } from '../views/Landing/Congratulation';
import About from '../views/Common/About';
import Contact from '../views/Common/Contact';
const InnerRoutes = [
  {
    path: '/',
    component: Landing
  },
  {
    path: '/account_details',
    component: AccountDetails
  },
  {
    path: '/exchange',
    component: Exchange
  },
  {
    path: '/congratulations/:token',
    component: Congratulation
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/checkout',
    component: Checkout
  },
  {
    path: '/buychip',
    component: BuyChip
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/contact',
    component: Contact
  }
  // { redirect: true, path: '/', to: '/account_details' }
];
export default InnerRoutes;
