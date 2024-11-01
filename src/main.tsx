import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.scss';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './i18n';
import Layout from './layout';
import HomePage from './pages/home';
import ProjectPage from './pages/project';
import AboutPage from './pages/about';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/project",
        element: <ProjectPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ]
  }

]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </StrictMode>,
)
