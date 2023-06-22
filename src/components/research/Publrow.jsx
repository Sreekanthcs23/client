import styles from "./Publrow.module.css";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import Button from "@mui/material/Button";
import Axios from "axios";

function Publrow(props) {
    const deletefun = () => {
        let axiosConfig = {
          headers: {
            "x-access-token": localStorage.getItem("token"),
          },
        };
    
        const idpublication = props.pubid;
        console.log(idpublication);
    
        Axios.post(
          "http://localhost:3001/publication/delete",
          { pub_id: idpublication},
          axiosConfig
        ).then(() => {
          alert("submitted");
        });
      };

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
                <a href={props.certlink} target="_blank" rel="noopener noreferrer">
            <Button
              variant="contained"
              startIcon={<CardMembershipIcon />}
              size="small"
            >
              Certificate
            </Button>
          </a>
          < br /><br />
          <Button variant="contained" color="error" onClick={deletefun}>
            Delete
          </Button>
                </div>
            </div>
            
        </div>
    )
}

export default Publrow;