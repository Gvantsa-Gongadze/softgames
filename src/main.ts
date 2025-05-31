import { Application, Assets, Container, Renderer } from 'pixi.js';
import { SceneManager } from './SceneManager';
import '../styles/main.css';
import { AceOfShadows } from './games/AceOfShadows';
import { MainMenu } from './components/MainMenu';
import { AddBandles } from './constants/AddBandles';
import { GAME_NAMES } from './constants/Constants';

const DESIGN_WIDTH = 1440;
const DESIGN_HEIGHT = 900;

const INITIAL_GAME_NAME = GAME_NAMES.AceOfShadows;

const app = new Application({
  resizeTo: window,
  backgroundColor: 0x000000,
});

document.body.appendChild(app.view as HTMLCanvasElement);

const sceneContainer = new Container();
app.stage.addChild(sceneContainer);

const menu = new MainMenu(app);
menu.position.set((DESIGN_WIDTH - menu.width) * 0.5, DESIGN_HEIGHT * 0.02);
app.stage.addChild(menu);

// load initial game
AddBandles();
Assets.loadBundle(INITIAL_GAME_NAME).then(() => {
  SceneManager.changeScene(new AceOfShadows(), app, INITIAL_GAME_NAME);
});

// resize stage
window.addEventListener('resize', () => {
  resizeStage();
});
resizeStage();

function resizeStage() {
  const screenWidth = window.innerWidth;
  app.stage.scale.set(screenWidth / DESIGN_WIDTH);
}

// for pixi dev tools
declare global {
  interface Window {
    __PIXI_APP__: Application;
    __PIXI_RENDERER__: Renderer;
  }
}

window.__PIXI_APP__ = app;
window.__PIXI_RENDERER__ = app.renderer as Renderer;
