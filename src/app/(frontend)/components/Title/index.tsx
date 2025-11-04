import {Box, Typography, Chip} from '@mui/material'


interface CardAppresentationProps {
  sectionTitle: string
  title: string
  description: string
  
}

export const Title = ({ sectionTitle ,title, description }: CardAppresentationProps) => {
    return(
        <Box sx={{marginBottom:8,}}>
            <Chip label={sectionTitle} color='success' size='small' sx={{color:'primary.main', fontWeight:600, fontSize:12, marginBottom:2}}/>
            <Typography sx={{ fontSize: 36, fontWeight: 'bold', marginBottom: 2, color:'black'}}>{title}</Typography>
            <Typography sx={{ color: 'grey.700', paddingX: 35 }}>{description}</Typography>
        </Box>
    )
}