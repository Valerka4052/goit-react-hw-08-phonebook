import { useDispatch, useSelector } from "react-redux";
import { LogOut } from "redux/Sign/operations";


export function UserMenu() {
    const dispatch = useDispatch()
    const user  = useSelector(state=>state.authorisation.user.name)

    return (
        <div>
            <p>Hello {user}</p>
            <button onClick={() => dispatch(LogOut())}>Logout</button>
        </div>
    );
}