import { extendTheme } from '@chakra-ui/react'
const colorModeConfigs = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

const fonts = {
  heading: 'Poppins',
  body: 'Poppins'
}

const theme = {
  colorModeConfigs,
  fonts
}

export default extendTheme(theme)
