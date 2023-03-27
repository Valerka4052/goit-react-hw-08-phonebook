import { UserMenu } from "components/UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { Suspense } from "react";

export function SharedLayout() {
    const { isLoggedIn } = useSelector(state => state.authorisation);

    return (
        <><div>
            {!isLoggedIn ? <div>
                <Link to='/register'>Sign Up</Link>
                <Link to='/login'>Log In</Link>
            </div> : <UserMenu />}
        </div>
            <Suspense>
                <Outlet />
            </Suspense>
        </>
    );
}