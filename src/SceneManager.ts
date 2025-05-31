import { Application, Container } from 'pixi.js';

export class SceneManager {
  private static currentScene: Container | null = null;

  static changeScene(newScene: Container, app: Application): void {
    if (this.currentScene) {
      app.stage.removeChild(this.currentScene);
      this.currentScene.destroy({ children: true });
    }
    this.currentScene = newScene;
    app.stage.addChild(this.currentScene);
  }
}
