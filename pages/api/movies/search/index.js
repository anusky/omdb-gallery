export default async function handler(req, res) {
  if (req.query.id.length <= 2) {
    res.status(200).json({ loading: true });
  } else {
    try {
      const { id, page = 1 } = req.query;
      const URL = `https://omdbapi.com/?s=${id}&page=${page}&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`;
      const response = await fetch(URL).then((res) => res.json());

      if (response.Error) {
        console.log("IMb ID ", process.env.NEXT_PUBLIC_OMDB_API_KEY);
      }
      res.status(200).json({ ...response });
    } catch (e) {
      console.log("error ", e);
    }
  }
}
