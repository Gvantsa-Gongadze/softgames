import { Container, Sprite, Text, TextStyle } from 'pixi.js';
import { Dialogue } from '../constants/interfaces/MagicWords';
import { DESIGN_WIDTH } from '../constants/Constants';

export class DialogueView extends Container {
  constructor(dialogue: Dialogue) {
    super();
    const position = dialogue.position;

    // avatar
    const avatarURL = dialogue.avatarURL;
    const avatarDimencions = 40;
    if (avatarURL) {
      const avatar = Sprite.from(avatarURL);
      avatar.width = avatar.height = avatarDimencions;
      this.addChild(avatar);
      if (position === 'right') {
        avatar.position.set(DESIGN_WIDTH - avatar.width - 10, 0);
      }
    }

    // name
    const name = dialogue.name;
    const nameText = new Text(
      name,
      new TextStyle({
        fill: '#ffffff',
        fontSize: 14,
        fontWeight: 'bold',
      }),
    );
    nameText.position.set(
      position === 'left'
        ? avatarDimencions + 10
        : DESIGN_WIDTH - avatarDimencions - nameText.width - 10,
      avatarDimencions - nameText.height,
    );
    this.addChild(nameText);

    // texts
    const splitedText = dialogue.splitedText;
    const textContainer = new Container();
    this.addChild(textContainer);

    for (let i = 0; i < splitedText.length; i++) {
      const text = splitedText[i];

      if (typeof text === 'string') {
        const txt = new Text(
          text,
          new TextStyle({
            fill: 'white',
            fontSize: 20,
            wordWrap: true,
            wordWrapWidth: 900,
          }),
        );

        txt.position.set(textContainer.width + 10, avatarDimencions + 10);
        textContainer.addChild(txt);
      } else {
        if (text.url) {
          const emoji = Sprite.from(text.url);
          emoji.width = emoji.height = 20;
          textContainer.addChild(emoji);
        }
      }
    }

    if (position === 'right') {
      textContainer.position.set(DESIGN_WIDTH - textContainer.width - 10, 0);
    }
  }
}
