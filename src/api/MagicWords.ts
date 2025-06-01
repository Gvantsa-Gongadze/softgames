import { Conversation } from '../constants/interfaces/MagicWords';

export async function fetchDialogue(): Promise<Conversation | null> {
  try {
    const res = await fetch(
      'https://private-624120-softgamesassignment.apiary-mock.com/v2/magicwords',
    );
    if (!res.ok) throw new Error('Failed to fetch');
    return await res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}
