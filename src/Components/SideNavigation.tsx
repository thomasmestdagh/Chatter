import SideNavigationLink from "./SideNavigationLink";
import styles from "./SideNavigation.module.css";
import { useEffect, useState } from "react";
import { BellIcon, FriendIcon, MoonIcon, SettingIcon } from "./icons/Icons";

export default function SideNavigation() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    darkMode
      ? window.document.body.classList.add("dark-mode")
      : window.document.body.classList.remove("dark-mode");
  }, [darkMode]);

  return (
    <div className={styles.wrapper}>
      <nav className={styles.nav}>
        {/* DIRECT MESSAGES */}
        <SideNavigationLink
          imgUrl="./images/bitcoin-logo.jpg"
          to="./dm"
          round={true}
          className={styles.sideNavButton}
        />
        <hr className={styles.seperator} />
        {/* SERVERS */}
        <SideNavigationLink
          imgUrl="./images/bitcoin-logo.jpg"
          to="./server"
          className={styles.sideNavButton}
        />
        <SideNavigationLink
          imgUrl="./images/bitcoin-logo.jpg"
          to="./server"
          className={styles.sideNavButton}
        />
        <SideNavigationLink
          imgUrl="./images/bitcoin-logo.jpg"
          to="./server"
          className={styles.sideNavButton}
        />
        <SideNavigationLink
          imgUrl="./images/bitcoin-logo.jpg"
          to="./server"
          className={styles.sideNavButton}
        />
        <SideNavigationLink
          imgUrl="./images/bitcoin-logo.jpg"
          to="./server"
          className={styles.sideNavButton}
        />
        <SideNavigationLink
          to="./server"
          className={styles.sideNavButton + " " + styles.addServer}
        >
          <span>+</span>
        </SideNavigationLink>
      </nav>
      {/* SETTINGS */}
      <nav className={styles.settings}>
        <SideNavigationLink
          to="./dm"
          round={true}
          className={styles.sideNavSettingButton}
        >
          <FriendIcon color="white" />
        </SideNavigationLink>
        <SideNavigationLink
          to="./dm"
          round={true}
          className={styles.sideNavSettingButton}
        >
          <BellIcon color="white" />
        </SideNavigationLink>
        <SideNavigationLink
          to="./settings"
          round={true}
          className={styles.sideNavSettingButton}
        >
          <SettingIcon color="white" />
        </SideNavigationLink>
        {/* <SideNavigationLink
          to="./dm"
          round={true}
          className={styles.sideNavSettingButton}
        >
          <MoonIcon color="white" />
        </SideNavigationLink> */}
        <button
          className={styles.sideNavSettingButton}
          onClick={() => setDarkMode(!darkMode)}
        >
          <MoonIcon color="white" />
        </button>
      </nav>
    </div>
  );
}
