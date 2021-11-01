import { useEffect } from "react";
import qs from "query-string";
import { useLocation, useHistory } from "react-router-dom";
import { getCurrentUserDetails } from "@/services/spotifyApi";

const SpotifyRedirect = ({ setAuth = () => {} }) => {
  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    const setUserDetails = async () => {
      const data = qs.parse(location.hash);
      const token = data["access_token"];
      const userDetails = await getCurrentUserDetails(token);
      setAuth(userDetails);
      history.push("/");
    };
    setUserDetails();
  }, []);

  return <div>LoggingIn...</div>;
};

export default SpotifyRedirect;
