import { useSelector, useDispatch } from "react-redux";
import { logOut } from "Redux/slice/userSlice";



export const UserMenu = () => { 
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.login)
  return (
    <div>{user}
    <button onClick={() => dispatch(logOut())}>Log out</button>
    </div>
  );
} 