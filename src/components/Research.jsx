import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Consultancy from "./research/Consultancy";
import FundedProject from "./research/FundedProject";
import GuidedProject from "./research/GuidedProject";
import Publications from "./research/Publications";
import ResearchGuide from "./research/ResearchGuide";
import styles from "./Research.module.css";
import Paper from "@mui/material/Paper";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

function Research() {
    
    const [currentTab, setCurrentTab] = useState("Consultancy");

    return (
        <div className={styles.res_page}>
            <div className={styles.res_navbar}>
                <Navbar />
            </div>
                <div className={styles.res_sidebar}>
                    <Sidebar />
                </div>
                <div className={styles.res_content}>
                    <div className={styles.res_tab_bar}>
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
                                <Tab value="Consultancy" label="Consultancy" />
                                <Tab value="FundedProject" label="FundedProject" />
                                <Tab value="GuidedProject" label="GuidedProject" />
                                <Tab value="Publications" label="Publications" />
                                <Tab value="ResearchGuide" label="ResearchGuide" />
                            </Tabs>
        
                        </Paper>
                    </div>
                    <div className={styles.res_current}>
                        {(currentTab == "Consultancy") && <Consultancy />}
                        {(currentTab == "FundedProject") && <FundedProject />}
                        {(currentTab == "GuidedProject") && <GuidedProject />}
                        {(currentTab == "Publications") && <Publications />}
                        {(currentTab == "ResearchGuide") && <ResearchGuide />}
                    </div>        
                </div>
            </div>
    )
}

export default Research;