import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export function PrivateRoute({ component: Component, redirectTo }) {
    const {isLoggedIn, isRefresh} = useSelector(state => state.authorisation)
    // console.log(isLoggedIn)
    return (
        !isLoggedIn && !isRefresh ? <Navigate to={redirectTo} /> : <Component />
    );
}