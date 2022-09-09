import { appState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"

/**
 * @param {{name: string, total: number, type: string, id: string, purchased: boolean}} Budget
 */
export class Budget {
  constructor(data) {
    this.name = data.name
    this.total = data.total
    this.type = data.type
    this.id = data.id || generateId()
    this.purchased = data.purchased || false

  }

  get Template() {
    return  /*html*/ ` 
      <div class="card elevation-2 my-3 mx-4 ">
        <div class="card-header d-flex justify-content-between ">
          <div class="d-flex gap-3">
            <input type="checkbox" onchange="app.budgetsController.toggleBudgetPurchased('${this.id}')" name="" id="" ${this.purchased ? 'checked' : ''}>
            <i class="mdi mdi-television"></i>
            <p>${this.name.toUpperCase()}</p>
          </div>
          <p><span class="${(this.SourcesTotal >= this.total) ? 'text-blue fw-bold' : ''}">$${this.SourcesTotal}</span> of <span class="text-blue fw-bold">$${this.total}</span> </p>
        </div>
        <div class="card-body">
          ${this.SourcesTemplate}
          <div class="card-footer mt-3">
            <form onsubmit="app.sourcesController.createSource('${this.id}')">
              <label for="name">Add Source</label>
              <div class="d-flex">
                <input type="text" class="form-control w-30" name="name" required placeholder="Budget Here">
                <input type="text" class="form-control w-50" name="amount" required placeholder="$">
                <button class="btn btn-primary px-4" type="submit">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    
    `
  }

  get SourcesTemplate() {
    let template = ""
    let filteredSources = this.Sources
    filteredSources.forEach(source => template += source.Template)

    return template
  }

  get Sources() {
    let filteredSources = appState.sources.filter(source => source.budgetId === this.id)
    return filteredSources
  }

  get SourcesTotal() {
    let total = 0
    let filteredSources = appState.sources.filter(source => source.budgetId === this.id)
    filteredSources.forEach(source => total += parseInt(source.amount))
    return total
  }
}