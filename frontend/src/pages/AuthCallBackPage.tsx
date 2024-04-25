import { useCreateMyUser } from "@/api/MyUserApi";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallBackPage = () => {
  const { user } = useAuth0();
  const navigate = useNavigate();
  const { createUser } = useCreateMyUser();
  const hasCreatedUser = useRef(false);
  useEffect(() => {
    if (user?.sub && user?.email && !hasCreatedUser.current) {
      // user email && sub exists then only it will call createUser() function
      createUser({ auth0Id: user.sub, email: user?.email });
      hasCreatedUser.current = true; // this will make sure that this use effect will not re-render again even after passing empty array as dependencies
    }
    navigate("/");
  }, []);

  return <>Loading...</>;
};

export default AuthCallBackPage;
