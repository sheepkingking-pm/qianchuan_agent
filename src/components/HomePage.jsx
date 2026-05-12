const HomePage = () => {
  const suggestions = [
    {
      icon: 'warning',
      title: '发现新增审核不通过素材',
      desc: '可使用AI一键修复',
      extra: '共1个素材审核不通过',
      action: '前往一键修复'
    },
    {
      icon: 'info',
      title: '素材审核建议',
      desc: '您的账户近七日无素材审核，为降低后续违规风险，可关注行业审核规则指南',
      action: '查看详情'
    },
    {
      icon: 'check',
      title: '申请抖音号商品全域推广权限',
      desc: '您还缺少合作抖音号商品全域推广权限，立即申请开启省心高效投放',
      extra: '同行成员量约20-30%',
      action: '立即申请'
    }
  ];

  const dataOverview = [
    { label: '账户整体消耗(元)', value: '0.00', change: '--' },
    { label: '乘方计划消耗(元)', value: '0.00', change: '--' },
    { label: '标准投放消耗(元)', value: '0.00', change: '--' },
    { label: '全域投放消耗(元)', value: '0.00', change: '--' },
    { label: '品牌投放消耗(元)', value: '0.00', change: '--' }
  ];

  const myFunds = {
    balance: '17,784.11',
    sharedBalance: '0.00',
    welfare: '0.00'
  };

  return (
    <div className="home-page">
      <div className="notification-bar">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/>
        </svg>
        <span>【防诈提示】为了您的账户和资金安全，请轻信非官方充值渠道，假冒平台名义/昵称与平台合作索要您转账的行为，我知道了</span>
      </div>

      <div className="suggestions-section">
        <div className="section-header">
          <span className="section-title">专属诊断建议</span>
          <span className="section-subtitle">为更好的投放，我们建议你：</span>
        </div>
        <div className="suggestions-grid">
          {suggestions.map((item, index) => (
            <div key={index} className="suggestion-card">
              <div className="suggestion-icon">
                {item.icon === 'warning' && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2">
                    <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                  </svg>
                )}
                {item.icon === 'info' && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 16v-4M12 8h.01"/>
                  </svg>
                )}
                {item.icon === 'check' && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00C853" strokeWidth="2">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/>
                  </svg>
                )}
              </div>
              <div className="suggestion-content">
                <h4 className="suggestion-title">{item.title}</h4>
                <p className="suggestion-desc">{item.desc}</p>
                {item.extra && <span className="suggestion-extra">{item.extra}</span>}
              </div>
              <button className="suggestion-action">{item.action}</button>
            </div>
          ))}
        </div>
      </div>

      <div className="main-content">
        <div className="content-left">
          <div className="data-brief">
            <span className="brief-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m0 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z"/>
              </svg>
            </span>
            <span className="brief-text">数据简报：您的账户当前消耗为 0.00 元，尚未开始投放。</span>
            <button className="brief-action">查看详情</button>
          </div>

          <div className="data-overview-card">
            <div className="card-header">
              <span className="card-title">数据概览</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 16v-4M12 8h.01"/>
              </svg>
              <span className="card-update">更新于: 05-08 21:06</span>
              <span className="card-tag">最新</span>
              <span className="card-period">统计周期：2026-05-08 ~ 2026-05-08</span>
            </div>
            
            <div className="data-grid">
              {dataOverview.map((item, index) => (
                <div key={index} className="data-item">
                  <span className="data-label">{item.label}</span>
                  <div className="data-value-row">
                    <span className="data-value">{item.value}</span>
                    <span className="data-change">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5v14M5 12l7 7 7-7"/>
                      </svg>
                      {item.change}
                    </span>
                  </div>
                  <span className="data-compare">相比上周 --</span>
                </div>
              ))}
            </div>

            <div className="data-tabs">
              <button className="tab active">全部</button>
              <button className="tab">推商品</button>
              <button className="tab">推直播间</button>
              <button className="tab">小店随心推</button>
            </div>

            <div className="card-actions">
              <button className="action-btn primary">新建计划</button>
              <button className="action-btn">查看计划详情</button>
              <button className="action-btn">自定义数据</button>
            </div>

            <div className="chart-container">
              <div className="chart-tabs">
                <button className="chart-tab active">整体消耗(元)</button>
                <button className="chart-tab">净成交ROI</button>
              </div>
              <div className="chart-placeholder">
                <div className="chart-bars">
                  <div className="bar" style={{ height: '30%' }}></div>
                  <div className="bar" style={{ height: '60%' }}></div>
                  <div className="bar" style={{ height: '40%' }}></div>
                  <div className="bar" style={{ height: '80%' }}></div>
                  <div className="bar" style={{ height: '50%' }}></div>
                  <div className="bar" style={{ height: '70%' }}></div>
                  <div className="bar" style={{ height: '90%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-right">
          <div className="funds-card">
            <div className="card-title">我的资金</div>
            <div className="funds-item">
              <div className="funds-label">账户余额</div>
              <div className="funds-value">
                {myFunds.balance}
                <span className="funds-unit">元</span>
              </div>
            </div>
            <div className="funds-item">
              <div className="funds-label">共享赠款余额</div>
              <div className="funds-value">
                {myFunds.sharedBalance}
                <span className="funds-unit">元</span>
                <span className="funds-tag">优先消耗</span>
              </div>
            </div>
            <div className="funds-item">
              <div className="funds-label">共享赠福利</div>
              <button className="funds-action">福利明细</button>
            </div>
            <div className="funds-divider"></div>
            <div className="funds-item">
              <div className="funds-label">活动福利</div>
              <div className="funds-value">福利可用余额(元) {myFunds.welfare}</div>
            </div>
            <button className="funds-recharge">立即充值</button>
          </div>

          <div className="tips-card">
            <div className="tips-header">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00C853" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22,4 12,14.01 9,11.01"/>
              </svg>
              <span>开启贷款直投，抢量快人一步!</span>
            </div>
            <ul className="tips-list">
              <li>告别手动充值，一键操作效率高</li>
              <li>告别手动充值，一键操作不等待</li>
              <li>精准预估消耗，按需借入放心投</li>
              <li>支持设置上限，成本保障放心投</li>
            </ul>
            <button className="tips-action">去开启</button>
          </div>

          <div className="activity-card">
            <div className="card-title">平台动态</div>
            <div className="activity-item">
              <div className="activity-icon">🎁</div>
              <div className="activity-content">
                <span className="activity-title">商商品618限时激励</span>
                <span className="activity-desc">活动火热进行中...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
