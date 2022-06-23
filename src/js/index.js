import '../scss/main.scss';
import App from './app';

const app = new App();

document.body.addEventListener('mousedown', () => {
  app.togglePause()
});