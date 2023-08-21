import { useEffect, lazy } from "react";
import { useSelector } from "react-redux";
import { refreshUser } from "../redux/Authorisation/operations";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "../components/SharedLayout/SharedLayout";
import { RestrictedRoute} from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";
import { Home } from "../pages/Home/Home";
import { NotFound } from "./NotFound/NotFound";
import { RootState, useAppDispatch } from "../redux/store";
const SignUpPage = lazy(() => import('../pages/SignUpPage/SignUpPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));


export function App() {
  const dispatch = useAppDispatch();
  useEffect(() => { dispatch(refreshUser({})); }, [dispatch]);
  const { isRefresh } = useSelector((state: RootState) => state.authorisation);

  return (
    !isRefresh ?
      <>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
           <Route index element={<Home />} />
            <Route path='/register' element={<RestrictedRoute component={SignUpPage} redirectTo={'/contacts'} />} />
            <Route path='/login' element={<RestrictedRoute component={LoginPage} redirectTo={'/contacts'} />} />
            <Route path='/contacts' element={<PrivateRoute component={ContactsPage} redirectTo={'/login'} />} />
            <Route path='*' element={<NotFound />} ></Route>
          </Route>
        </Routes>
      </> : null
  );
};

