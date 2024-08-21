import View from "./modules/view";
import './css/style.css'
import Model from "./modules/model";
import Controller from "./modules/controller";

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
    const view = new View(app);
    const model = new Model(view);
    const controller = new Controller(model,app)
});
