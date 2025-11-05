import { Paper, Box, Typography } from '@mui/material'

interface CardResultsProps {
  icon: React.ReactNode
  title: string
  description: string
}

export const CardResults = ({ icon, title, description }: CardResultsProps) => {
  return ( 
    <Paper elevation={3}
      sx={{
        textAlign: 'left',
        paddingX: 2,
        paddingY: 2,
        borderRadius: 3,
        color: 'secondary.main',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'success.main',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          width: 40,
          height: 40,
          borderRadius: 2,
          transition: '0,2s',
          '&:hover': { backgroundColor: 'success.dark', transition: '0.2s' },
        }}
      >
        <Box sx={{ color: 'secundary.main',display:'flex',
          justifyContent:'center',
          alignItems:'center', }}>{icon}</Box>
      </Box>
      <Typography sx={{ fontSize: 16, color: 'black', fontWeight: 500, marginY: 2 }}>
        {title}
      </Typography>
      <Typography sx={{ fontSize: 14, color: '#575757ff', fontWeight: 400 }}>
        {description}
      </Typography>
    </Paper>
  )
}
