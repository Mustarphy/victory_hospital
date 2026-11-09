import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import PageNotice from './components/PageNotice.jsx'
import MainLayout from './layouts/MainLayout.jsx'
import AboutOverview from './pages/about/AboutOverview.jsx'
import Leadership from './pages/about/Leadership.jsx'
import MissionVisionValues from './pages/about/MissionVisionValues.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'

// Health articles are loaded on demand so their content does not weigh down other pages.
const lazyPage = (load) => async () => ({ Component: (await load()).default })

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    // Shown only while a lazily loaded page is fetched on first visit.
    HydrateFallback: () => null,
    children: [
      { index: true, element: <Home /> },
      { path: 'services', element: <Services /> },
      // The FAQ lives on the home page; keep old /faq links working.
      { path: 'faq', element: <Navigate to="/#faq" replace /> },
      { path: 'contact', element: <Contact /> },
      {
        path: 'about',
        children: [
          { index: true, element: <AboutOverview /> },
          { path: 'mission-vision-values', element: <MissionVisionValues /> },
          { path: 'leadership', element: <Leadership /> },
        ],
      },
      {
        path: 'health-resources',
        children: [
          { index: true, lazy: lazyPage(() => import('./pages/HealthResources.jsx')) },
          { path: ':slug', lazy: lazyPage(() => import('./pages/HealthArticle.jsx')) },
        ],
      },
      // Testimonials was replaced by Health & Wellness; keep old links working.
      { path: 'testimonials', element: <Navigate to="/health-resources" replace /> },
      {
        path: '*',
        element: (
          <PageNotice
            title="Page not found"
            message="The page you are looking for does not exist. If you need help, please call our 24-hour hotline."
          />
        ),
      },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
