import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  List,
  ListItem,
  ListItemIcon,
} from '@mui/material'
import { Dot, ArrowRight, Wheat, Sprout, Zap } from 'lucide-react'
import { CardServices } from './CardServices'

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

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: 4,
          textAlign: 'left',
        }}
      >
        <CardServices src='https://images.unsplash.com/photo-1655131468751-c4210f1c4c5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3JuJTIwZmllbGQlMjBhZ3JpY3VsdHVyZXxlbnwxfHx8fDE3NTc2MTgwMDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' alt='plantação de milho' icon={<Wheat />} title='Consultoria em Milho' description='Maximização da produtividade através de técnicas avançadas de manejo, escolha de variedades e otimização de recursos.' Iten1='Análise de solo especializada' Iten2='Seleção de híbridos' Iten3='Manejo integrado de pragas' Iten4='Otimização de irrigação' resume='Aumento médio de 25% na produtividade'/>
        <CardServices />
        <CardServices />
        
       
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
