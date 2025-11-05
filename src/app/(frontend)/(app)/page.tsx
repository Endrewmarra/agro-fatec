import '../styles.css'

import { Box } from '@mui/material'
import { Appresentation } from '../components/Appresentation'
import { Services } from '../components/Services'
import { About } from '../components/About'

export default async function HomePage() {
  return (
    <Box>
      <Appresentation />
      <Services />
      <About />
    </Box>
  )
}
