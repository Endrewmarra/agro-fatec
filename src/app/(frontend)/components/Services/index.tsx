import {
  Box,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  List,
  ListItem,
  ListItemIcon,
} from '@mui/material'
import { Dot, ArrowRight, Wheat, Sprout,Zap } from 'lucide-react'

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
      <Box sx={{ backgroundColor: '#e7ffecff', borderRadius: 2 }}>
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
          textAlign: 'left',
        }}
      >
        <Card sx={{ borderRadius: 4 }}>
          <Box sx={{position:'absolute', zIndex:1}}>
            <Wheat />
            </Box>
          <CardMedia
            sx={{ '&:hover': { scale: 1.2, transition: '0.2s' }, transition: '0.2s' }}
            component="img"
            alt="Plantação de Milho"
            height="200px"
            image="https://images.unsplash.com/photo-1655131468751-c4210f1c4c5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3JuJTIwZmllbGQlMjBhZ3JpY3VsdHVyZXxlbnwxfHx8fDE3NTc2MTgwMDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          />
          <CardContent>
            <Box sx={{ marginLeft: 1, marginBottom: 6, marginTop: 4 }}>
              <Typography>Consultoria em Milho</Typography>
              <Typography sx={{ fontSize: 16, color: '#585858ff' }}>
                Maximização da produtividade através de técnicas avançadas de manejo, escolha de
                variedades e otimização de recursos.
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: 16, fontWeight: 600, marginBottom: -2, marginLeft: 1 }}>
                Principais Benefícios:
              </Typography>
              <List sx={{ color: '#585858ff', fontSize: 14, lineHeight: 1 }}>
                <ListItem>
                  <ListItemIcon sx={{ scale: 2, marginRight: -5 }}>
                    <Dot color="#00a63e" />
                  </ListItemIcon>
                  Análise de solo especializada
                </ListItem>

                <ListItem>
                  <ListItemIcon sx={{ scale: 2, marginRight: -5 }}>
                    <Dot color="#00a63e" />
                  </ListItemIcon>
                  Seleção de híbridos
                </ListItem>

                <ListItem>
                  <ListItemIcon sx={{ scale: 2, marginRight: -5 }}>
                    <Dot color="#00a63e" />
                  </ListItemIcon>
                  Manejo integrado de pragas
                </ListItem>

                <ListItem>
                  <ListItemIcon sx={{ scale: 2, marginRight: -5 }}>
                    <Dot color="#00a63e" />
                  </ListItemIcon>
                  Otimização de irrigação
                </ListItem>
              </List>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                sx={{
                  backgroundColor: '#e7ffecff',
                  borderRadius: 2,
                  color: '#016630',
                  fontSize: 14,
                  paddingY: 1,
                  width: '100%',
                }}
              >
                Aumento médio de 25% na produtividade
              </Typography>
              <Button
                sx={{
                  width: '100%',
                  border: '1px solid #00a63e',
                  color: '#00a63e',
                  fontSize: 14,
                  marginTop: 2,
                  display: 'flex',
                  gap: 1,
                  transition: '0.2s',
                  '&:hover': { gap: 4, transition: '0.2s' },
                }}
              >
                <Typography>Saiba Mais</Typography>

                <ArrowRight alignmentBaseline="middle" />
              </Button>
            </Box>
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
            <Box sx={{ marginLeft: 1, marginBottom: 6, marginTop: 4 }}>
              <Typography>Consultoria em Soja</Typography>
              <Typography sx={{ fontSize: 16, color: '#585858ff' }}>
                Estratégias completas para cultivo sustentável de soja, desde o plantio até a
                colheita, com foco em qualidade e rendimento.
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: 16, fontWeight: 600, marginBottom: -2, marginLeft: 1 }}>
                Principais Benefícios:
              </Typography>
              <List sx={{ color: '#585858ff', fontSize: 14, lineHeight: 1 }}>
                <ListItem>
                  <ListItemIcon sx={{ scale: 2, marginRight: -5 }}>
                    <Dot color="#00a63e" />
                  </ListItemIcon>
                  Rotação de culturas
                </ListItem>

                <ListItem>
                  <ListItemIcon sx={{ scale: 2, marginRight: -5 }}>
                    <Dot color="#00a63e" />
                  </ListItemIcon>
                  Manejo de resistência
                </ListItem>

                <ListItem>
                  <ListItemIcon sx={{ scale: 2, marginRight: -5 }}>
                    <Dot color="#00a63e" />
                  </ListItemIcon>
                  Controle biológico
                </ListItem>

                <ListItem>
                  <ListItemIcon sx={{ scale: 2, marginRight: -5 }}>
                    <Dot color="#00a63e" />
                  </ListItemIcon>
                  Monitoramento de doenças
                </ListItem>
              </List>
            </Box>
            <Box sx={{textAlign:'center'}}>
              <Typography sx={{
                  backgroundColor: '#e7ffecff',
                  borderRadius: 2,
                  color: '#016630',
                  fontSize: 14,
                  paddingY: 1,
                  width: '100%',
                }}>Redução de 40% nos custos de produção</Typography>
            </Box>
            <Button
                sx={{
                  width: '100%',
                  border: '1px solid #00a63e',
                  color: '#00a63e',
                  fontSize: 14,
                  marginTop: 2,
                  display: 'flex',
                  gap: 1,
                  transition: '0.2s',
                  '&:hover': { gap: 4, transition: '0.2s' },
                }}
              >
                <Typography>Saiba Mais</Typography>

                <ArrowRight alignmentBaseline="middle" />
              </Button>
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
            <Box sx={{ marginLeft: 1, marginBottom: 6, marginTop: 4 }}>
              <Typography>Consultoria em Sorgo</Typography>
              <Typography sx={{ fontSize: 16, color: '#585858ff' }}>
                Aproveitamento das características únicas do sorgo para diversificação produtiva e
                sustentabilidade no agronegócio.
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: 16, fontWeight: 600, marginBottom: -2, marginLeft: 1 }}>
                Principais Benefícios:
              </Typography>
              <List sx={{ color: '#585858ff', fontSize: 14, lineHeight: 1 }}>
                <ListItem>
                  <ListItemIcon sx={{ scale: 2, marginRight: -5 }}>
                    <Dot color="#00a63e" />
                  </ListItemIcon>
                  Resistência à seca
                </ListItem>

                <ListItem>
                  <ListItemIcon sx={{ scale: 2, marginRight: -5 }}>
                    <Dot color="#00a63e" />
                  </ListItemIcon>
                  Adaptação climática
                </ListItem>

                <ListItem>
                  <ListItemIcon sx={{ scale: 2, marginRight: -5 }}>
                    <Dot color="#00a63e" />
                  </ListItemIcon>
                  Uso em biocombustíveis
                </ListItem>

                <ListItem>
                  <ListItemIcon sx={{ scale: 2, marginRight: -5 }}>
                    <Dot color="#00a63e" />
                  </ListItemIcon>
                  Integração lavoura-pecuária
                </ListItem>
              </List>
            </Box>
            <Box sx={{textAlign:'center'}}>
              <Typography sx={{
                  backgroundColor: '#e7ffecff',
                  borderRadius: 2,
                  color: '#016630',
                  fontSize: 14,
                  paddingY: 1,
                  width: '100%',
                }}>35% maior resistência à estiagem</Typography>
            </Box>
            <Button
                sx={{
                  width: '100%',
                  border: '1px solid #00a63e',
                  color: '#00a63e',
                  fontSize: 14,
                  marginTop: 2,
                  display: 'flex',
                  gap: 1,
                  transition: '0.2s',
                  '&:hover': { gap: 4, transition: '0.2s' },
                }}
              >
                <Typography>Saiba Mais</Typography>

                <ArrowRight alignmentBaseline="middle" />
              </Button>
          </CardContent>
        </Card>
      </Box>

      <Box
        sx={{
          width: '100%',
          backgroundImage: 'linear-gradient(to right, #00a63e , #026928ff)',
          color: 'white',
          borderRadius: 4,
          padding: 4,
          marginTop: 4,
        }}
      >
        <Typography sx={{ fontSize: 22, fontWeight: 600, margin: 2 }}>
          Pronto para Revolucionar sua Produção?
        </Typography>
        <Typography sx={{ fontSize: 16, paddingX: 30 }}>
          Nossa equipe de especialistas está pronta para analisar sua propriedade e desenvolver
          estratégias personalizadas para maximizar seus resultados.
        </Typography>
        <Button
          variant="outlined"
          sx={{
            backgroundColor: 'white',
            color: '#00a63e',
            margin: 2,
            fontSize: 12,
            fontWeight: 600,
            padding: 1,
            borderRadius: 2,
          }}
        >
          Agendar Consultoria Gratuita
        </Button>
      </Box>
    </Box>
  )
}
