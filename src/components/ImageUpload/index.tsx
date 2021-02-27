import styles from './index.module.scss'
import classNames from 'classnames/bind'
import { v4 as uuidv4 } from 'uuid'
import { Fragment, useReducer } from 'react'
import { Action, Image, State } from './types'
import produce, { enableMapSet } from 'immer'
import ImageListItem from './ImageListItem'

const cn = classNames.bind(styles)
enableMapSet()

const imageReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'add_image':
      return state.set(action.uuid, {
        file: action.file,
        status: 'in-progress',
      })
    case 'update_status':
      const img = state.get(action.uuid)
      if (img) {
        img.status = action.status
      }
      return

    default:
      return state
  }
}

const initialImageState = new Map<string, Image>()

const mockUpload = async (image: File): Promise<{ status: number }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ status: 200 })
    }, 500)
  })
}

const ImageUpload: React.FC = () => {
  const [images, dispatch] = useReducer(
    produce(imageReducer),
    initialImageState
  )

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      const image = e.currentTarget.files[0]
      e.currentTarget.value = ''
      if (image) {
        const imageUUID = uuidv4()
        dispatch({
          type: 'add_image',
          file: image,
          status: 'in-progress',
          uuid: imageUUID,
        })
        const { status } = await mockUpload(image)
        if (status !== 200) {
          dispatch({ type: 'update_status', status: 'failed', uuid: imageUUID })
        }
        dispatch({ type: 'update_status', status: 'done', uuid: imageUUID })
      }
    }
  }
  return (
    <Fragment>
      <input
        className={cn('file-input', 'transition')}
        type="file"
        name="image"
        id="image"
        onChange={handleChange}
        accept="image/*"
      />
      <ol className={cn('files-list')}>
        {[...images].map(([uuid, img]) => (
          <ImageListItem key={uuid} img={img} />
        ))}
      </ol>
    </Fragment>
  )
}

export default ImageUpload
