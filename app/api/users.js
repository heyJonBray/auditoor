import { kv } from '@vercel/kv';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req, res) {
  const { key, operation } = req.query;

  // Handling different operations
  try {
    if (operation === 'delete' && key) {
      // Deletes the specified key
      await kv.del(key);
      res.status(200).json({ success: true, message: `Key '${key}' deleted.` });
    } else if (key) {
      // Retrieves the value for the specified key
      const value = await kv.get(key);
      res.status(200).json({ key, value });
    } else {
      // List all keys in the namespace (not directly supported, pseudocode)
      const keys = await kv.list(); // This is hypothetical; adjust based on actual API capabilities
      res.status(200).json(keys);
    }
  } catch (error) {
    console.error('KV operation failed:', error);
    res.status(500).json({
      error: 'Failed to perform KV operation.',
      details: error.message,
    });
  }
}
