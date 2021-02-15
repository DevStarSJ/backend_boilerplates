export interface BoardKey {
  category: string
  id: string
}

export interface Board extends BoardKey {
  title: string
  url: string
  valid: string
  createdAt: string
  updatedAt: string
}

export interface BoardInput {
  title: string,
  url: string,
  category?: string,
  filename?: string,
}
