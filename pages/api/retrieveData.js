import { getKV } from '../../app/utils/kvHandler';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { key } = req.query;
      const data = await getKV(key);
      if (data) {
        res.status(200).json({ data });
      } else {
        res.status(404).json({ error: 'Data not found' });
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
      res.status(500).json({ error: 'Failed to retrieve data' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
