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

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
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
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
