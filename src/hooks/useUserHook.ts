import { useSelector } from "react-redux";

interface RootState {
  userReducer: {
    name: string;
  };
}

export const useUserHook = () => {
  const userName = useSelector((state: RootState) => state.userReducer.name);

  return { userName };
};
