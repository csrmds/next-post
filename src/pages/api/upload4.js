import {createRouter} from "next-connect"

const apiRoute= createRouter({
   onNoMatch(req, res) {
      res.status(405).json({error: `Method '${req.method}' Not Allowed!`})
   }
})

apiRoute.post((req, res)=> {
   res.status(200).json({data: 'success'})
})


export default apiRoute