import styles from "./Consrow.module.css";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import Button from "@mui/material/Button";
function Consrow(props) {
    return (
        <div className={styles.main_div}>
            <div className={styles.col_div}>
                <div className={styles.sub_div}>
                    <label className={styles.element}>Agency</label>
                    <input type="text" disabled="disabled" value={props.agency} className={styles.element}/><br />
                    <label className={styles.element}>Year</label>
                    <input type="text" disabled="disabled" value={props.year} className={styles.element}/><br />
                </div>
                <div className={styles.sub_div}>
                    <label>Amount</label>
                    <input type="text" disabled="disabled" value={props.amount} /><br />
                    <Button
                     variant="contained"
                    startIcon={<CardMembershipIcon />}
                    size="small"
                    >
                     Cerificate
                    </Button>
                </div>
            </div>
            
        </div>
    )
}

export default Consrow;