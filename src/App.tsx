import { Outlet } from "react-router-dom";

import styles from "./App.module.css";

import SideNavigation from "./Components/SideNavigation";

function App() {
  return (
    <div className={styles.appWrapper}>
      <SideNavigation />
      <Outlet />
    </div>
  );
}

export default App;
