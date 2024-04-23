import { NextRequest, NextResponse } from 'next/server';
import { setKV, getKV } from '../utils/kvHandler';

export async function get(req: NextRequest, res: NextResponse) {
  // Retrieve data
  const user = await getKV('user:me');
  return NextResponse.json(user);
}

export async function post(req: NextRequest, res: NextResponse) {
  // Assuming you receive user data in JSON format in the request body
  const userData = await req.json();
  await setKV('user:me', userData);
  return NextResponse.json({ status: 'success' });
}
