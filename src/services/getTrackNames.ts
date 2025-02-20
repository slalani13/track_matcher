import fetchFromSpotify from 'src/services/api';
const TOKEN_KEY = "whos-who-access-token";


export async function getTrackNamesFromArtist(id:string):Promise<Array<string>> {
  const storedToken = localStorage.getItem(TOKEN_KEY);
  console.log("Stored Token:", storedToken);

  const parsedToken = storedToken ? JSON.parse(storedToken).value : null;
  console.log("Parsed Token:", parsedToken);


  return fetchFromSpotify({
    token: parsedToken,
    endpoint: `/artists/${id}/top-tracks`,
    params: {market: 'US'}
  }).then((response) => {

    if (response && response.tracks) {
      const trackNames = response.tracks.map((track: { name: string }) => track.name);
      console.log("tracks: "+trackNames);
      return trackNames;
    }
    console.log("getting tracks failed for id: "+id);
    return [];

  }).catch(() => {
    console.log("getting tracks failed for id: "+id);
    return [];
  })
}