export interface Line {
  name: string;
  text: string;
}

export interface Emoji {
  name: string;
  url: string;
}

export interface Avatar {
  name: string;
  url: string;
  position: 'left' | 'right';
}

export interface Conversation {
  avatars: Avatar[];
  dialogue: Line[];
  emojies: Emoji[];
}

export interface Dialogue {
  name: string;
  avatarURL: string;
  splitedText: (
    | string
    | {
        url: string;
      }
  )[];
  position: 'left' | 'right';
}
