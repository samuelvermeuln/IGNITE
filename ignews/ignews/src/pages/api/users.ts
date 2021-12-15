import { NextApiRequest, NextApiResponse} from "next"


export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [ 
        {'nome':"samuel"},
        {'sobreNome':"santos"}
    ]

    return response.json(users)
}

// CONSEITO DE SERVELESS