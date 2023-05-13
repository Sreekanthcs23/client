import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SchoolIcon from '@mui/icons-material/School';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import styles from "./Sidebar.module.css";

function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <ul className={styles.sidebar_list}>
                <li className={styles.sidebar_row} id={window.location.pathname == "/home" ? "active" : ""} onClick={()=> {window.location.pathname = "/home"}}>
                    <div className={styles.sidebar_icon}><HomeIcon /></div>
                    <div className={styles.sidebar_title}>Home</div>
                </li>
                <li className={styles.sidebar_row} id={window.location.pathname == "/profile" ? "active" : ""} onClick={()=> {window.location.pathname = "/profile"}}>
                    <div className={styles.sidebar_icon}><AccountBoxIcon /></div>
                    <div className={styles.sidebar_title}>Profile</div>
                </li>
                <li className={styles.sidebar_row} id={window.location.pathname == "/education" ? "active" : ""} onClick={()=> {window.location.pathname = "/education"}}>
                    <div className={styles.sidebar_icon}><SchoolIcon /></div>
                    <div className={styles.sidebar_title}>Education</div>
                </li>
                <li className={styles.sidebar_row} id={window.location.pathname == "/teaching" ? "active" : ""} onClick={()=> {window.location.pathname = "/teaching"}}>
                    <div className={styles.sidebar_icon}><CastForEducationIcon /></div>
                    <div className={styles.sidebar_title}>Teaching</div>
                </li>
                <li className={styles.sidebar_row} id={window.location.pathname == "/examination" ? "active" : ""} onClick={()=> {window.location.pathname = "/examination"}}>
                    <div className={styles.sidebar_icon}><BorderColorIcon /></div>
                    <div className={styles.sidebar_title}>Examination</div>
                </li>
                <li className={styles.sidebar_row} id={window.location.pathname == "/professional" ? "active" : ""} onClick={()=> {window.location.pathname = "/professional"}}>
                    <div className={styles.sidebar_icon}><WorkHistoryIcon /></div>
                    <div className={styles.sidebar_title}>Professional Experience</div>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;