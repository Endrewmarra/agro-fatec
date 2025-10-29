import  '../styles.css'


import { Box } from '@mui/material'
import { getPayload } from 'payload'
import config from '@payload-config'
import { Appresentation } from '../components/Appresentation'
import { Services } from '../components/Services'



export default async function HomePage() {
  const payload = await getPayload({ config })
  const siteMetrics = await payload.findGlobal({ slug: 'site-metrics' })

  return (
    <Box>

      <Appresentation />
      <Services />
      
    </Box>
  )
}
