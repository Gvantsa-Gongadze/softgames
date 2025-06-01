import { Container } from 'pixi.js';
import { Conversation, Dialogue } from '../constants/interfaces/MagicWords';
import { flattenDialogue } from '../api/MagicWordsTransformed';
import { DialogueView } from '../components/Dialogue';
import { DESIGN_HEIGHT, DESIGN_WIDTH } from '../constants/Constants';

export class MagicWords extends Container {
  private dialogue: Dialogue[] = [];

  constructor(data: Conversation | null) {
    super();
    if (data) {
      this.dialogue = flattenDialogue(data);
    }

    for (let i = 0; i < this.dialogue.length; i++) {
      const element = this.dialogue[i];
      const line = new DialogueView(element);
      line.y = this.height + line.height - 20;
      this.addChild(line);
    }

    this.scale.set((DESIGN_HEIGHT - 300) / this.height);
    this.position.set((DESIGN_WIDTH - this.width) * 0.5, 20);
  }
}
