import { appState } from "../AppState.js";
import { setHTML } from "../Utils/Writer.js";

function _drawBudget() {
  let template = ''
  appState.budgets.forEach(budget => template += budget.Template)
  setHTML('budgets', template)

}
export class BudgetsController {
  constructor() {
    console.log("budgets controller work?");


    _drawBudget()
  }
  createBudget() {

  }
}