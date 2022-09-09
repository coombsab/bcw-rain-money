import { sourcesService } from "../Services/SourcesService.js"
import { getFormData } from "../Utils/FormHandler.js"

export class SourcesController {
  constructor() {

  }

  createSource(budgetId) {
    try {
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      const form = window.event.target
      let formData = getFormData(form)
      // @ts-ignore
      formData.budgetId = budgetId
      sourcesService.createSource(formData)
      // @ts-ignore
      // form.reset()      
    } catch (error) {
      console.error("createSource", error)
    }
  }

  removeSource(sourceId) {
    sourcesService.removeSource(sourceId)
  }
}