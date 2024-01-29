import React from "react"
import "./TextBlock.scss"

const TextBlock = ({ subTitle, description, content }) => {
  return (
    <div className="text-block__wrapper">
      <div className="text-block__sub-title">{subTitle}</div>
      <div className="text-block__description">{description}</div>
      {content && <div className="text-block__content">{content}</div>}
    </div>
  )
}

export default TextBlock
