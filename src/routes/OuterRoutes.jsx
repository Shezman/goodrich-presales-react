import Landing from '../views/Landing/Landing';
import Exchange from '../views/Exchange/Exchange';
import Congratulation from '../views/Landing/Congratulation';
import Otp from '../views/Landing/Otp';
import BuyChip from '../views/BuyChipInfo/BuyChip';

import Deposit from '../views/Deposit/Deposit';
import SuccessDeposit from '../views/Deposit/SuccessDeposit';
import About from '../views/Common/About';
import Contact from '../views/Common/Contact';
import Faq from '../views/Common/Faq';
import Login from '../views/Login/Login';
import Register from '../views/Register/Register';
import ForgotPassword from '../views/ForgotPassword/ForgotPassword';

const OuterRoutes = [
  {
    path: '/',
    component: Landing
  },
  {
    path: '/exchange',
    component: Exchange
  },

  {
    path: '/register',
    component: Register
  },

  {
    path: '/forgot_password',
    component: ForgotPassword
  },

  {
    path: '/login',
    component: Login
  },
  {
    path: '/congratulations/:token',
    component: Congratulation
  },
  {
    path: '/buychip',
    component: BuyChip
  },

  {
    path: '/deposit',
    component: Deposit
  },
  {
    path: '/success_deposit',
    component: SuccessDeposit
  },
  {
    path: '/faq',
    component: Faq
  },
  {
    path: '/otp',
    component: Otp
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/contact',
    component: Contact
  },

  { redirect: true, path: '/', to: '/' }
];
export default OuterRoutes;
