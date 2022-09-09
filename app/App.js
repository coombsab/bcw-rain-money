import { BudgetsController } from "./Controllers/BudgetsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  budgetsController = new BudgetsController()
}

window["app"] = new App();
