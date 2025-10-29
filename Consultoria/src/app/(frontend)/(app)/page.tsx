import  '../styles.css'


import { Box } from '@mui/material'
import { getPayload } from 'payload'
import config from '@payload-config'
import { Appresentation } from '../components/Appresentation'
import { Content } from '../components/Content'



export default async function HomePage() {
  const payload = await getPayload({ config })
  const siteMetrics = await payload.findGlobal({ slug: 'site-metrics' })

  return (
    <Box>

      <Appresentation />
      <Content />
      
    </Box>
  )
}
