import config from '~/config';

import Home from '~/pages/Home';
import Product from '~/pages/Product';
import Contact from '~/pages/Contact';
import Cart from '~/pages/Cart';
import Login from '~/pages/Login/Login';
import Register from '~/pages/Register';
import Search from '~/pages/Search';
import ProductDetail from '~/pages/ProductDetail';
const puplicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.products,
        component: Product,
    },
    {
        path: config.routes.contact,
        component: Contact,
    },
    {
        path: config.routes.cart,
        component: Cart,
    },
    {
        path: config.routes.login,
        component: Login,
    },
    {
        path: config.routes.register,
        component: Register,
    },
    {
        path: config.routes.search,
        component: Search,
    },
    {
        path: config.routes.detail,
        component: ProductDetail,
    },
];
const privateRoutes = [];
export { puplicRoutes, privateRoutes };
