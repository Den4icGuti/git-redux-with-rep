import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserMenu } from "./UserMenu";

export const AppBar = () => { 

  const isLogin = useSelector(state => state.user.isloggin);

  return <header
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: 20,
      borderBottom: '1px solid black',
      marginBottom: 12,
     }}
  >
    <nav >
      {!isLogin &&  <Link to="/login">Log In</Link>}
      {isLogin &&  <Link to="/dashoboard">Dash Bord</Link>}
      
    </nav>
    {isLogin && <UserMenu/>}
  </header>
}