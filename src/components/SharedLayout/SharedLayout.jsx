import { UserMenu } from "components/UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { AppBar, Container } from "@mui/material";
import { CustomNavLink } from "../MuiCustom.styled";

export function SharedLayout() {
    const { isLoggedIn } = useSelector(state => state.authorisation);

    return (
        <>
            <AppBar sx={{ background: '#3fbd78' }} position="static">
                {!isLoggedIn ? <Container sx={{ padding: '40px' }}>
                    <CustomNavLink to='/register'>Sign Up</CustomNavLink>
                    <CustomNavLink to='/login'>Log In</CustomNavLink>
                </Container> : <UserMenu />}
            </AppBar>
            <Suspense>
                <Outlet />
            </Suspense>
        </>
    );
};