import styles from "./Navbar.module.css";

function Navbar() {
    return (
        <div>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <a href="#">Logo</a>
                </div>
                <ul className={styles.navLinks}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;

