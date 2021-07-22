const getAttrs = (style) => {
  const baseAttrs = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 'size',
    height: 'size',
    viewBox: '0 0 24 24',
  }
  const fillAttrs = {
    fill: 'color',
    otherProps: '...otherProps'
  }
  const strokeAttrs = {
    fill: 'none',
    stroke: 'color',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    otherProps: '...otherProps'
  }
  return Object.assign({}, baseAttrs, style==='fill' ? fillAttrs : strokeAttrs)
}

const getElementCode = (ComponentName, attrs, svgCode) => `
  import React from 'react';
  import { withColor } from '../components/Icon'

  const ${ComponentName} = () => {
    return (
      <>
        ${svgCode}
      </>
    )
  };

  ${ComponentName}.displayName='${ComponentName}'
  export default withColor(${ComponentName}, { stroke: '#00112F', fillInColor: true })
`

module.exports = { getAttrs, getElementCode }
