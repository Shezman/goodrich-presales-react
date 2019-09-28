import AccountDetails from '../views/AccountDetails/AccountDetails';
import Cart from '../views/Cart/Cart';
import Checkout from '../views/Cart/Checkout';
import BuyChip from '../views/BuyChip/BuyChip';
const InnerRoutes = [
  {
    path: '/account_details',
    component: AccountDetails
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
  { redirect: true, path: '/', to: '/account_details' }
];
export default InnerRoutes;
