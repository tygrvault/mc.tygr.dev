import { ping } from "minecraft-protocol";
import { NextApiRequest, NextApiResponse } from "next";

const apiRoute = async (req: NextApiRequest, res: NextApiResponse) => {

    await ping({ host: process.env.HOST, port: parseInt(process.env.PORT) }).then((response) => {
        res.status(200).json(response);
    }).catch((error) => {
        res.status(500).json({ error: error });
    });
};

export default apiRoute;