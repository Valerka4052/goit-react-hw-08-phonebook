import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RouteType } from "./types";
import { RootState } from "../redux/store";

export function RestrictedRoute({ component: Component, redirectTo }:RouteType) {
    const { isLoggedIn } = useSelector((state: RootState) => state.authorisation);
    return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />
};