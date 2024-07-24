import { useContext, useEffect } from "react" //useEffect: A React hook that lets you perform side effects in functional components.
import { useNavigate } from "react-router-dom"; //useNavigate: A hook from react-router-dom for programmatic navigation.
import { DataContext } from "../DataProvider/DataProvider";   //DataContext: The context created to share state across components.


//children: The child components that will be rendered if the user is authenticated.
//msg: A message that can be displayed on the redirect page (e.g., a login page) explaining why the user was redirected.
//redirect: The path to redirect to after a successful login.
const ProtectedRoute = ({ children, msg, redirect }) => {
  const navigate = useNavigate();

  // useContext(DataContext): provides access to the DataContext state and the dispatch function.
  //we only need user from the state
  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    if (!user) {

      navigate("/auth", { state: { msg, redirect } });
    }
    //on every user change
  }, [user]);

  return children; //If the user is authenticated, it renders the child components.

};


export default ProtectedRoute;


// ProtectedRoute Component: Wraps child components and only allows them to render if the user is authenticated.
// useContext: Accesses the user from DataContext.
// useEffect: Checks if the user is authenticated on component mount and when user state changes. If not authenticated, it redirects to the /auth page.
// useNavigate: Used for programmatic navigation.
// Props: Accepts children, msg, and redirect to manage authentication and redirection.