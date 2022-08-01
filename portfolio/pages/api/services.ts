import { NextApiRequest, NextApiResponse } from "next";
import { servieces } from "../../data";

export default async(req: NextApiRequest , res: NextApiResponse) => {
    res.setHeader('Cache-Control', 's-maxage=10'); 
    res.status(200).json(servieces);
}