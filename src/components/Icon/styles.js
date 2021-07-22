import { makeStyles, createStyles } from '@material-ui/core'


/**
 * fill
 * stroke
 * fillinColor
 * fillWithColor
 */
export default makeStyles(() =>
  createStyles({
    root: {
      transition: 'none',
      stroke: (props) => props.normal.stroke,
      color: (props)=> props.normal.color,
      '&:hover': {
        color: (props) => props.hover.color,
        stroke: (props)=> props.hover.stroke,
      },
      '&[disabled]': {
        color: (props)=> props.disabled.color,
        stroke: (props) => props.disabled.stroke,
        '&:hover': {
          color: (props)=> props.disabled.color,
          stroke: (props)=> props.disabled.stroke,
        },
      },
    },
  })
)
