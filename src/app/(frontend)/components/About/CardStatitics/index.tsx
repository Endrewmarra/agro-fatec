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
            color: 'secondary.main',
            height: '150px',
          }}
        >
          <Typography sx={{ fontSize: 32, fontWeight: 600 }}> {data} </Typography>
          <Typography sx={{ fontSize: 14, color: 'grey.800' }}>{description}</Typography>
        </Paper>


        )
}