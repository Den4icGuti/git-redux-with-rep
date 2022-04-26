import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { logOut } from "Redux/slice/userSlice";

export const useOutRedirect = () => { 
  const login = useSelector(state => state.user.logOut)
  const navigate = useNavigate();

  useEffect(() => { 
    if (!logOut) { 
      navigate('/login', {replace:true})
    }
   
  },[navigate,login])

 }
