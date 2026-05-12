import { useState } from 'react';
const Header = ({ activeNav, onNavChange }) => {
 const navItems = [
 { key: 'home', label: '首页' },
 { key: 'products', label: '乘方' },
 { key: 'global', label: '全域投放' },
 { key: 'brand', label: '品牌投放' },
 { key: 'ai-creative', label: 'AI创意', highlight: true },
 { key: 'data', label: '数据' },
 { key: 'tools', label: '工具' },
 { key: 'finance', label: '财务' },
 { key: 'marketing', label: '营销' },
 { key: 'academy', label: '学堂' },
 ];
 return (<header className="header">
 <div className="header-left">
        <div className="logo">
          <span className="logo-icon">
            <svg width="32" height="32" viewBox="0 0 100 100" fill="none">
              <path d="M50 10 C50 10 20 30 20 55 C20 70 25 80 35 85 C32 85 28 82 25 78 C20 70 15 55 15 45 C15 30 30 18 50 18 C52 18 54 18 55 20 L55 45 C55 55 52 62 45 68 C38 74 35 77 35 80 L35 95 L60 95 L60 80 C60 77 57 72 50 65 C45 60 42 50 42 35 C42 25 46 18 50 15 C55 12 60 15 65 22 C70 30 72 40 72 50 C72 65 65 78 55 85 C52 87 50 88 50 88 L50 95" fill="#000"/>
              <path d="M50 10 C50 10 80 30 80 55 C80 70 75 80 65 85 C68 85 72 82 75 78 C80 70 85 55 85 45 C85 30 70 18 50 18 C48 18 46 18 45 20 L45 45 C45 55 48 62 55 68 C62 74 65 77 65 80 L65 95 L40 95 L40 80 C40 77 43 72 50 65 C55 60 58 50 58 35 C58 25 54 18 50 15 C45 12 40 15 35 22 C30 30 28 40 28 50 C28 65 35 78 45 85 C48 87 50 88 50 88 L50 95" fill="#00D4AA"/>
              <path d="M50 10 C50 10 80 30 80 55 C80 70 75 80 65 85 C65 85 70 88 72 92 C78 98 82 95 78 88 C75 82 75 78 77 75 C82 68 87 55 87 42 C87 25 70 12 50 12 C47 12 44 14 42 17 L42 42 C42 52 45 58 52 64 C58 69 62 72 62 75 L62 92 L42 92 L42 75 C42 72 38 67 32 60 C27 53 25 42 25 30 C25 18 35 10 50 10" fill="#FF2D55"/>
            </svg>
          </span>
          <span className="logo-text">抖音电商·千川</span>
        </div>
 <nav className="nav">
 {navItems.map((item) => (<button key={item.key} className={`nav-item ${activeNav === item.key ? 'active' : ''} ${item.highlight ? 'highlight' : ''}`} onClick={() => onNavChange(item.key)}>
 {item.label}
 {item.highlight && <span className="new-badge">NEW</span>}
 </button>))}
 </nav>
 </div>
 <div className="header-right">
 <button className="header-icon">
 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
 <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
 <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
 </svg>
 </button>
 <button className="header-icon">
 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
 <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
 <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
 </svg>
 </button>
 <button className="header-icon notification">
 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
 <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
 <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
 </svg>
 <span className="notification-badge">99+</span>
 </button>
 <div className="user-info">
 <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
 <circle cx="12" cy="12" r="10" fill="#E8F0FE"/>
 <circle cx="12" cy="10" r="4" fill="#0066FF"/>
 <path d="M8 17h8c.5 0 1-.4 1-1s-.5-1-1-1H8c-.5 0-1 .4-1 1s.5 1 1 1z" fill="#0066FF"/>
 </svg>
 <svg className="dropdown-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
 <path d="M6 9l6 6 6-6"/>
 </svg>
 </div>
 <button className="header-icon settings">
 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
 <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
 <circle cx="12" cy="12" r="3"/>
 </svg>
 </button>
 </div>
 </header>);
};
export default Header;
