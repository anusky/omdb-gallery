// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  // http://img.omdbapi.com/?s=batman&apikey=ec20d40e

  try {
    const URL = `https://omdbapi.com/?s=batman&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`;
    const response = await fetch(URL).then((res) => res.json());
    console.log("response ", response);
    if (response.Error) {
      console.log("IMb ID ", process.env.NEXT_PUBLIC_OMDB_API_KEY);
    }
    res.status(200).json({ data: response });
  } catch (e) {
    console.log("error ", e);
  }
}
