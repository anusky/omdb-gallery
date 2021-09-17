// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  // http://img.omdbapi.com/?s=batman&apikey=ec20d40e

  try {
    const URL = `https://omdbapi.com/?i=${req.query.id}&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`;
    const response = await fetch(URL).then((res) => res.json());
    // console.log("response ", response);
    if (response.Error) {
      console.log("IMb ID ", req.query.id, " ", response);
    }
    res.status(200).json({ ...response });
  } catch (e) {
    console.log("error ", e);
  }
}
