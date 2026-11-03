import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import Layout from './Layout.jsx'
import BoshSahifa from './BoshSahifa.jsx'
import Tolovlarim from './Tolovlarim.jsx'
import Guruhlarim from './Guruhlarim.jsx'
import Korsatgichlarim from './Korsatgichlarim.jsx'
import KorsatgichDetails from './KorsatgichDetails.jsx'
import Reyting from './Reyting.jsx'
import Dokon from './Dokon.jsx'
import QoshimchaDarslar from './QoshimchaDarslar.jsx'
import Sozlamalar from './Sozlamalar.jsx'

// Oldin routerga ulanmagan sahifalar (landing, talaba/admin paneli, kurslar, 404, xato sahifasi)
import App from './App.jsx'
import NajotTalim from './NajotTalim.jsx'
import StudentPanel from './StudentPanel.jsx'
import AdminPanel from './AdminPanel.jsx'
import Kurslar from './Kurslar.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'
import NotFoundPage from './NotFoundPage.jsx'
import ErrorBoundry from './ErrorBoundry.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorBoundry />,
    children: [
      { index: true, element: <BoshSahifa /> },
      { path: 'tolovlarim', element: <Tolovlarim /> },
      { path: 'guruhlarim', element: <Guruhlarim /> },
      { path: 'korsatgichlarim', element: <Korsatgichlarim /> },
      { path: 'korsatgichlarim/:id', element: <KorsatgichDetails /> },
      { path: 'reyting', element: <Reyting /> },
      { path: 'dokon', element: <Dokon /> },
      { path: 'qoshimcha-darslar', element: <QoshimchaDarslar /> },
      { path: 'sozlamalar', element: <Sozlamalar /> },
    ],
  },
  {
    // Najot Ta'lim landing sahifasi va undagi panellar
    path: '/najot-talim',
    errorElement: <ErrorBoundry />,
    children: [
      { index: true, element: <App /> },
      {
        element: <NajotTalim />,
        children: [
          { path: 'student', element: <StudentPanel /> },
          { path: 'admin', element: <ProtectedRoute><AdminPanel /></ProtectedRoute> },
          { path: 'kurslar', element: <Kurslar /> },
        ],
      },
    ],
  },
  { path: '*', element: <NotFoundPage /> },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
