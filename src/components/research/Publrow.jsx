import styles from "./Publrow.module.css";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import Button from "@mui/material/Button";
function Publrow(props) {
    return (
        <div className={styles.main_div}>
            <div className={styles.col_div}>
                <div>
                    <label>Type</label>
                    <input type="text" disabled="disabled" value={props.type} /><br />
                    <label>TITLE</label>
                    <input type="text" disabled="disabled" value={props.title} /><br />
                </div>
                <div>
                    <label>Name of Publication</label>
                    <input type="text" disabled="disabled" value={props.name} /><br />
                    <label>START DATE</label>
                    <input type="text" disabled="disabled" value={props.startdate} /><br />
                </div>
                <div>
                    <label>END DATE</label>
                    <input type="text" disabled="disabled" value={props.enddate} /><br />
                    <label>DATE</label>
                    <input type="text" disabled="disabled" value={props.date} /><br />
                </div>
                <div>
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