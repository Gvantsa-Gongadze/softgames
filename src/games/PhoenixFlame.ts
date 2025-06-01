import { Assets, Container } from 'pixi.js';
import { DESIGN_HEIGHT, DESIGN_WIDTH } from '../constants/Constants';
import { FireEffect } from '../components/FireEffect';

export class PhoenixFlame extends Container {
  constructor() {
    super();
    const texture = Assets.get('fire');
    const fire = new FireEffect(texture);
    fire.scale.set(0.5);

    fire.position.set(DESIGN_WIDTH * 0.5, DESIGN_HEIGHT * 0.5);
    this.addChild(fire);
  }
}
