import { useSelector } from "react-redux";

export const useAuth = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  if (isAuthenticated) {
    return true;
  } else {
    return false;
  }
};

export const getToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return token;
  } else {
    return false;
  }
};

export const UseGetRole = () => {
  const { user } = useSelector((state) => state.auth);
  if (user) {
    return user.userData.role;
  } else {
    return false;
  }
};

export const GetPermissions = () => {
  const { user } = useSelector((state) => state.auth);
  if (user) {
    return user.userData.permissions;
  } else {
    return false;
  }
};
