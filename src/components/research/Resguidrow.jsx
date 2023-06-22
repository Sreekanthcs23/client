import styles from "./Resguidrow.module.css";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import Button from "@mui/material/Button";
import Axios from "axios";

function Resguidrow(props) {
    const deletefun = () => {
        let axiosConfig = {
          headers: {
            "x-access-token": localStorage.getItem("token"),
          },
        };
    
        const res_id = props.resid;
        console.log(res_id);
    
        Axios.post(
          "http://localhost:3001/researchguide/delete",
          {resid: res_id },
          axiosConfig
        ).then(() => {
          alert("submitted");
        });
      };
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
                <div className={styles.sub_div}>
                <Button variant="contained" color="error" onClick={deletefun}>
            Delete
          </Button>
                </div>
            </div>
            
        </div>
    )
}

export default Resguidrow;