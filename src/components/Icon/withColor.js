import React from 'react'
import BasicIcon  from './Icon'

export const withColor = (Icon, defaultProps = {} ) => {
  const ColorfulIcon = (props) => {
    return <BasicIcon {...defaultProps} {...props} icon={<Icon />} />
  }

  ColorfulIcon.displayName = Icon.displayName
  return ColorfulIcon
}
