import { ListItemLinkType } from "../types/ListItemLinkType";

/** Icons */
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import CampaignIcon from '@mui/icons-material/Campaign';
import SettingsIcon from '@mui/icons-material/Settings';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ConstructionIcon from '@mui/icons-material/Construction';
import CardMembershipIcon from '@mui/icons-material/CardMembership';

import Customers from '../scenes/customers';
import Products from '../scenes/products';
import Sales from '../scenes/sales';
import Vendors from '../scenes/vendors';
import Transactions from '../scenes/transactions';
import Bloggers from '../scenes/bloggers';
import Announcements from '../scenes/announcements';
import Tools from '../scenes/tools';
import Managers from '../scenes/managers';
import Bots from '../scenes/bots';
import Settings from '../scenes/settings';
import Giftcards from '../scenes/giftcards';
import Subscriptions from '../scenes/subscriptions';

export const navItems: ListItemLinkType[] = [
    {
      icon: <ShoppingBagIcon />,
      name: 'Products',
      title: 'Products',
      to: '/products',
      component: <Products />,
    },
    {
      icon: <ReceiptLongIcon />,
      name: 'Sales',
      title: 'Sales',
      to: '/sales',
      component: <Sales />,
    },
    {
      icon: <StoreMallDirectoryIcon />,
      name: 'Vendors',
      title: 'Vendors',
      to: '/vendors',
      component: <Vendors />,
    },
    {
      icon: <SupervisorAccountIcon />,
      name: 'Customers',
      title: 'Customers',
      to: '/customers',
      component: <Customers />,
    },
    {
      icon: <PointOfSaleIcon />,
      name: 'Transactions',
      title: 'Transactions',
      to: '/transactions',
      component: <Transactions />,
    },
    {
      icon: <NewspaperIcon />,
      name: 'Bloggers',
      title: 'Bloggers',
      to: '/bloggers',
      component: <Bloggers />,
    },
    {
      icon: <CampaignIcon />,
      name: 'Announcements',
      title: 'Announcements',
      to: '/announcements',
      component: <Announcements />,
    },
    {
      icon: <CardGiftcardIcon />,
      name: 'Gift Cards',
      title: 'GiftCards',
      to: '/giftcards',
      component: <Giftcards />,
    },
    {
      icon: <CardMembershipIcon />,
      name: 'Subscriptions',
      title: 'Subscriptions',
      to: '/subscriptions',
      component: <Subscriptions />,
    },
    { isDivider: true },
    {
      icon: <ConstructionIcon />,
      name: 'Tools',
      title: 'Tools',
      to: '/tools',
      component: <Tools />,
    },
    {
      icon: <AdminPanelSettingsIcon />,
      name: 'Managers',
      title: 'Managers',
      to: '/managers',
      component: <Managers />,
    },
    {
      icon: <SmartToyIcon />,
      name: 'Bots',
      title: 'Bots',
      to: '/bots',
      component: <Bots />,
    },
    {
      icon: <SettingsIcon />,
      name: 'Settings',
      title: 'Settings',
      to: '/settings',
      component: <Settings />,
    },
  ];
