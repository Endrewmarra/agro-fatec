import { Box, Typography, Paper } from '@mui/material'

interface CardAppresentationProps {
  title: string
  description: string
  icon: React.ReactNode
}

export const CardAppresentation = ({ title, description, icon }: CardAppresentationProps) => {
  return (
    <Paper elevation={3}
      sx={{
        padding: 2,
        borderRadius: 3,
        width: 190,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'left', gap: 2 }}>
        <Box sx={{ color: 'primary.light' }}>{icon}</Box>

        <Box >
          <Typography variant="h6" sx={{ fontSize: 12, fontWeight: 400, color: 'grey.600' }}>
            {title}
          </Typography>
          <Typography variant="body1" sx={{ fontSize: 16, fontWeight: 600,color:'primary.main' }}>
            {description}
          </Typography>
        </Box>
      </Box>
    </Paper>
  )
}
