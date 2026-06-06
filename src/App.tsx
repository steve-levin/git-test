import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { ServiceDetailLayout } from '@/components/layout/ServiceDetailLayout'
import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'
import PropertiesPage from '@/pages/PropertiesPage'
import ServicesPage from '@/pages/ServicesPage'
import ServiceDetailPage from '@/pages/ServiceDetailPage'
import NewsPage from '@/pages/NewsPage'
import StaffPage from '@/pages/StaffPage'
import ContactPage from '@/pages/ContactPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout activePage="home" variant="home" />}>
          <Route index element={<HomePage />} />
        </Route>

        <Route element={<Layout activePage="about" variant="interior" pageTitle="About" />}>
          <Route path="about" element={<AboutPage />} />
        </Route>

        <Route element={<Layout activePage="properties" variant="interior" pageTitle="Properties" />}>
          <Route path="properties" element={<PropertiesPage />} />
        </Route>

        <Route element={<Layout activePage="services" variant="interior" pageTitle="Services" />}>
          <Route path="services" element={<ServicesPage />} />
        </Route>

        <Route element={<ServiceDetailLayout />}>
          <Route path="services/:slug" element={<ServiceDetailPage />} />
        </Route>

        <Route element={<Layout activePage="news" variant="interior" pageTitle="News" />}>
          <Route path="news" element={<NewsPage />} />
        </Route>

        <Route element={<Layout activePage="staff" variant="interior" pageTitle="Staff" />}>
          <Route path="staff" element={<StaffPage />} />
        </Route>

        <Route element={<Layout activePage="contact" variant="interior" pageTitle="Contact" />}>
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
