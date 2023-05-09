import styles from "./Guidrow.module.css";

function Guidrow(props) {
    return (
        <div className={styles.main_div}>
            <div className={styles.col_div}>
                <div>
                    <label>Student Name</label>
                    <input type="text" disabled="disabled" value={props.sname} /><br />
                    <label>Project Name</label>
                    <input type="text" disabled="disabled" value={props.pname} /><br />
                </div>
                <div>
                    <label>Batch</label>
                    <input type="text" disabled="disabled" value={props.batch} /><br />
                    <label>Publication</label>
                    <input type="text" disabled="disabled" value={props.publication} /><br />
                </div>
            </div>
            
        </div>
    )
}

export default Guidrow;