// export default function userHandler(req, res) {
//     const {
//       query: { id, name },
//       method,
//     } = req

//     switch (method) {
//       case 'GET':
//         // Get data from your database
//         res.status(200).json({ id, name: `User ${id}` })
//         break
//       case 'PUT':
//         // Update or create data in your database
//         res.status(200).json({ id, name: name || `User ${id}` })
//         break
//       default:
//         res.setHeader('Allow', ['GET', 'PUT'])
//         res.status(405).end(`Method ${method} Not Allowed`)
//     }
//   }

export default async function handler(req, res) {
  // http://img.omdbapi.com/?s=batman&apikey=ec20d40e
  //   console.log("params ", req.query);
  if (req.query.id.length <= 2) {
    res.status(200).json({ loading: true });
  } else {
    try {
      const URL = `https://omdbapi.com/?s=${req.query.id}&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`;
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
