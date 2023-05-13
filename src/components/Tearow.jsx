import styles from "./Tearow.module.css";

function Tearow(props) {
    return (
        <div className={styles.main_div}>
            <div className={styles.col_div}>
                <div>
                    <label>Year</label>
                    <input type="text" disabled="disabled" value={props.year} /><br />
                    <label>Batch</label>
                    <input type="text" disabled="disabled" value={props.batch} /><br />
                </div>
                <div>
                    <label>Branch</label>
                    <input type="text" disabled="disabled" value={props.branch} /><br />
                    <label>Subject Code</label>
                    <input type="text" disabled="disabled" value={props.subcode} /><br />
                </div>
                <div>
                    <label>Subject Name</label>
                    <input type="text" disabled="disabled" value={props.subname} /><br />
                    <button type="button" >Internal</button>
                </div>
                <div>
                    <button type="button" >Attendance</button>
                    <button type="button" >Feedback</button>
                </div>
                <div>
                    <button type="button" >Result</button>
                    <button type="button" >Personal TimeTable</button>
                </div>
                <div>
                    <button type="button" >Tutorial</button>
                    <button type="button" >Special Achievement</button>
                </div>
            </div>
            
        </div>
    )
}

export default Tearow;