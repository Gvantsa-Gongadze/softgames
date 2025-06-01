import {
  Avatar,
  Conversation,
  Dialogue,
  Emoji,
} from '../constants/interfaces/MagicWords';

export function flattenDialogue(data: Conversation): Dialogue[] {
  const transformedData: Dialogue[] = [];

  const dialogue = data.dialogue;
  const avatars = data.avatars;
  const emojies = data.emojies;

  for (let i = 0; i < dialogue.length; i++) {
    const message = dialogue[i];

    const name = message.name;
    const avatar: Avatar = avatars.filter((avatar) => avatar.name === name)[0];
    const avatarURL = avatar?.url || '';
    const position = avatar?.position;
    const text = message.text;
    const splitedText = splitTextWithEmojis(text, emojies);

    const line: Dialogue = {
      name,
      avatarURL,
      splitedText,
      position,
    };

    transformedData.push(line);
  }

  return transformedData;
}

function splitTextWithEmojis(
  text: string,
  emojies: Emoji[],
): (string | { url: string })[] {
  const result: (string | { url: string })[] = [];
  let current = '';
  let insideTag = false;
  let tagBuffer = '';

  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    if (char === '{') {
      if (current) result.push(current);
      current = '';
      insideTag = true;
      tagBuffer = '';
    } else if (char === '}' && insideTag) {
      const emojieUral =
        emojies.filter((emoji) => emoji.url === tagBuffer)[0]?.url || '';
      result.push({ url: emojieUral });
      insideTag = false;
    } else if (insideTag) {
      tagBuffer += char;
    } else {
      current += char;
    }
  }

  if (current) result.push(current);

  return result;
}
