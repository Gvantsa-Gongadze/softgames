import { Container, Text } from 'pixi.js';

export class AceOfShadows extends Container {
  constructor() {
    super();

    const text = new Text('Ace of Shadows', {
      fill: 'lime',
      fontSize: 28,
    });

    text.anchor.set(0.5);
    text.position.set(100, 100);

    this.addChild(text);
  }
}
