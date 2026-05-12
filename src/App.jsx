import { useState } from 'react'
import Header from './components/Header'
import HomePage from './components/HomePage'
import AICreativePage from './components/AICreativePage'
import './App.css'

function App() {
  const [activeNav, setActiveNav] = useState('home')

  const handleNavChange = (navKey) => {
    setActiveNav(navKey)
  }

  return (
    <div className="app">
      <Header activeNav={activeNav} onNavChange={handleNavChange} />
      <main className="main-content">
        {activeNav === 'home' && <HomePage />}
        {activeNav === 'ai-creative' && <AICreativePage />}
        {activeNav === 'products' && <div className="page-placeholder">乘方页面</div>}
        {activeNav === 'materials' && <div className="page-placeholder">素材页面</div>}
        {activeNav === 'data' && <div className="page-placeholder">数据页面</div>}
        {activeNav === 'tools' && <div className="page-placeholder">工具页面</div>}
        {activeNav === 'finance' && <div className="page-placeholder">财务页面</div>}
        {activeNav === 'activity' && <div className="page-placeholder">活动页面</div>}
      </main>
    </div>
  )
}

export default App
