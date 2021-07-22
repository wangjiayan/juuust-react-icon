import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'
import { NEUTRAL_01, PRIMARY_01, NEUTRAL_05 } from './constant'
import useStyle from './styles'




const handleStyle = (styles) => {
  const { stroke, fillWithColor, primary, disabledColor, hoverColor, iconColor, fillInColor, button } = styles
  const strokeDefault = 'transparent'
  const fillDefault = 'transparent'
  const normal = { stroke: strokeDefault, color: fillDefault }
  const hover = { stroke: strokeDefault, color: fillDefault }
  const disabled = { stroke: strokeDefault, color: fillDefault }
  let normaStylelColor = ''
  let hoverStyleColor = ''
  let disabledStyleColor = ''

  // 先确定颜色，再确定应该给谁
  if (primary) {
    // 激活状态下的主色默认颜色就是primary颜色
    normaStylelColor = iconColor || PRIMARY_01
    hoverStyleColor = hoverColor || PRIMARY_01
    disabledStyleColor = disabledColor || NEUTRAL_05
  } else {
    normaStylelColor = iconColor || stroke || NEUTRAL_01
    hoverStyleColor = button ? hoverColor || PRIMARY_01 : hoverColor || iconColor || stroke || NEUTRAL_01
    disabledStyleColor = disabledColor || NEUTRAL_05
  }
  // 只需要fill 不需要stroke
  if (fillInColor) {
    normal.color = normaStylelColor
    hover.color = hoverStyleColor
    disabled.color = disabledStyleColor
  } else {
    // 需要stroke 但是不一定需要fill
    normal.stroke = normaStylelColor
    hover.stroke = hoverStyleColor
    disabled.stroke = disabledStyleColor
    if (fillWithColor) {
      normal.color = normaStylelColor
      hover.color = hoverStyleColor
      disabled.color = disabledStyleColor
    }
  }
  return { normal, hover, disabled }
}

const Icon = (props) => {
  const { button, icon, className = '', stroke = 'transparent', fillWithColor, primary, disabledColor, hoverColor, iconColor, fillInColor, ...svgIconProps } = props
  const styleProps = handleStyle({ button, stroke, fillWithColor, primary, disabledColor, hoverColor, iconColor, fillInColor })
  const styles = useStyle(styleProps)

  return (
    <>
      <SvgIcon className={`${styles.root} ${className}`} {...svgIconProps}>
        {icon}
      </SvgIcon>
    </>
  )
}

Icon.displayName = 'Icon'
export default Icon
