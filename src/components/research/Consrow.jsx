import styles from "./Consrow.module.css";

function Consrow(props) {
    return (
        <div className={styles.main_div}>
            <div className={styles.col_div}>
                <div>
                    <label>Agency</label>
                    <input type="text" disabled="disabled" value={props.agency} /><br />
                    <label>Year</label>
                    <input type="text" disabled="disabled" value={props.year} /><br />
                </div>
                <div>
                    <label>Amount</label>
                    <input type="text" disabled="disabled" value={props.amount} /><br />
                    <button type="button" >Certificate</button>
                </div>
            </div>
            
        </div>
    )
}

export default Consrow;