import { selectProfile } from "modules/auth/redux/selectors";
import { useAppSelector } from "redux/hooks";

const useGetProfile = () => useAppSelector(selectProfile);
export default useGetProfile;
