import styles from "./Fundrow.module.css";

function Fundrow(props) {
    return (
        <div className={styles.main_div}>
            <div className={styles.col_div}>
                <div>
                    <label>Project Name</label>
                    <input type="text" disabled="disabled" value={props.name} /><br />
                    <label>Funded Agency</label>
                    <input type="text" disabled="disabled" value={props.agency} /><br />
                </div>
                <div>
                    <label>Period</label>
                    <input type="text" disabled="disabled" value={props.period} /><br />
                    <label>Funded Amount</label>
                    <input type="text" disabled="disabled" value={props.amount} /><br />
                </div>
                <div>
                    <label>Date of Sanction</label>
                    <input type="text" disabled="disabled" value={props.date} /><br />
                    <label>Status</label>
                    <input type="text" disabled="disabled" value={props.status} /><br />
                </div>
                <div>
                    <button type="button" >Sanction Letter</button>
                </div>
            </div>
            
        </div>
    )
}

export default Fundrow;