import { getSearchUrl } from "../../../../utils/apiRoutes";
import { fromSpacesToPlus } from "../../../../utils/strings";

export default async function handler(req, res) {
  if (req.query.id.length <= 2) {
    res.status(200).json({ loading: true });
  } else {
    try {
      const { id, page = 1, parsedId = fromSpacesToPlus(id) } = req.query;
      const URL = getSearchUrl(parsedId, page);
      const response = await fetch(URL).then((res) => res.json());

      if (response.Error) {
        console.log("Error: ", response);
      }
      res.status(200).json({ ...response });
    } catch (e) {
      console.log("error ", e);
    }
  }
}
