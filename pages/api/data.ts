// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import data from '../../data.json';

type Data = {
  id: number;
  img: string;
  title: string;
  subtitle: string;
  action: string;
}[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(data);
}
