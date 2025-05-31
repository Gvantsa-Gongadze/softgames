import { Assets, Container, Point, Sprite } from 'pixi.js';
import { Power0 } from 'gsap/all';
import gsap from 'gsap';
import { DIFFERENT_CARD_COUNT } from '../constants/Constants';

export class AceOfShadows extends Container {
  private cardsLeft: Sprite[] = [];

  private rightDeckContainer: Container = new Container();
  private leftDeckContainer: Container = new Container();

  private totalCardCount: number = 144;
  private cardPadding: number = 1;

  constructor() {
    super();

    this.addChild(this.leftDeckContainer);
    this.leftDeckContainer.position.set(300, 100);

    this.addChild(this.rightDeckContainer);
    this.rightDeckContainer.position.set(300, 100);

    for (let i = 0; i < this.totalCardCount; i++) {
      const cardNumber = Math.floor(Math.random() * DIFFERENT_CARD_COUNT);
      const texture = Assets.get(`card-${cardNumber}`);
      const sprite = new Sprite(texture);
      sprite.scale.set(0.3);
      const positions: Point = new Point(
        -i * this.cardPadding,
        i * this.cardPadding,
      );
      sprite.position.set(positions.x, positions.y);
      this.cardsLeft.push(sprite);
      this.leftDeckContainer.addChild(sprite);
    }

    this.animateCard(this.totalCardCount - 1);
  }

  private animateCard(index: number, moveRight: boolean = true): void {
    if (index <= -1) {
      moveRight = false;
      index = 0;
      this.addChild(this.leftDeckContainer);
    } else if (index > this.totalCardCount - 1) {
      moveRight = true;
      index = 4;
      this.addChild(this.rightDeckContainer);
    }

    const curCard = this.cardsLeft[index];
    if (!curCard) return;

    if (moveRight) {
      this.rightDeckContainer.addChild(curCard);
    } else {
      this.leftDeckContainer.addChild(curCard);
    }

    gsap.killTweensOf(curCard);
    gsap.to(curCard, {
      x: moveRight
        ? curCard.x + 600 + index * this.cardPadding * 2
        : -index * this.cardPadding,
      y: moveRight
        ? curCard.y + 150 - index * this.cardPadding * 2
        : index * this.cardPadding,
      duration: 2,
      delay: 1,
      ease: Power0.easeIn,
      onComplete: () => {
        const newIndex = moveRight ? --index : ++index;

        this.animateCard(newIndex, moveRight);
      },
    });
  }
}
