import { appState } from "../AppState.js";
import { budgetsService } from "../Services/BudgetsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML } from "../Utils/Writer.js";

function _drawBudget() {
  let template = ''
  appState.budgets.forEach(budget => template += budget.Template)
  setHTML('budgets', template)
}

export class BudgetsController {
  constructor() {
    budgetsService.isPurchased()
    _drawBudget()
    appState.on("budgets", _drawBudget)
    appState.on("sources", _drawBudget)
  }
  createBudget() {
    try {
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      const form = window.event.target
      let formData = getFormData(form)
      budgetsService.createBudget(formData)

      // @ts-ignore
      // form.reset()
    } catch (error) {
      console.error("createBudget", error)
    }
  }
}