import {useState,useEffect} from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import cx from 'classnames';
import styles from "./Login.module.css";

function Login() {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState(false);

    //Axios.defaults.withCredentials = true;
    const navigate = useNavigate();

    

    const userAuthenticated = () => {
        Axios.get("http://localhost:3001/isUserAuth",{
            headers: {
                "x-access-token": localStorage.getItem("token")
            }
        }).then((response) => {
            console.log(response);
        });
    }

    const loginfun = () => {
        console.log("btn clicked");
        Axios.post("http://localhost:3001/login", {
          username: username,
          password: password,
        }).then((response) => {
          if (!response.data.auth) {
            setLoginStatus(false);
          } else {
            console.log(response.data);
            localStorage.setItem("token",response.data.token);
            setLoginStatus(true);
            navigate("/home");
          }
        });
      };

    useEffect(() => {
        Axios.get("http://localhost:3001/login").then((response) => {
          if (response.data.loggedIn == true) {
            setLoginStatus(true);
            navigate("/home");
          }
        });
      }, []);

    return (
      <div className={styles.main}>
      <div className={styles.sub_main}>
        <div>
          <div className={styles.imgs}>
            <div className={styles.container_image}>
              <img src="/profile.png" alt="profile" className={styles.profile}/>
 
            </div>
 
 
          </div>
          <div>
            <h1>Login Page</h1>
            <div className={styles.second_input}>
              <img src="/email.png" alt="email" className={styles.email}/>
              <input type="text" placeholder="user name" className={cx(styles.login_input,styles.name)} onChange={(e)=> {setUsername(e.target.value)}} />
            </div>
            <div className={styles.second_input}>
              <img src="/password.png" alt="pass" className={styles.email}/>
              <input type="password" placeholder="password" className={cx(styles.login_input,styles.name)} onChange={(e)=>{setPassword(e.target.value)}} />
            </div>
           <div className={styles.login_button_div}>
           <button type="button" onClick={loginfun} className={styles.login_button} >Login</button>
           </div>
            
             <p className={styles.link}>
               <a className={styles.login_a} href="#">Forgot password ?</a> Or<a className={styles.login_a} href="#">Sign Up</a>
             </p>
            
  
          </div>
        </div>
        
 
      </div>
     </div>
       
    )
}

export default Login;