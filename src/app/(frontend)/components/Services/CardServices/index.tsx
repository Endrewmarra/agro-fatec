import { Box, Typography, Card, CardContent, CardMedia, Button, List, ListItem, ListItemIcon } from '@mui/material'
import { Dot, ArrowRight } from 'lucide-react'

interface CardServicesProps {
  src: string
  alt: string
  icon: React.ReactNode
  title: string
  description: string
  Iten1: string
  Iten2: string
  Iten3: string
  Iten4: string
  resume: string
}

export const CardServices = ({
  src,
  alt,
  icon,
  title,
  description,
  Iten1,
  Iten2,
  Iten3,
  Iten4,
  resume,
}: CardServicesProps) => {
  return (
    <Card sx={{ borderRadius: 4, boxShadow: '0px 2px 5px  rgba(0,0,0,0.5)' }}>
      <Box
        sx={{
          backgroundColor: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 40,
          height: 40,
          borderRadius: 2,
          position: 'absolute',
          zIndex: 1,
          margin: 3,
          scale: 1.3,
        }}
      >
        <Box sx={{ color: 'primary.light', display: 'flex', alignContent: 'center' }}>{icon}</Box>
      </Box>
      <CardMedia
        sx={{ '&:hover': { scale: 1.1, transition: '0.2s' }, transition: '0.2s' }}
        component="img"
        alt={alt}
        height="200px"
        image={src}
      />
      <CardContent>
        <Box sx={{ marginLeft: 1, marginBottom: 6, marginTop: 4 }}>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body1" sx={{ fontSize: 16, color: 'grey.600' }}>
            {description}
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h3"
            sx={{ fontSize: 16, fontWeight: 600, marginBottom: -2, marginLeft: 1 }}
          >
            Principais Benefícios:
          </Typography>
          <List sx={{ color: 'grey.600', fontSize: 14, lineHeight: 1 }}>
            <ListItem>
              <ListItemIcon sx={{ scale: 2, marginRight: -5 }}>
                <Dot color="#00a63e" />
              </ListItemIcon>
              {Iten1}
            </ListItem>

            <ListItem>
              <ListItemIcon sx={{ scale: 2, marginRight: -5 }}>
                <Dot color="#00a63e" />
              </ListItemIcon>
              {Iten2}
            </ListItem>

            <ListItem>
              <ListItemIcon sx={{ scale: 2, marginRight: -5 }}>
                <Dot color="#00a63e" />
              </ListItemIcon>
              {Iten3}
            </ListItem>

            <ListItem>
              <ListItemIcon sx={{ scale: 2, marginRight: -5 }}>
                <Dot color="#00a63e" />
              </ListItemIcon>
              {Iten4}
            </ListItem>
          </List>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="body2"
            sx={{
              backgroundColor: 'secondary.light',
              borderRadius: 2,
              color: 'primary.main',
              fontSize: 14,
              paddingY: 1,
              width: '100%',
              fontWeight: 600,
            }}
          >
            {resume}
          </Typography>
          <Button
            sx={{
              width: '100%',
              border: '1px solid',
              color: 'primary.light',
              fontSize: 14,
              marginTop: 2,
              display: 'flex',
              gap: 1,
              transition: '0.2s',
              '&:hover': { gap: 4, transition: '0.2s', color: 'black', bgcolor: 'secondary.light' },
            }}
          >
            <Typography variant="button" sx={{ fontSize: 14, textTransform: 'capitalize' }}>
              Saiba Mais
            </Typography>

            <ArrowRight alignmentBaseline="middle" />
          </Button>
        </Box>
      </CardContent>
    </Card>
  )
}
