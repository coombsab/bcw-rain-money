import { BudgetsController } from "./Controllers/BudgetsController.js";
import { SourcesController } from "./Controllers/SourcesController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  budgetsController = new BudgetsController()
  sourcesController = new SourcesController()
}

window["app"] = new App();
