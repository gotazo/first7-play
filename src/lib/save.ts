const STORAGE_KEY = "first7-progress"

export interface ProgressData {
  completed: string[]
}

export function loadProgress(): ProgressData {
  if (typeof localStorage === "undefined") {
    return {
      completed: []
    }
  }

  const raw = localStorage.getItem(STORAGE_KEY)

  if (!raw) {
    return {
      completed: []
    }
  }

  return JSON.parse(raw)
}

export function saveProgress(data: ProgressData) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(data)
  )
}

export function markPuzzleComplete(id: string) {
  const progress = loadProgress()

  if (!progress.completed.includes(id)) {
    progress.completed.push(id)

    saveProgress(progress)
  }
}

export function isPuzzleComplete(id: string) {
  const progress = loadProgress()

  return progress.completed.includes(id)
}