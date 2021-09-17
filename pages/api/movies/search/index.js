import { fromSpacesToPlus } from "@utils/strings";

export default async function handler(req, res) {
  if (req.query.id.length <= 2) {
    res.status(200).json({ loading: true });
  } else {
    try {
      const { id, page = 1, parsedId = fromSpacesToPlus(id) } = req.query;
      const URL = `https://omdbapi.com/?s=${parsedId}&page=${page}&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`;
      const response = await fetch(URL).then((res) => res.json());

      if (response.Error) {
        console.log("IMb ID ", response);
      }
      res.status(200).json({ ...response });
    } catch (e) {
      console.log("error ", e);
    }
  }
}
