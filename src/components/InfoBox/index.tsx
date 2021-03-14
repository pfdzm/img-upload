import classNames from 'classnames/bind'
import { useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { ReactComponent as ChevronDown } from './chevron-down.svg'
import styles from './index.module.scss'
import './transitions.scss'
import type { InfoBoxProps } from './types'

const cn = classNames.bind(styles)

const InfoBox = ({
  contentBody,
  contentHeader = 'Information',
  showContent = true,
  type = 'info',
}: InfoBoxProps) => {
  const [show, setShow] = useState(showContent ?? true)
  const toggleVisibility = () => setShow((prevState) => !prevState)
  const chevronRef = useRef(null)
  const contentRef = useRef(null)

  if (!contentBody) {
    return null
  }

  return (
    <div className={cn('info-box', 'container', 'box-shadow', type)}>
      <div className={cn('content')}>
        <div className={cn('header')} onClick={toggleVisibility}>
          <CSSTransition
            in={show}
            timeout={300}
            classNames="rotate"
            nodeRef={chevronRef}
          >
            <ChevronDown
              className={cn('h-2', 'w-2', { rotated: show })}
              ref={chevronRef}
            />
          </CSSTransition>
          <h2>{contentHeader}</h2>
        </div>
        <CSSTransition
          classNames="fade"
          in={show}
          timeout={300}
          nodeRef={contentRef}
          unmountOnExit
        >
          <div className={cn('content-body', 'container')} ref={contentRef}>
            <p className={cn('font-strong')}>{contentBody}</p>
          </div>
        </CSSTransition>
      </div>
    </div>
  )
}

export default InfoBox
