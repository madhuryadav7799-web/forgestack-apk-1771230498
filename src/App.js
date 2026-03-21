import React, { useState } from 'react';
import './App.css';

/* ── Screens ─────────────────────────────────────────────────── */

function HomeScreen() {
  const [liked, setLiked] = useState(false);

  return (
    <>
      <div className="hero-banner">
        <h2>🚀 ForgeStack</h2>
        <p>Your mobile-first AI platform</p>
      </div>

      <div className="stats-row">
        <div className="stat-card">
          <div className="stat-value">12</div>
          <div className="stat-label">Projects</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">4.8</div>
          <div className="stat-label">Rating</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">99%</div>
          <div className="stat-label">Uptime</div>
        </div>
      </div>

      <div className="card">
        <p className="card-title">Quick Actions</p>
        <ul className="feature-list">
          <li><span className="feature-icon">⚡</span> Start a new project</li>
          <li><span className="feature-icon">📦</span> Browse templates</li>
          <li><span className="feature-icon">🔗</span> Connect integrations</li>
          <li><span className="feature-icon">📊</span> View analytics</li>
        </ul>
      </div>

      <div className="card">
        <p className="card-title">Latest Activity</p>
        <p className="card-subtitle">
          {liked ? '❤️ You liked this update!' : 'ForgeStack v2.1 is now available with improved mobile support.'}
        </p>
        <button className="btn-primary" onClick={() => setLiked(l => !l)}>
          {liked ? '💬 Liked' : '👍 Like this update'}
        </button>
      </div>
    </>
  );
}

function ExploreScreen() {
  const categories = [
    { icon: '🤖', label: 'AI Tools' },
    { icon: '📱', label: 'Mobile' },
    { icon: '🔒', label: 'Security' },
    { icon: '☁️', label: 'Cloud' },
    { icon: '🎨', label: 'Design' },
    { icon: '🗄️', label: 'Database' },
  ];

  return (
    <>
      <div className="card" style={{ marginBottom: 16 }}>
        <p className="card-title">Search</p>
        <input
          type="search"
          placeholder="Search features, templates…"
          style={{
            width: '100%',
            padding: '12px 14px',
            border: '1.5px solid #e5e7eb',
            borderRadius: 12,
            fontSize: '1rem',
            outline: 'none',
            marginTop: 4,
          }}
        />
      </div>

      <p className="card-title" style={{ marginBottom: 10, paddingLeft: 4 }}>Categories</p>
      <div className="explore-grid">
        {categories.map(({ icon, label }) => (
          <button key={label} className="explore-card">
            <span className="e-icon">{icon}</span>
            <span className="e-label">{label}</span>
          </button>
        ))}
      </div>

      <div className="card">
        <p className="card-title">Trending</p>
        <ul className="feature-list">
          <li><span className="feature-icon">🔥</span> AI-powered code generation</li>
          <li><span className="feature-icon">🌐</span> One-click deployments</li>
          <li><span className="feature-icon">📡</span> Real-time collaboration</li>
        </ul>
      </div>
    </>
  );
}

function ProfileScreen() {
  const menuItems = [
    { icon: '⚙️', label: 'Settings' },
    { icon: '🔔', label: 'Notifications' },
    { icon: '🔐', label: 'Privacy & Security' },
    { icon: '💳', label: 'Billing' },
    { icon: '❓', label: 'Help & Support' },
    { icon: '🚪', label: 'Sign Out' },
  ];

  return (
    <>
      <div className="card profile-header">
        <div className="avatar">👤</div>
        <p className="profile-name">Forge User</p>
        <p className="profile-role">Developer • Free Plan</p>
      </div>

      <div className="card">
        <p className="card-title">Account</p>
        <ul className="menu-list">
          {menuItems.map(({ icon, label }) => (
            <li key={label}>
              <span className="menu-item-left">
                <span className="feature-icon">{icon}</span>
                {label}
              </span>
              <span className="menu-chevron">›</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="card" style={{ textAlign: 'center' }}>
        <p className="card-subtitle">ForgeStack App v2.1.0</p>
        <p className="card-subtitle">Built with AI • Powered by ForgeStack</p>
      </div>
    </>
  );
}

/* ── Navigation config ───────────────────────────────────────── */

const TABS = [
  { id: 'home',    icon: '🏠', label: 'Home',    title: 'ForgeStack',  screen: HomeScreen },
  { id: 'explore', icon: '🔍', label: 'Explore',  title: 'Explore',     screen: ExploreScreen },
  { id: 'profile', icon: '👤', label: 'Profile',  title: 'My Profile',  screen: ProfileScreen },
];

/* ── App shell ───────────────────────────────────────────────── */

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const current = TABS.find(t => t.id === activeTab);
  const Screen = current.screen;

  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>{current.title}</h1>
        <button className="header-icon" aria-label="Notifications">🔔</button>
      </header>

      <main className="app-content">
        <Screen />
      </main>

      <nav className="bottom-nav" role="navigation" aria-label="Main navigation">
        {TABS.map(tab => (
          <button
            key={tab.id}
            className={`nav-tab${activeTab === tab.id ? ' active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
            aria-current={activeTab === tab.id ? 'page' : undefined}
          >
            <span className="nav-icon">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
}

export default App;
