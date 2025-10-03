import { Link } from "react-router-dom";
import "./MainLayout.css";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout">
      <header className="navbar">🧱 Rolled Egg Clinic</header>
      <div className="body">
        <aside className="sidebar">
          <nav>
            <ul>
              <li><Link to="/">홈</Link></li>
              <li><Link to="/Start Playing">악기선택</Link></li>
              <li><Link to="/settings">음악파일</Link></li>
              <li><Link to="/settings">생활관리</Link></li>
              <li><Link to="/settings">채팅설정</Link></li>
              <li><Link to="/settings">옵션관리</Link></li>
              <li><Link to="/extra">기타</Link></li>
              <li><Link to="/extra">도움요청</Link></li>
            </ul>
          </nav>
        </aside>
        <main className="content">{children}</main>
      </div>
    </div>
  );
}