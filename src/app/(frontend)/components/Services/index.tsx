import { Box, Typography, Button , Grid} from '@mui/material'
import { Wheat, Sprout, Zap } from 'lucide-react'
import { CardServices } from './CardServices'
import { Title } from '../Title'

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
      <Title
        sectionTitle="Nosso Serviços"
        title="Especialização em Três Culturas Estratégicas"
        description="Nossa expertise abrange as principais commodities do agronegócio brasileiro, oferecendo
          soluções personalizadas para cada cultura."
      />

      <Grid container spacing={4}
        sx={{textAlign: 'left' }}
      >
        <Grid size={4}>
        <CardServices
          src="https://images.unsplash.com/photo-1655131468751-c4210f1c4c5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3JuJTIwZmllbGQlMjBhZ3JpY3VsdHVyZXxlbnwxfHx8fDE3NTc2MTgwMDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Plantação de Milho"
          icon={<Wheat />}
          title="Consultoria em Milho"
          description="Maximização da produtividade através de técnicas avançadas de manejo, escolha de variedades e otimização de recursos."
          Iten1="Análise de solo especializada"
          Iten2="Seleção de híbridos"
          Iten3="Manejo integrado de pragas"
          Iten4="Otimização de irrigação"
          resume="Aumento médio de 25% na produtividade"
        />
        </Grid>
        <Grid size={4}>
        <CardServices
          src="https://images.unsplash.com/photo-1562702076-c719c8796b8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3liZWFuJTIwZmFybXxlbnwxfHx8fDE3NTc2MTgzNTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Plantação de Soja"
          icon={<Sprout />}
          title="Consultoria em Soja"
          description="Estratégias completas para cultivo sustentável de soja, desde o plantio até a colheita, com foco em qualidade e rendimento."
          Iten1="Rotação de culturas"
          Iten2="Manejo de resistência"
          Iten3="Controle biológico"
          Iten4="Monitoramento de doenças"
          resume="Redução de 40% nos custos de produção"
        />
      </Grid>
      <Grid size={4}>
        <CardServices
          src="https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU3NjE4MzU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Plantação de Sorgo"
          icon={<Zap />}
          title="Consultoria em Sorgo"
          description="Aproveitamento das características únicas do sorgo para diversificação produtiva e sustentabilidade no agronegócio."
          Iten1="Resistência à seca"
          Iten2="Adaptação climática"
          Iten3="Uso em biocombustíveis"
          Iten4="Integração lavoura-pecuária"
          resume="35% maior resistência à estiagem"
        />
      </Grid>
      </Grid>

      <Box
        sx={{
          width: '100%',
          backgroundImage: 'linear-gradient(to right, var(--primary-light) , #008236)',
          color: 'white',
          borderRadius: 4,
          padding: 4,
          marginTop: 4,
        }}
      >
        <Typography variant="h1" sx={{ fontSize: 22, fontWeight: 600, margin: 2 }}>
          Pronto para Revolucionar sua Produção?
        </Typography>
        <Typography variant="body1" sx={{ fontSize: 16, paddingX: 30 }}>
          Nossa equipe de especialistas está pronta para analisar sua propriedade e desenvolver
          estratégias personalizadas para maximizar seus resultados.
        </Typography>
        <Button
          variant="text"
          sx={{
            backgroundColor: 'var(--bg-white)',
            color: 'primary.light',
            textTransform: 'capitalize',
            margin: 2,
            fontSize: 14,
            fontWeight: 600,
            padding: 1,
            borderRadius: 2,
            '&:hover': { bgcolor: 'grey.200' },
          }}
        >
          Agendar Consultoria Gratuita
        </Button>
      </Box>
    </Box>
  )
}
