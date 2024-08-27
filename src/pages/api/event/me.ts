import { NextApiRequest, NextApiResponse } from "next";
import { requestMyTickets } from '@/apis/server/ticket';
import { getHeadersFromRequest } from '@/apis/server/request';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const result = await requestMyTickets(getHeadersFromRequest(req))
      return res.status(200).json(result)
    } catch (e) {
      return res.status(e.status).json(e.error)
    }
  }
}