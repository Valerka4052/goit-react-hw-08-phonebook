import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../redux/store";
import { RouteType } from "./types";



export function PrivateRoute({ component: Component, redirectTo }: RouteType) {
    const { isLoggedIn, isRefresh } = useSelector((state: RootState) => state.authorisation);
    return !isLoggedIn && !isRefresh ? <Navigate to={redirectTo} /> : <Component/>
};