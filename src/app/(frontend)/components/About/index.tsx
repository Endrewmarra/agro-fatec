import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material'
import { Lightbulb, Shield, Target, Users, Dot, ArrowRight } from 'lucide-react'
import { Title } from '../Title'
import { CardStatitics } from './CardStatitics'
import { getPayload } from 'payload'
import config from '@payload-config'
import { CardResults } from './CardResults'

export const About = async () => {
  const payload = await getPayload({ config })
  const siteMetrics = await payload.findGlobal({ slug: 'site-metrics' })
  return (
    <Box
      sx={{
        bgcolor: '#F9FAFB',
        width: '100vw',
        paddingX: 15,
        paddingY: 8,
        justifyItems: 'center',
        textAlign: 'center',
      }}
    >
      <Title
        sectionTitle="Sobre a AgroConsult"
        title="Liderança em Consultoria Agronômica"
        description="Somos uma empresa especializada em consultoria para o agronegócio, com foco exclusivo em
          milho, soja e sorgo. Nossa missão é maximizar a produtividade e rentabilidade das
          propriedades rurais através de soluções inovadoras e sustentáveis."
      />

      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 3 }}>
        <CardStatitics
          data={`${siteMetrics?.properties_served}+`}
          description="Propriedades Atendidas"
        />
        <CardStatitics
          data={`${new Date().getFullYear() - 2010} `}
          description="Anos de Expêriencia"
        />
        <CardStatitics
          data={`${siteMetrics?.increased_productivity}%`}
          description="Aumento Médio de Produtividade"
        />
        <CardStatitics
          data={`${siteMetrics?.customer_satisfication}%`}
          description="Satisfação dosClientes"
        />
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 3, marginTop: 6 }}>
        <CardResults
          icon={<Target />}
          title="Resultados Comprovados"
          description="Mais de 15 anos transformando propriedades rurais em negócios altamente produtivos."
        />
        <CardResults
          icon={<Lightbulb />}
          title="Inovação Constante"
          description="Utilizamos as mais recentes tecnologias e metodologias do agronegócio mundial."
        />
        <CardResults
          icon={<Shield />}
          title="Sustentabilidade"
          description="Práticas que respeitam o meio ambiente e garantem produtividade a longo prazo."
        />
        <CardResults
          icon={<Users />}
          title="Parceria Verdadeira"
          description="Acompanhamos nossos clientes em todas as etapas, do planejamento à colheita."
        />
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', marginY: 6 }}>
        <Box sx={{ textAlign: 'left', width: '100%', paddingRight: 2 }}>
          <Typography variant="h2" sx={{ color: 'black', fontSize: 20, fontWeight: 600 }}>
            Nossa Equipe de Especialistas
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.700', fontSize: 16, fontWeight: 500 }}>
            Contamos com uma equipe multidisciplinar de engenheiros agrônomos, especialistas em
            solos, entomologistas e consultores em agronegócio. Cada membro da nossa equipe possui
            vasta experiência prática e conhecimento científico atualizado.
          </Typography>
          <List sx={{ color: 'black' }}>
            <ListItem sx={{ marginY: -2 }}>
              <ListItemIcon sx={{ scale: 2, marginRight: -5 }}>
                <Dot color="#00a63e" />
              </ListItemIcon>
              <ListItemText
                sx={{ scale: 0.85, marginLeft: -5, marginTop: 3 }}
                primary="Formação Acadêmica Sólida"
                secondary="Mestres e doutores das melhores universidades do país"
              />
            </ListItem>
            <ListItem sx={{ marginY: -4 }}>
              <ListItemIcon sx={{ scale: 2, marginRight: -5 }}>
                <Dot color="#00a63e" />
              </ListItemIcon>
              <ListItemText
                sx={{ scale: 0.85, marginLeft: -5, marginTop: 3 }}
                primary="Experiência Prática"
                secondary="Mais de uma década trabalhando diretamente no campo"
              />
            </ListItem>
            <ListItem sx={{ marginY: -4 }}>
              <ListItemIcon sx={{ scale: 2, marginRight: -5 }}>
                <Dot color="#00a63e" />
              </ListItemIcon>
              <ListItemText
                sx={{ scale: 0.85, marginLeft: -5, marginTop: 3 }}
                primary="Atualização Constante"
                secondary="Participação em congressos e pesquisas internacionais"
              />
            </ListItem>
          </List>
          <Button
            variant="contained"
            sx={{
              textTransform: 'none',
              borderRadius: 2,
              marginY: 4,
              bgcolor: 'primary.light',
              '&:hover': { bgcolor: 'primary.main' },
            }}
          >
            Conheça Nossa Equipe <ArrowRight style={{ scale: 0.8, marginLeft: 15 }} />
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
