// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getMovieUrl } from "../../../utils/apiRoutes";

export default async function handler(req, res) {
  try {
    const URL = getMovieUrl(req.query.id);
    const response = await fetch(URL).then((res) => res.json());

    if (response.Error) {
      console.log("IMb ID ", req.query.id, " ", response);
    }
    res.status(200).json({ ...response });
  } catch (e) {
    console.log("error ", e);
  }
}
