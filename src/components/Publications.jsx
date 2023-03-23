
import styles from "./Publications.css";

function Publications() {
    return (
        <div>
            <h1 className={styles.title}>Publications</h1>
            <div className={styles.parent}>
                <div className={styles.left}>
                        <h2>Add new row</h2>
                        <label for="type">Type</label>
                        <input type="radio" id="journal" name="types" value="JOURNAL"/><br />
                        <input type="radio" id="conference" name="types" value="CONFERENCE"/><br />
                        <input type="radio" id="patent" name="types" value="PATENT"/><br />
                        <input type="radio" id="poster" name="types" value="POSTER"/><br />
                        <input type="radio" id="proceeding" name="types" value="CONFERENCE PROCEEDING"/><br />
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

export default Publications;