import {createBrowserRouter} from 'react-router-dom';
import HeroSectionRoute from './routes/app/public/hero-section';

export const createRouter = () => 
    createBrowserRouter([
       {
         path: "/",
         element: <HeroSectionRoute />,
       }
    ])