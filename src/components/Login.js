

import "./Login.css";
function Login() {
    
    return (
        <div className="login-page">
            <div className="login-card">
                <form action="#" method="post">
                    <h1> LOGIN</h1>
                    <p>User name</p>
                    <input type="text"></input>
                    <p>Password</p>
                    <input type="password"></input><br />
                    <button type="submit">Login</button>
                    <p>Don't have an account?<a href="">register</a></p>
                </form>
                
            </div>
        </div>
       
    )
}

export default Login;