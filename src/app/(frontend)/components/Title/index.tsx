import { Box, Typography, Chip } from '@mui/material'

interface CardAppresentationProps {
  sectionTitle: string
  title: string
  description: string
}


export const Title = ({ sectionTitle, title, description }: CardAppresentationProps) => {
  return (
    <Box sx={{ marginBottom: 8 }}>
      <Chip
        label={sectionTitle}
        size="small"
        sx={{
          bgcolor: 'secondary.light',
          color: 'primary.main',
          fontWeight: 600, 
          fontSize: 12,
          marginBottom: 2,
        }}
      />
      <Typography
        variant="h1"
        sx={{ fontSize: 36, fontWeight: 'bold', marginBottom: 2, color: 'black' }}
      >
        {title}
      </Typography>
      <Typography variant="body1" sx={{ color: 'grey.700', paddingX: 35 }}>
        {description}
      </Typography>
    </Box>
  )
}
