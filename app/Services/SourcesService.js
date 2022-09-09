import { appState } from "../AppState.js"
import { Source } from "../Models/Source.js"
import { saveState } from "../Utils/Store.js"
import { budgetsService } from "./BudgetsService.js"

class SourcesService {
  removeSource(sourceId) {
    let remainingSources = appState.sources.filter(source => source.id !== sourceId)
    appState.sources = remainingSources
    saveState("sources", appState.sources)
  }
  constructor() {

  }

  createSource(formData) {
    let source = new Source(formData)
    appState.sources = [source, ...appState.sources]
    budgetsService.isPurchased()
    saveState("sources", appState.sources)
  }
}

export const sourcesService = new SourcesService()