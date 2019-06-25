import { css } from 'react-emotion'

const isNumber = x => typeof x === 'number'
export const parseUnit = margin => (isNumber(margin) ? `${margin}px` : margin)

export const dynamicMargin = ({ mt = 0, mr = 0, mb = 0, ml = 0 }) => css`
  margin-top: ${parseUnit(mt)};
  margin-right: ${parseUnit(mr)};
  margin-bottom: ${parseUnit(mb)};
  margin-left: ${parseUnit(ml)};
`

export const dynamicFlex = ({ flex, justifyContent }) =>
  flex &&
  css`
    display: flex;
    justify-content: ${justifyContent};
  `

export const dynamicGrid = ({
  grid,
  gap,
  gridFlow = 'initial',
  columns = 0,
  rows = 0,
}) =>
  grid &&
  css`
    display: grid;
    grid-gap: ${parseUnit(gap)};
    grid-auto-flow: ${gridFlow};
    ${columns &&
      `
      grid-template-columns: repeat(${columns}, 1fr);
    `};
    ${rows &&
      `
      grid-template-rows: repeat(${rows}, 1fr);
    `};
  `

export const dynamicPadding = ({ padding }) => css`
  padding: ${parseUnit(padding)};
`

export const dynamicAlign = ({ textAlign }) => css`
  text-align: ${textAlign};
`

export const dynamicFontWeight = ({ fontWeight }) => css`
  font-weight: ${fontWeight};
`
