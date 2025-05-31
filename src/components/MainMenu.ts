import { Application, Container, Text } from 'pixi.js';
import { SceneManager } from '../SceneManager';
import { AceOfShadows } from '../games/AceOfShadows';
import { MagicWords } from '../games/MagicWords';
import { PhoenixFlame } from '../games/PhoenixFlame';
import { MenuItem } from '../types/MenuItemType';
import { gsap } from 'gsap';

export class MainMenu extends Container {
  private menuItemViews: Text[] = [];
  constructor(app: Application) {
    super();

    const menuItems: MenuItem[] = [
      {
        label: 'Ace of Shadows',
        onClick: () => SceneManager.changeScene(new AceOfShadows(), app),
        isActive: true,
      },
      {
        label: 'Magic Words',
        onClick: () => SceneManager.changeScene(new MagicWords(), app),
        isActive: false,
      },
      {
        label: 'Phoenix Flame',
        onClick: () => SceneManager.changeScene(new PhoenixFlame(), app),
        isActive: false,
      },
    ];

    const spacing = 15;
    menuItems.forEach((item, index) => {
      const text = new Text(item.label, {
        fontSize: 24,
        fill: item.isActive ? '#CBC1AE' : 'white',
      });
      this.menuItemViews.push(text);
      text.anchor.set(0.5);
      text.scale.set(item.isActive ? 1.04 : 1);

      const prevItem = this.menuItemViews[index - 1];
      const lastItemPos = prevItem
        ? prevItem.x + (prevItem.width + text.width) * 0.5 + spacing
        : 0;
      text.position.set(lastItemPos, 0);

      text.eventMode = 'static';
      text.cursor = 'pointer';

      text.on('pointerdown', () => {
        item.onClick();
        this.activateMenuItem(index);
      });

      this.addChild(text);
    });
  }
  activateMenuItem = (i: number): void => {
    this.menuItemViews.forEach((text: Text, index: number) => {
      text.style.fill = i === index ? '#CBC1AE' : 'white';
      const scaleTo = i === index ? 1.04 : 1;
      gsap.to(text.scale, { x: scaleTo, y: scaleTo, duration: 0.1 });
      // text.style.fontSize = i === index ? 26 : 24;
    });
  };
}
