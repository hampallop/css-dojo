import React from 'react'
import Heading from '../heading'
import Text from './text'
import Code from './code'
import CodeBlock from './codeBlock'
import Pre from './pre'
import AnchorTag from './anchor'
import Button from './components/button'
import Card from './components/card'
import importAll from 'import-all.macro'

const Components = importAll.sync('./components/*.js')

const getOnlyFilename = (path) => {
  const {1: filename} = RegExp(/([A-Za-z0-9]+).js/).exec(path)
  return filename
}

const mapKeys = (mapper = () => {}) => (obj) => {
  return Object.keys(obj).reduce((result, key) => {
    return {
      ...result,
      [mapper(key)]: obj[key]
    }
  }, {})
}

const mapValues = (mapper = () => {}) => (obj) => {
  Object.entries(obj).reduce((result, [key, value]) => {
    return {
      ...result,
      [key]: mapper(value),
    }
  }, {})
}

const Component = mapKeys(getOnlyFilename)(Components)

/* eslint-disable react/display-name */
export default {
  h1: props => (
    <Heading id={props.children} {...props} is="h1" fontSize={[5, 6]} />
  ),
  h2: props => (
    <Heading id={props.children} {...props} is="h2" fontSize={[4]} />
  ),
  h3: props => <Heading id={props.children} {...props} is="h3" fontSize={3} />,
  h4: props => <Heading id={props.children} {...props} is="h4" fontSize={2} />,
  h5: props => <Heading id={props.children} {...props} is="h5" fontSize={1} />,
  h6: props => <Heading id={props.children} {...props} is="h6" fontSize={0} />,
  p: props => <Text {...props} is="p" lineHeight={1.625} mt={3} mb={4} />,
  pre: Pre,
  code: CodeBlock,
  inlineCode: props => <Code {...props} />,
  a: props => <AnchorTag {...props} />,
  Button,
  Card,
  // ...mapKeys(getOnlyFilename)(Components),
  // TODO add `img`
  // TODO add `blockquote`
  // TODO add `ul`
  // TODO add `li`
  // TODO add `table`
}
