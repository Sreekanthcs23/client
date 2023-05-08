import Navbar from "./Navbar";
import styles from "./ProfilePage.module.css";

function ProfilePage() {
    const data = {
        name: "Sreekanth cs",
        gender:"male",
        dob: "16-01-2001",
        dept: "Computer Science",
        bloodgp: "B+ve",
        pen: "123456789",
        uniId: "987654321",
        staffType: "Faculty",
        doj: "14-03-2022",
        aadhar: "1234098765",
        mobile: "8606276787",
        perEmail: "sreekanthcs23@gmail.com",
        offEmail: "200905@tkmce.ac.in",
        address: "Chembangatt H PO palliport Ernakulam Kerala 683515"
    }
    return (
        <div>
            <Navbar />
            <div className={styles.main_div}>
                <div className={styles.left_div}>
                    <img src="/profile.png" alt="profile pic" className={styles.profile_img} />
                    <p className={styles.name}>{data.name}</p>
                    <button type="button" className={styles.update_btn}>Update photo</button>
                </div>
                <div className={styles.right_div}>
                    <h1 className={styles.main_heading}>My Profile</h1>
                    <h2 className={styles.sub_heading}>Personal Details</h2>
                    <div className={styles.personal_div}>
                        <div className={styles.persoanl_left}>
                            <label>Name</label>
                            <input disabled="disabled" value={data.name} /><br />
                            <label>Gender</label>
                            <input disabled="disabled" value={data.gender} /><br />
                            <label>Date of birth</label>
                            <input disabled="disabled" value={data.dob} /><br />
                            <label>Department</label>
                            <input disabled="disabled" value={data.dept} /><br />
                            <label>Blood Group</label>
                            <input disabled="disabled" value={data.bloodgp} /><br />
                        </div>
                        
                        <div className={styles.persoanl_right}>
                            <label>PEN Number</label>
                            <input disabled="disabled" value={data.pen} /><br />
                            <label>University id</label>
                            <input disabled="disabled" value={data.uniId} /><br />
                            <label>Staff type</label>
                            <input disabled="disabled" value={data.staffType} /><br />
                            <label>Date of join</label>
                            <input disabled="disabled" value={data.doj} /><br />
                            <label>Aadhar no</label>
                            <input disabled="disabled" value={data.aadhar} /><br />
                        </div>

                        
                    </div>
                    <h2 className={styles.sub_heading}>Contact Details</h2>
                    <div className={styles.contacts_div}>
                        <div className={styles.contacts_left}>
                            <label>Mobile number</label>
                            <input disabled="disabled" value={data.mobile} /><br />
                            <label>Personal Email</label>
                            <input disabled="disabled" value={data.perEmail} /><br />
                            
                        </div>
                        <div className={styles.contacts_right}>
                            <label>Official Email</label>
                            <input disabled="disabled" value={data.offEmail} /><br />
                            <label>Address</label>
                            <textarea disabled>{data.address}</textarea>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;