import { generateId } from "../Utils/generateId.js";
/**
 * @param {{id: string, name: string, amount: number, budgetId: string}} Source
 */
export class Source {
  constructor(data) {
    this.id = data.id || generateId()
    this.name = data.name
    this.amount = data.amount
    this.budgetId = data.budgetId
  }

  get Template() {
    return /*html*/`
     <div class="d-flex justify-content-between mb-1">
        <p>${this.name.toUpperCase()}</p>
        <div class="d-flex gap-5">
          <p>$${this.amount}</p>
          <i class="mdi mdi-delete selectable" onclick="app.sourcesController.removeSource('${this.id}')"></i>
        </div>
      </div>
    `
  }
}