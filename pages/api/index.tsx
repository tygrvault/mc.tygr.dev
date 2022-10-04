import { NextApiRequest, NextApiResponse } from "next";

const apiRoute = async (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).send("Hello World");
};

export default apiRoute;