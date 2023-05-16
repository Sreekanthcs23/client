import styles from "./Fundrow.module.css";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import Button from "@mui/material/Button";
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
                <Button
                     variant="contained"
                    startIcon={<CardMembershipIcon />}
                    size="small"
                    >
                     Sanction Letter
                    </Button>
                </div>
            </div>
            
        </div>
    )
}

export default Fundrow;