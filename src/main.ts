import { Application, Renderer } from 'pixi.js';
import { SceneManager } from './SceneManager';

import '../styles/main.css';
import { AceOfShadows } from './games/AceOfShadows';
import { MainMenu } from './components/MainMenu';

const app = new Application({
  width: 800,
  height: 600,
  resizeTo: window,
  backgroundColor: 0x1d1d1d,
});

declare global {
  interface Window {
    __PIXI_APP__: Application;
    __PIXI_RENDERER__: Renderer;
  }
}

window.__PIXI_APP__ = app;
window.__PIXI_RENDERER__ = app.renderer as Renderer;

document.body.appendChild(app.view as HTMLCanvasElement);

const menu = new MainMenu(app);
menu.position.set((app.view.width - menu.width) * 0.5, app.view.height * 0.02);
app.stage.addChild(menu);

SceneManager.changeScene(new AceOfShadows(), app);
