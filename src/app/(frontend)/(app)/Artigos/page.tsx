

import { Box, Typography } from '@mui/material'
import Link from 'next/link'


export default async function Artigos() {
  return (
    <Box sx={{height:'100vh ',display:'flex',justifyContent:'center',alignItems:'center', flexDirection:'column' }}>
      <Typography variant='h4' sx={{color:'black',}}>Sinto Muito, Esta página ainda não foi desenvolvida.</Typography>
      <Typography variant='h5' sx={{color:'black',}}>Clique no botão home do menu acima, ou no link a baixo para retornar a página principal.</Typography>
      <Link href={'../'} >Voltar</Link>
    
    </Box>
  )
}
