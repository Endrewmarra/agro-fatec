import {Paper,  Typography} from '@mui/material'

interface CardStatiticsProps {
    data: string
    description: string
}

export const CardStatitics = ({ data,  description }: CardStatiticsProps ) => {
return(
     <Paper elevation={3}
          sx={{
            paddingX: 6,
            paddingY: 4,
            borderRadius: 3,
            color: 'primary.light',
            height: '150px',
          }}
        >
          <Typography variant='h1' sx={{ fontSize: 32, fontWeight: 600 }}> {data} </Typography>
          <Typography variant='body1' sx={{ fontSize: 14, color: 'grey.700' }}>{description}</Typography>
        </Paper>


        )
}