import Sidebar from "../components/SideBar";
import Map from "../components/Map";
import styles from "./AppLayout.module.css";
import User from "../components/User";
import { ErrorBoundary } from "react-error-boundary";

function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Map />
      </ErrorBoundary>
      <User />
    </div>
  );
}

export default AppLayout;
