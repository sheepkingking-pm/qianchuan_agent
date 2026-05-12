import { useState } from 'react';

const AICreativePage = () => {
  const [query, setQuery] = useState('');
  
  const features = [
    {
      icon: '📊',
      title: '结合店铺经营现状，定制一份投放方案',
      desc: '预计可以提升10%营业额',
      arrow: true
    },
    {
      icon: '🎬',
      title: '生产创意素材',
      items: ['商品图/卖点词', '营销短视频', 'AIGC素材'],
      arrow: true
    },
    {
      icon: '🛡️',
      title: '护航营销过程',
      items: ['投放调控建议', '在投计划诊断', '在投素材诊断'],
      arrow: true
    },
    {
      icon: '📈',
      title: '分析营销数据',
      items: ['个性化数据报表', '全局诊断与调优', '营销成本分析'],
      arrow: true
    }
  ];

  return (
    <div className="ai-creative-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">AI智能营销，好生意即刻爆发！</h1>
          
          <div className="search-box">
            <div className="search-tags">
              <span className="tag active">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
                我想营销
              </span>
              <span className="tag">店铺商品</span>
            </div>
            <span className="search-divider">帮我制定一套</span>
            <div className="search-input-wrapper">
              <input 
                type="text" 
                className="search-input"
                placeholder="低投入高转化"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <span className="search-suffix">的营销方案</span>
            </div>
            <button className="search-add">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14m-7-7h14"/>
              </svg>
            </button>
          </div>

          <div className="search-actions">
            <button className="action-btn primary">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM7 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
              </svg>
              营销规划
            </button>
            <button className="action-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 11H5m14 0a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2m14 0V9a2 2 0 0 0-2-2M5 11V9a2 2 0 0 1 2-2m0 0V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2M7 7h10"/>
              </svg>
              技能
              <svg className="dropdown-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>
            <div className="action-divider"></div>
            <span className="action-text">我可以帮你：</span>
          </div>
        </div>

        <div className="feature-cards">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-header">
                <span className="feature-icon">{feature.icon}</span>
                <span className="feature-title">{feature.title}</span>
              </div>
              {feature.items && (
                <div className="feature-items">
                  {feature.items.map((item, idx) => (
                    <div key={idx} className="feature-item">
                      {item}
                      <svg className="arrow-right" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 5l7 7-7 7"/>
                      </svg>
                    </div>
                  ))}
                </div>
              )}
              {feature.desc && (
                <span className="feature-desc">{feature.desc}</span>
              )}
              {feature.arrow && (
                <svg className="card-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AICreativePage;
