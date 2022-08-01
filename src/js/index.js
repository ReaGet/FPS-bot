import '../scss/main.scss';
import App from './app';

const app = new App();

document.body.addEventListener('click', (e) => {
  if (e.target.id === 'canvas')
    app.togglePause()
});