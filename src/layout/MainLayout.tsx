import { Link } from "react-router-dom";
import "./MainLayout.css";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout">
      <header className="navbar">🧱 구조만 있는 앱</header>
      <div className="body">
        <aside className="sidebar">
          <nav>
            <ul>
              <li><Link to="/">홈</Link></li>
              <li><Link to="/settings">설정</Link></li>
              <li><Link to="/extra">기타</Link></li>
            </ul>
          </nav>
        </aside>
        <main className="content">{children}</main>
      </div>
    </div>
  );
}