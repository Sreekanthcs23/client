import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Adduser from "./admin/Adduser";
import Report from "./admin/Report";
import styles from "./Admin.module.css";
import Paper from "@mui/material/Paper";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

function Admin() {
  const [currentTab, setCurrentTab] = useState("Adduser");

  return (
    <div className={styles.adm_page}>
      <div className={styles.adm_navbar}>
        <Navbar />
      </div>
      <div className={styles.adm_sidebar}>
        <Sidebar />
      </div>
      <div className={styles.adm_content}>
        <div className={styles.adm_tab_bar}>
          <Paper square>
            <Tabs
              value={currentTab}
              textColor="primary"
              indicatorColor="primary"
              onChange={(event, newValue) => {
                setCurrentTab(newValue);
              }}
              centered
            >
              <Tab value="Adduser" label="Adduser" />
              <Tab value="Report" label="Report" />
            </Tabs>
          </Paper>
        </div>
        <div className={styles.adm_current}>
          {currentTab == "Adduser" && <Adduser />}
          {currentTab == "Report" && <Report />}
        </div>
      </div>
    </div>
  );
}

export default Admin;
