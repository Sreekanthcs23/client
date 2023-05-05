import {useState} from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

function Login() {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        Axios.post('http://localhost:3001/login',{
            username: username,
            password: password
        }).then((res) => {
            if(res.data.login) {
                navigate('/home');
            }else {
                alert("Incorrect password");
            }
        })
        .catch(err => console.log(err));
    }

    return (
        <div className={styles.loginPage}>
            <div className={styles.loginCard}>
                <form onSubmit={handleSubmit}>
                    <h1> LOGIN</h1>
                    <p>User name</p>
                    <input onChange={(e) => {setUsername(e.target.value)}} type="text"></input>
                    <p>Password</p>
                    <input onChange={(e) => {setPassword(e.target.value)}} type="password"></input><br />
                    <button type="submit">Login</button>
                    <p>Don't have an account?<a href="">register</a></p>
                </form>
                
            </div>
        </div>
       
    )
}

export default Login;