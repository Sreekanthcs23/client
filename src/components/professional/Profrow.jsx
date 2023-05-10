import styles from "./Profrow.module.css";

function Profrow(props) {
    return (
        <div className={styles.main_div}>
            <h1>{props.degree}</h1>
            <div className={styles.col_div}>
                <div>
                    <label>Joining Date</label>
                    <input type="date" disabled="disabled" value={props.joiningdate} /><br />
                    <label>Joining Designation</label>
                    <input type="text" disabled="disabled" value={props.joiningdesignation} /><br />
                </div>
                <div>
                    <label>Date of Problem Declaration</label>
                    <input type="date" disabled="disabled" value={props.dateofproblemdeclaration} /><br />
                    <label>Promotion Date</label>
                    <input type="text" disabled="disabled" value={props.promotiondate} /><br />
                </div>
                <div>
                    <label>Promotion Designation</label>
                    <input type="text" disabled="disabled" value={props.promotiondesignation} /><br />
                    <label>Long leave info</label>
                    <input type="text" disabled="disabled" value={props.longleaveinfo} /><br />
                </div>
                <div>
                    <button type="button" >Certificate</button>
                </div>
            </div>
            
        </div>
    )
}

export default Profrow;