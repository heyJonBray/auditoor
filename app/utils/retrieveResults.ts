// api/retrieve-results.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { getKV } from './kvHandler';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { chain, contract } = req.query;
  const data = await getKV(`${chain}-${contract}`);

  if (!data) {
    res.status(404).send('Data not found');
    return;
  }

  res.status(200).json(data);
}
