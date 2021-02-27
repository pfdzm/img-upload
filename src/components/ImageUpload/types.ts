export interface Image {
  file: File
  status: ProgressStatus
}

type ProgressStatus = 'in-progress' | 'done' | 'failed'

export type State = Map<string, Image>

export type Action =
  | { type: 'add_image'; file: File; status: ProgressStatus; uuid: string }
  | { type: 'update_status'; status: ProgressStatus; uuid: string }

export interface ImageProps {
  img: Image
}
