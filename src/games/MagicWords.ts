import { Container, Text } from 'pixi.js';

export class MagicWords extends Container {
  constructor() {
    super();

    const text = new Text('Magic Words', {
      fill: 'lime',
      fontSize: 28,
    });

    text.anchor.set(0.5);
    text.position.set(100, 100);

    this.addChild(text);
  }
}
