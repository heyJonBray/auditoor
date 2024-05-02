import { setKV } from '../../app/utils/kvHandler';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { key, value } = req.body;
      await setKV(key, value);
      res.status(200).json({ message: 'Data stored successfully' });
    } catch (error) {
      console.error('Error storing data:', error);
      res.status(500).json({ error: 'Failed to store data' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
