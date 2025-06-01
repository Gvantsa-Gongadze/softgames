import { Assets } from 'pixi.js';
import { DIFFERENT_CARD_COUNT, GAME_NAMES } from './Constants';

export const AddBandles = (): void => {
  const bundle: Record<string, string> = {};

  for (let i = 0; i < DIFFERENT_CARD_COUNT; i++) {
    bundle[`card-${i}`] = `/assets/cards/${i}.png`;
  }

  Assets.addBundle(GAME_NAMES.AceOfShadows, bundle);

  Assets.addBundle(GAME_NAMES.PhoenixFlame, {
    fire: '/assets/particles/fire.png',
  });
};
