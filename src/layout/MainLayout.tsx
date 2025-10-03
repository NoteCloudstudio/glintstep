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
              <li><Link to="/Home">공지사항</Link></li>
              <li><Link to="/Playing">악기선택</Link></li>
              <li><Link to="/performance">음악관리</Link></li>
              <li><Link to="/settings">생활관리</Link></li>
              <li><Link to="/minigame">미니게임</Link></li>
              <li><Link to="/Chat">채팅설정</Link></li>
              <li><Link to="/Settings">옵션관리</Link></li>
              <li><Link to="/Help">라이센스</Link></li>
            </ul>
          </nav>
        </aside>
        <main className="content">{children}</main>
      </div>
    </div>
  );
}