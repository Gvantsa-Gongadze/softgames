import { Application, Text, TextStyle } from 'pixi.js';

export function FPSCounter(app: Application): void {
  const fpsText = new Text(
    'FPS: 0',
    new TextStyle({
      fill: '#00ff00',
      fontSize: 18,
      fontFamily: 'monospace',
    }),
  );
  fpsText.position.set(10, 10);
  app.stage.addChild(fpsText);

  // FPS logic
  let frameCount = 0;
  let lastTime = Date.now();

  app.ticker.add(() => {
    frameCount++;
    const now = Date.now();
    if (now - lastTime >= 1000) {
      fpsText.text = `FPS: ${frameCount}`;
      frameCount = 0;
      lastTime = now;
    }
  });
}
