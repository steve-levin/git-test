import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { HomeShell } from '@/components/layout/HomeShell'
import { AppShell } from '@/components/layout/AppShell'
import { SolutionDetailShell } from '@/components/layout/SolutionDetailShell'
import ModernHomePage from '@/pages/home/ModernHomePage'
import ConservativeHomePage from '@/pages/home/ConservativeHomePage'
import BoldHomePage from '@/pages/home/BoldHomePage'
import PropertiesPage from '@/pages/PropertiesPage'
import SolutionsPage from '@/pages/SolutionsPage'
import SolutionDetailPage from '@/pages/SolutionDetailPage'
import AboutPage from '@/pages/AboutPage'
import TeamPage from '@/pages/TeamPage'
import ContactPage from '@/pages/ContactPage'
import TrianglePropertiesPage from '@/pages/TrianglePropertiesPage'
import FairHousingPage from '@/pages/FairHousingPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeShell activePage="home" />}>
          <Route index element={<ModernHomePage />} />
          <Route path="modern" element={<ModernHomePage />} />
          <Route path="conservative" element={<ConservativeHomePage />} />
          <Route path="bold" element={<BoldHomePage />} />
        </Route>

        <Route element={<AppShell activePage="properties" variant="interior" pageTitle="Properties" />}>
          <Route path="properties" element={<PropertiesPage />} />
        </Route>

        <Route element={<AppShell activePage="solutions" variant="interior" pageTitle="Solutions" />}>
          <Route path="solutions" element={<SolutionsPage />} />
        </Route>

        <Route element={<SolutionDetailShell />}>
          <Route path="solutions/:slug" element={<SolutionDetailPage />} />
        </Route>

        <Route element={<AppShell activePage="about" variant="interior" pageTitle="About" />}>
          <Route path="about" element={<AboutPage />} />
        </Route>

        <Route element={<AppShell activePage="team" variant="interior" pageTitle="Team" />}>
          <Route path="team" element={<TeamPage />} />
        </Route>

        <Route element={<AppShell activePage="contact" variant="interior" pageTitle="Contact" />}>
          <Route path="contact" element={<ContactPage />} />
        </Route>

        <Route
          element={
            <AppShell activePage="triangle-properties" variant="interior" pageTitle="Triangle Properties" />
          }
        >
          <Route path="triangle-properties" element={<TrianglePropertiesPage />} />
        </Route>

        <Route element={<AppShell activePage="about" variant="interior" pageTitle="Fair Housing Notice" />}>
          <Route path="fair-housing" element={<FairHousingPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
