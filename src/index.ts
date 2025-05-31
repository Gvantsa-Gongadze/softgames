import * as PIXI from 'pixi.js';
import '../styles/main.css';

const app = new PIXI.Application({
  width: 800,
  height: 600,
  backgroundColor: 0x000000,
});

document.body.appendChild(app.view as HTMLCanvasElement);
