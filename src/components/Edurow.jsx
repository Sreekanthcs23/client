import styles from "./Edurow.module.css";

function Edurow(props) {
    return (
        <div className={styles.main_div}>
            <h1>{props.degree}</h1>
            <div className={styles.col_div}>
                <div>
                    <label>Branch</label>
                    <input type="text" disabled="disabled" value={props.branch} /><br />
                    <label>Specialization</label>
                    <input type="text" disabled="disabled" value={props.specialization} /><br />
                </div>
                <div>
                    <label>Univarsity</label>
                    <input type="text" disabled="disabled" value={props.university} /><br />
                    <label>College</label>
                    <input type="text" disabled="disabled" value={props.college} /><br />
                </div>
                <div>
                    <label>Date of acquiry</label>
                    <input type="text" disabled="disabled" value={props.date} /><br />
                    <label>Marks</label>
                    <input type="text" disabled="disabled" value={props.marks} /><br />
                </div>
                <div>
                    <button type="button" >Certificate</button>
                </div>
            </div>
            
        </div>
    )
}

export default Edurow;