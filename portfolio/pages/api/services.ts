import { NextApiRequest, NextApiResponse } from "next";
import { servieces } from "../../data";

export default async(req: NextApiRequest , res: NextApiResponse) => {
    res.status(200).json(servieces);
}