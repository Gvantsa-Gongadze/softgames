import { Container, Sprite, Texture } from 'pixi.js';
import { gsap } from 'gsap';

export class FireEffect extends Container {
  private flames: Sprite[] = [];
  private baseY = 0;

  constructor(texture: Texture, width = 200, height = 200) {
    super();

    this.baseY = height;

    for (let i = 0; i < 10; i++) {
      const sprite = new Sprite(texture);
      sprite.anchor.set(0.5);
      sprite.scale.set(0.5);
      sprite.x = Math.random() * width;
      sprite.y = this.baseY;
      sprite.alpha = 0;
      sprite.scale.set(Math.random() * 0.2 + 0.3);

      this.flames.push(sprite);
      this.addChild(sprite);

      this.animate(sprite);
    }
  }

  private animate(sprite: Sprite) {
    sprite.x = Math.random() * 200;
    sprite.y = this.baseY;
    sprite.alpha = 0.5 + Math.random() * 0.5;
    sprite.scale.set(Math.random() * 0.3 + 0.5);

    gsap.to(sprite, {
      y: this.baseY - 100 - Math.random() * 50,
      alpha: 0,
      duration: 1.2 + Math.random(),
      ease: 'sine.out',
      onComplete: () => this.animate(sprite),
    });
  }
}
