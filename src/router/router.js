import { createBrowserRouter } from 'react-router-dom';
import Default from '../screens/Default';
import Product from '../screens/Product';
import Home from '../screens/Home';
import Login from '../screens/Forms/LoginForm';
import App from '../App'

const basename = process.env.NODE_ENV === 'production' ? '/desarrollo-frontend-react' : '/';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/default',
                element: <Default />,
            },
            {
                path: '/products',
                element: <Product />,
            }
        ]
    }

],
    {
        basename: basename
    }
);

export default routes;