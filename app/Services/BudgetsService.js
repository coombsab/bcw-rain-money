import { appState } from "../AppState.js"
import { Budget } from "../Models/Budget.js"
import { saveState } from "../Utils/Store.js"

class BudgetsService {
  createBudget(formData) {
    appState.budgets = [new Budget(formData), ...appState.budgets]
    saveState("budgets", appState.budgets)
    console.log("budgets", appState.budgets)
  }

  isPurchased() {
    appState.budgets.forEach(budget => {
      if (budget.SourcesTotal >= budget.total) {
        budget.purchased = true
      }
    })
  }

}

export const budgetsService = new BudgetsService()