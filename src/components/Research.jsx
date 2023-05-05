import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Consultancy from "./research/Consultancy";
import FundedProject from "./research/FundedProject";
import GuidedProject from "./research/GuidedProject";
import Publications from "./research/Publications";
import ResearchGuide from "./research/ResearchGuide";
import styles from "./Research.module.css";

function Research() {

    const [currentTab,setCurrentTab] = useState("Consultancy");

    return (
        <div className={styles.res_page}>
            <div className={styles.res_navbar}>
                <Navbar />
            </div>
            <div className={styles.res_parent}>
                <div className={styles.res_left}>
                    <Sidebar />
                </div>
                <div className={styles.res_right}>
                    <div className={styles.res_tab_bar}>
                        <ul className={styles.res_tab_list}>
                            <li className={styles.res_tab_item} id="Consultancy" onClick={(e) => {setCurrentTab(e.target.id)}}>Consultancy</li>
                            <li className={styles.res_tab_item} id="FundedProject" onClick={(e) => {setCurrentTab(e.target.id)}}>Funded Projects</li>
                            <li className={styles.res_tab_item} id="GuidedProject" onClick={(e) => {setCurrentTab(e.target.id)}}>Guided Projects</li>
                            <li className={styles.res_tab_item} id="Publications" onClick={(e) => {setCurrentTab(e.target.id)}}>Publications</li>
                            <li className={styles.res_tab_item} id="ResearchGuide" onClick={(e) => {setCurrentTab(e.target.id)}}>Research Guide</li>
                        </ul>
                    </div>
                    <div className={styles.res_content}>
                        {(currentTab == "Consultancy") && <Consultancy />}
                        {(currentTab == "FundedProject") && <FundedProject />}
                        {(currentTab == "GuidedProject") && <GuidedProject />}
                        {(currentTab == "Publications") && <Publications />}
                        {(currentTab == "ResearchGuide") && <ResearchGuide />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Research;