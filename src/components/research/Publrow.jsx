import styles from "./Publrow.module.css";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import Button from "@mui/material/Button";
function Publrow(props) {
    return (
        <div className={styles.main_div}>
            <div className={styles.col_div}>
                <div className={styles.sub_div}>
                    <label>Type</label>
                    <input type="text" disabled="disabled" value={props.type} /><br />
                    <label>Title</label>
                    <input type="text" disabled="disabled" value={props.title} /><br />
                </div>
                <div className={styles.sub_div}>
                    <label>Name of Publication</label>
                    <input type="text" disabled="disabled" value={props.name} /><br />
                    <label>Start Date</label>
                    <input type="text" disabled="disabled" value={props.startdate} /><br />
                </div>
                <div className={styles.sub_div}>
                    <label>End Date</label>
                    <input type="text" disabled="disabled" value={props.enddate} /><br />
                    <label>Date</label>
                    <input type="text" disabled="disabled" value={props.date} /><br />
                </div>
                <div className={styles.sub_div}>
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

export default Publrow;