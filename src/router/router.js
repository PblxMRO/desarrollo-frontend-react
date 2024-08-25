import { createBrowserRouter } from 'react-router-dom';
import Default from '../screens/Default';
import Product from '../screens/Product';
import LandingPage from '../screens/LandingPage';
import Login from '../screens/Forms/LoginForm';
import App from '../App'

const basename = process.env.NODE_ENV.trim() === 'production' ? '/desarrollo-frontend-react' : '/';
console.log(process.env.NODE_ENV.trim(), basename);

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <LandingPage />,
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