// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { isEmpty } from "lodash";
import { getMovieUrl } from "../../../utils/apiRoutes";

export default async function handler(req, res) {
  if (isEmpty(req.query.id)) {
    res.status(400).json({ Error: "Bad movie id" });
  } else {
    try {
      const URL = getMovieUrl(req.query.id);
      const response = await fetch(URL).then((res) => res.json());

      res.status(200).json({ ...response });
    } catch (e) {
      console.log("error ", e);
    }
  }
}
