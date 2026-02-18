import React from 'react'
import { Helmet as ReactHelmet } from 'react-helmet'

export const Helmet = ReactHelmet

export const HelmetProvider = ({ children }) => React.createElement(React.Fragment, null, children)