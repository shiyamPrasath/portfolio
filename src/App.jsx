import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio'
import CaseStudy from './pages/CaseStudy'
import CaseStudy1 from './pages/BugaSura'

function App() {
  return (
    <BrowserRouter basename="/portfolio/">
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/case-study/:id" element={<CaseStudy />} />
        <Route path="/case-study-1/:id" element={<CaseStudy1 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
