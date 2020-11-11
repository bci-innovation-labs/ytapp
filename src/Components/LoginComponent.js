import React, { Component } from "react";


function LoginComponent(props) {
    const { username, password, error, onUsernameChange, onPasswordChange, onLoginClick } = props;
    return(
       <>
           <h1>Login</h1>
           {error &&
                <><b>{error}</b><br /></>
           }
           <form>
               <input id="username"
                    name="username"
                    type="text"
             placeholder="Username"
                onChange={onUsernameChange}
                   value={username} /><br/><br />
              <input id="password"
                   name="password"
                   type="password"
            placeholder="Password"
               onChange={onPasswordChange}
                  value={password} /><br /><br />
             <button id="submit" onClick={onLoginClick} type="button">Submit</button>
           </form>
       </>
    );
}

export default LoginComponent;
