import { Container, Text } from 'pixi.js';

export class PhoenixFlame extends Container {
  constructor() {
    super();

    const text = new Text('Phoenix Flame', {
      fill: 'lime',
      fontSize: 28,
    });

    text.anchor.set(0.5);
    text.position.set(100, 100);

    this.addChild(text);
  }
}
