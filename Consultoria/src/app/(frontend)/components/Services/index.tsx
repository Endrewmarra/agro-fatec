import { Box, Typography, Card, CardActions, CardContent, CardMedia, Button } from '@mui/material'
import { Scale } from 'lucide-react'

export const Services = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        paddingX: 15,
        paddingY: 10,
        justifyItems: 'center',
        textAlign: 'center',
      }}
    >
      <Box sx={{ backgroundColor: '#daf3e0ff', borderRadius: 2 }}>
        <Typography
          sx={{ paddingY: 0.5, margin: 2, fontSize: 12, color: '#016630', fontWeight: 600 }}
        >
          Nossos Serviços
        </Typography>
      </Box>
      <Box sx={{ marginBottom: 8 }}>
        <Typography sx={{ fontSize: 36, fontWeight: 'bold', marginBottom: 2 }}>
          Especialização em Três Culturas Estratégicas
        </Typography>
        <Typography sx={{ color: '#575757ff', paddingX: 35 }}>
          Nossa expertise abrange as principais commodities do agronegócio brasileiro, oferecendo
          soluções personalizadas para cada cultura.
        </Typography>
      </Box>
      {/* add estilo nos cars */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: 4,
        }}
      >
        <Card sx={{ borderRadius: 4 }}>
          <CardMedia
            sx={{ '&:hover': { scale: 1.2, transition: '0.2s' }, transition: '0.2s' }}
            component="img"
            alt="Plantação de Milho"
            height="200px"
            image="https://images.unsplash.com/photo-1655131468751-c4210f1c4c5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3JuJTIwZmllbGQlMjBhZ3JpY3VsdHVyZXxlbnwxfHx8fDE3NTc2MTgwMDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          />
          <CardContent>
            <Box>
              <Typography>Titulo</Typography>
              <Typography>Descrião</Typography>
            </Box>
            <Box>
              <Typography>Principais Benefícios</Typography>
              <Typography>lista</Typography>
            </Box>
            <Box>
              <Typography>Aumento médio de 25% na produtividade</Typography>
            </Box>
            <Button>Saiba Mais</Button>
          </CardContent>
        </Card>
        <Card sx={{ borderRadius: 4 }}>
          <CardMedia
            sx={{ '&:hover': { scale: 1.2, transition: '0.2s' }, transition: '0.2s' }}
            component="img"
            alt="Plantação de Soja"
            height="200px"
            width="30%"
            image="https://images.unsplash.com/photo-1562702076-c719c8796b8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3liZWFuJTIwZmFybXxlbnwxfHx8fDE3NTc2MTgzNTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          />
          <CardContent>
            <Box>
              <Typography>Titulo</Typography>
              <Typography>Descrião</Typography>
            </Box>
            <Box>
              <Typography>Principais Benefícios</Typography>
              <Typography>lista</Typography>
            </Box>
            <Box>
              <Typography>Redução de 40% nos custos de produção</Typography>
            </Box>
            <Button>Saiba Mais</Button>
          </CardContent>
        </Card>
        <Card sx={{ borderRadius: 4 }}>
          <CardMedia
            sx={{ '&:hover': { scale: 1.2, transition: '0.2s' }, transition: '0.2s' }}
            component="img"
            alt="Plantação de Sorgo"
            height="200px"
            image="https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU3NjE4MzU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          />
          <CardContent>
            <Box>
              <Typography>Titulo</Typography>
              <Typography>Descrião</Typography>
            </Box>
            <Box>
              <Typography>Principais Benefícios</Typography>
              <Typography>lista</Typography>
            </Box>
            <Box>
              <Typography>35% maior resistência à estiagem</Typography>
            </Box>
            <Button>Saiba Mais</Button>
          </CardContent>
        </Card>
      </Box>
      {/* add degrade horizontal */}
      <Box sx={{
        width:'100%',
        backgroundColor:'#00a63e',
        color:'white',
        borderRadius:4,
        padding:4,
        marginTop:4,
      }}>
        <Typography sx={{fontSize:22, fontWeight:600,margin:2}}>Pronto para Revolucionar sua Produção?</Typography>
        <Typography sx={{fontSize:16,paddingX:30}}>Nossa equipe de especialistas está pronta para analisar sua propriedade e desenvolver estratégias personalizadas para maximizar seus resultados.</Typography>
        <Button variant='outlined' sx={{backgroundColor:'white',color:'#00a63e', margin:2,fontSize:12,fontWeight:600,padding:1,borderRadius:2}}>Agendar Consultoria Gratuita</Button>
      </Box>
    </Box>
  )
}
