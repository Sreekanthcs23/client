import styles from "./Tearow.module.css";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import Button from "@mui/material/Button";
function Tearow(props) {
    return (
        <div className={styles.main_div}>
            <div className={styles.col_div}>
                <div>
                    <label>Year</label>
                    <input type="text" disabled="disabled" value={props.year} /><br />
                    <label>Batch</label>
                    <input type="text" disabled="disabled" value={props.batch} /><br />
                </div>
                <div>
                    <label>Branch</label>
                    <input type="text" disabled="disabled" value={props.branch} /><br />
                    <label>Subject Code</label>
                    <input type="text" disabled="disabled" value={props.subcode} /><br />
                </div>
                <div>
                    <label>Subject Name</label>
                    <input type="text" disabled="disabled" value={props.subname} /><br />
                    <Button variant="contained" startIcon={<CardMembershipIcon />} size="small">Internal</Button>
                </div>
                <div>
                <Button variant="contained" startIcon={<CardMembershipIcon />} size="small">Attedance</Button>
                <Button variant="contained" startIcon={<CardMembershipIcon />} size="small">Feedback</Button>
                </div>
                <div>
                <Button variant="contained" startIcon={<CardMembershipIcon />} size="small">Result</Button>
                <Button variant="contained" startIcon={<CardMembershipIcon />} size="small">Personal Timetable</Button>
                </div>
                <div>
                <Button variant="contained" startIcon={<CardMembershipIcon />} size="small">Tutorial</Button>
                <Button variant="contained" startIcon={<CardMembershipIcon />} size="small">Special Achievement</Button>
                </div>
            </div>
            
        </div>
    )
}

export default Tearow;