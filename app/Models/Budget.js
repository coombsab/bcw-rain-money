import { generateId } from "../Utils/generateId.js"

export class Budget {
  constructor(data) {
    this.name = data.name
    this.total = data.total
    this.type = data.type
    this.id = data.id || generateId()


  }



  // TODO change string interpulations , 

  get Template() {
    return  /*html*/ ` 
      <div class="card elevation-2 my-3 mx-4 ">
        <div class="card-header d-flex justify-content-between ">
          <div class="d-flex gap-3">
            <input type="checkbox" name="" id="">
            <i class="mdi mdi-television"></i>
            <p>${this.name}</p>
          </div>
          <p>$320 of <span class="text-blue fw-bold">$${this.total}</span> </p>
        </div>
        <div class="card-body">
          <div class="d-flex justify-content-between mb-1">
            <p>sell told tv</p>
            <div class="d-flex gap-5">
              <p>$120</p>
              <i class="mdi mdi-delete"></i>
            </div>
          </div>
          <div class="d-flex justify-content-between mb-1">
            <p>sell told tv</p>
            <div class="d-flex gap-5">
              <p>$120</p>
              <i class="mdi mdi-delete"></i>
            </div>
          </div>
          <div class="d-flex justify-content-between mb-1">
            <p>sell told tv</p>
            <div class="d-flex gap-5">
              <p>$120</p>
              <i class="mdi mdi-delete"></i>
            </div>
          </div>
          <div class="card-footer mt-3">
            <form class="">
              <label for="name">Add Source</label>
              <div class="d-flex">
                <input type="text" class="form-control w-30" name="name" required placeholder="Budget Here">
                <input type="text" class="form-control w-50" name="amount" required placeholder="$">
                <button class="btn btn-primary px-4">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    
    `
  }
}