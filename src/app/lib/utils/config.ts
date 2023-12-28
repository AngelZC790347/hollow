const TMBDB_ENDPOINT = {
    baseURL :"https://api.themoviedb.org/3/",
    authHeader : {
    "Authorization":`Bearer ${process.env.API_KEY}`,
    'accept':'application/json'
    }
}
export default TMBDB_ENDPOINT