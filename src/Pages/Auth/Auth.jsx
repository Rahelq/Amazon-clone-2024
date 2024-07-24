import React, { useState, useContext} from "react";
import classes from "./signup.module.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "../../Utility/firebase";
import {signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth"
import {DataContext} from "../../components/DataProvider/DataProvider"
import { ClipLoader } from "react-spinners";
import { Type } from "../../Utility/action.type";



function Auth() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
  const [loading, setLoading] =useState({
  signIn:false,
  singUp:false
})

  const [{user}, dispatch] = useContext(DataContext);
  //  console.log(user)
	const navigate = useNavigate();
    const navStateData = useLocation();
	console.log(navStateData);

   const authHandler = (e) => {
		e.preventDefault();
		console.log(e.target.name);

    if(e.target.name == "signin"){
      //firebase auth
      setLoading({ 
        ...loading,signIn:true
      })
          signInWithEmailAndPassword(auth, email, password)// promise
                .then((userInfo)=>{
                  console.log(userInfo)
                  dispatch({
                    type:Type.SET_USER,
                    user:userInfo.user
                  })
                  setLoading({...loading,signIn:false});
                  navigate(navStateData?.state?.redirect || "/");
                }).catch((err)=>{
                  // console.log(err)
                  setError(err.message);
                  setLoading({...loading,signIn:false});
                })
    }else{
      setLoading({...loading,singUp:true})
       createUserWithEmailAndPassword(auth,email, password)
       .then((userInfo)=>{
        // console.log(userInfo)
        dispatch({
          type:Type.SET_USER,
          user:userInfo.user
        });
        setLoading({...loading, singUp:false})
        navigate(navStateData?.state?.redirect || "/")
       }).catch((err)=>{
        // console.log(err);
        setError(err.message);
        setLoading({...loading, singUp:false})
       })
    }
	};
	// console.log(password, email)
	return (
		<section className={classes.login}>
			{/* logo */}
			<Link to={"/"}>
				<img
					src="https://pngimg.com/uploads/amazon/small/amazon_PNG1.png"
					alt=""
				/>
			</Link>
			{/* form */}

			<div className={classes.login_container}>
				<h1>Sign in</h1>
				{
					navStateData?.state?.msg && (
						<small style={{
							padding: "5px",
							textAlign:"center",
							color:"red",
							fontWeight:"bold",
						}}>
							{navStateData.state.msg}
						</small>
					)
				}
				<form action="">
					<div>
						<label htmlFor="email">Email</label>
						<input
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							type="email"
							id="email"
						/>
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							type="password"
							id="password"
						/>
					</div>
					<button
						type="submit"
						onClick={ authHandler }
						className={classes.login_signInButton}
						name="signin"
					>
            {loading.signIn ? (<ClipLoader color="#000" size={15}></ClipLoader>): ("Sign In")}
						
					</button>
				</form>
				<p>
					By signing-in you agree to the AMAZON FAKE CLONE Conditions of use &
					sale. Please see our privacy Notice, our Cookies Notice and our
					interest-based ads Notice
				</p>

				{/* create account btn */}
				<button
					type="submit"
					onClick={authHandler}
					name="signup"
					className={classes.login_registerButton}
				>
           { loading.singUp ? (<ClipLoader color="#000" size={15}></ClipLoader>): ("Create Your Amazon Account")}
					
				</button>
        {error && 
         (<small style={{paddingTop:"5px", color: "red"}}> {error} </small>)}
			</div>
		</section>
	);
}

export default Auth;
