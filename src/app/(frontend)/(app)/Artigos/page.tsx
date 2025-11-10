'use client'

import { useRouter } from 'next/navigation'

import { Box, Typography } from '@mui/material'



export default  function Artigos() {
  const router = useRouter()
  return (
    <Box sx={{height:'100vh ',display:'flex',justifyContent:'center',alignItems:'center', flexDirection:'column' }}>
      <Typography variant='h4' sx={{color:'black',}}>Sinto Muito, Esta página ainda não foi desenvolvida.</Typography>
      <Typography variant='h5' sx={{color:'black',}}>Clique no botão home do menu acima, ou no link a baixo para retornar.</Typography>
      <Typography variant='button' onClick={() => router.back()} sx={{textDecoration:'underline','&:hover':{color:'blue', cursor:'pointer','&:active':{color:'red'}}}}>Voltar</Typography>
      
    
    </Box>
  )
}
