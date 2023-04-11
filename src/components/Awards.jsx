import styles from "./Awards.css";

function Awards() {
    return (
        <div>
            <h1 className={styles.title}>Publications</h1>
            <div className={styles.parent}>
                <div className={styles.left}>
                        <h2>Add new row</h2>
                        <label for="title">TITLE</label>
                        <input type="text" id="title" /><br />
                        <label for="nameofjournal">Name of Publication</label>
                        <input type="text" id="nameofjournal" /><br />
                        <label for="period">PERIOD</label>
                        <input type="text" id="period" /><br />
                        <label for="date">Date of Publication</label>
                        <input type="text" id="date" /><br />
                        <label for="certificate">Certificate of Publication</label>
                        <input type="file" id="certificate" /><br />
                        <button type="submit">Add</button>
                </div>
            
                <div className={styles.right}>
                    <h2>Degrees</h2>
                    <table>
                        <tr>
                            <th>Degree</th>
                            <th>Branch</th>
                            <th>Specialization</th>
                            <th>University</th>
                            <th>Date of acquiring</th>
                            <th>Marks</th>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Awards;