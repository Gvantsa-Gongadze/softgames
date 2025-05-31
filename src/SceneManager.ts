import { Application, Assets, Container } from 'pixi.js';

export class SceneManager {
  private static currentScene: Container | null = null;
  private static currentBundleName: string = '';

  static changeScene(
    newScene: Container,
    app: Application,
    bandleName: string,
  ): void {
    if (bandleName === this.currentBundleName) return;

    if (this.currentScene) {
      this.currentScene.children.map((child) => {
        child.removeAllListeners();
      });
      app.stage.removeChild(this.currentScene);
      app.stage.removeAllListeners();
      Assets.unloadBundle(this.currentBundleName);
    }

    this.currentScene = newScene;
    app.stage.addChild(this.currentScene);
    this.currentBundleName = bandleName;
  }
}
