import axios from "axios"

export const getCurrentUserDetails = async (token) => {
  const queryUrl = `${import.meta.env.VITE_APP_SPOTIFY_BASE_URL}/me`
  try {
    const response = await axios.get(queryUrl, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return await response.data;
  } catch (error) {
    console.log('error: ', error)
  }
}