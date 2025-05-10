import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import styles from "../styles/Sidebar.module.css";

const Sidebar = () => {
  const { logout } = useAuth();

  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}></div>
        <h1 className={styles.logoText}>Entra</h1>
      </div>

      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/dashboard/invite" className={styles.navLink}>
            Invite Visitor
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="#" className={styles.navLink}>
            Invitation List
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="#" className={styles.navLink}>
            Book Meeting Room
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="#" className={styles.navLink}>
            Calendar View
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="#" className={styles.navLink}>
            Meeting Room View
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="#" className={styles.navLink}>
            Settings
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="#" className={styles.navLink}>
            Emergency Alert
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="#" className={styles.navLink}>
            Helpdesk
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
