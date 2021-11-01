import qs from "query-string";

const responseType = 'token';
const clientId = import.meta.env.VITE_APP_SPOTIFY_CLIENT_ID;
const redirectUri = import.meta.env.VITE_APP_SPOTIFY_REDIRECT_URI;

const Login = () => {
  const handleLogin = () => {
    const spotifyAuthOptions = {
      "response_type": encodeURI(responseType),
      "client_id": encodeURI(clientId),
      "redirect_uri": encodeURI(redirectUri),
    }

    const queryString = qs.stringify(spotifyAuthOptions);
    const spotifyUrl = `https://accounts.spotify.com/authorize?${queryString}`;
    document.location = spotifyUrl;
  }

  return (
    <div>
      Login!
      <br/>
      <button onClick={handleLogin}>Click me!</button>
    </div>
  );
};

export default Login;
