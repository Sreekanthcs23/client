import styles from "./Resguidrow.module.css";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import Button from "@mui/material/Button";
function Resguidrow(props) {
    return (
        <div className={styles.main_div}>
            <div className={styles.col_div}>
                <div className={styles.sub_div}>
                    <label>Name</label>
                    <input type="text" disabled="disabled" value={props.name} /><br />
                    <label>Date</label>
                    <input type="text" disabled="disabled" value={props.date} /><br />
                </div>
                <div className={styles.sub_div}>
                    <label>Area</label>
                    <input type="text" disabled="disabled" value={props.area} /><br />
                    <label>Topic</label>
                    <input type="text" disabled="disabled" value={props.topic} /><br />
                </div>
                <div className={styles.sub_div}>
                    <label>Publication</label>
                    <input type="text" disabled="disabled" value={props.publication} /><br />
                    <a href={props.certlink} target="_blank" rel="noopener noreferrer">
                    <Button
                        variant="contained"
                        startIcon={<CardMembershipIcon />}
                        size="small"
                    >
                        Certificate
                    </Button>
                    </a>
                </div>
            </div>
            
        </div>
    )
}

export default Resguidrow;