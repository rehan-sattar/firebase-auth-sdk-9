import { Box, Flex, Text, useColorMode } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode()

  const colorModeIcons = {
    dark: <SunIcon onClick={toggleColorMode} cursor='pointer' />,
    light: <MoonIcon onClick={toggleColorMode} cursor='pointer' />
  }

  return (
    <Box padding={[6, 8]}>
      <Flex justifyContent='space-between' alignItems='center'>
        <Box>
          <Text fontSize='2xl'> 🔥 Firebase Auth </Text>
        </Box>
        {colorModeIcons[colorMode]}
      </Flex>
    </Box>
  )
}
