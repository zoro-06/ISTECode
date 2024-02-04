import { NextApiRequest, NextApiResponse } from 'next';
import { reverseLinkedList } from '@/utils/problems/reverse-linked-list';  // Import your compiler utility functions

export default async function compileCpp(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { code } = req.body;

  try {
    // Compile the user's C++ code
    const compilationOutput = await reverseLinkedList(code);

    // Return the compilation output to the client
    return res.status(200).json({ result: compilationOutput });
  } catch (error) {
    console.error('Compilation error:', error);
    return res.status(500).json({ error: 'Compilation error' });
  }
}
