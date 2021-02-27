import classNames from 'classnames/bind'
import styles from './index.module.scss'
import { ImageProps } from './types'

const cn = classNames.bind(styles)

const ImageListItem: React.FC<ImageProps> = ({ img }) => (
  <li
    className={cn(
      'transition',
      { 'in-progress': img.status === 'in-progress' },
      { done: img.status === 'done' },
      { failed: img.status === 'failed' }
    )}
  >
    <h3>{img.file.name}</h3>
    <img src={img.imgUrl} className={cn('image')} alt="" />
  </li>
)

export default ImageListItem
