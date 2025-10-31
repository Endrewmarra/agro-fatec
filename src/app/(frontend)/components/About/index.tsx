import { Box, Typography, Card } from '@mui/material'
import { Lightbulb, Shield, Target, Users } from 'lucide-react'

export const About = () => {
  return (
    <Box
      sx={{
        bgcolor: '#f5f5f5ff',
        width: '100vw',
        paddingX: 15,
        paddingY: 8,
        justifyItems: 'center',
        textAlign: 'center',
      }}
    >
      <Box sx={{ backgroundColor: '#e7ffecff', borderRadius: 2 }}>
        <Typography
          sx={{ paddingY: 0.5, margin: 2, fontSize: 12, color: '#016630', fontWeight: 600 }}
        >
          Sobre a AgroConsult
        </Typography>
      </Box>
      <Box sx={{ marginBottom: 8 }}>
        <Typography sx={{ fontSize: 36, fontWeight: 'bold', marginBottom: 2 }}>
          Liderança em Consultoria Agronômica
        </Typography>
        <Typography sx={{ color: '#575757ff', paddingX: 34 }}>
          Somos uma empresa especializada em consultoria para o agronegócio, com foco exclusivo em
          milho, soja e sorgo. Nossa missão é maximizar a produtividade e rentabilidade das
          propriedades rurais através de soluções inovadoras e sustentáveis.
        </Typography>
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 3 }}>
        <Card
          sx={{
            paddingX: 6,
            paddingY: 4,
            borderRadius: 3,
            boxShadow: 3,
            color: '#00a63e',
            height: '150px',
          }}
        >
          <Box sx={{ fontSize: '2rem', fontWeight: 500 }}> 500+ </Box>
          <Typography sx={{ fontSize: 14, color: '#717171ff' }}>Propriedades Atendidas</Typography>
        </Card>
        <Card
          sx={{
            paddingX: 6,
            paddingY: 4,
            borderRadius: 3,
            boxShadow: 3,
            color: '#00a63e',
            height: '150px',
          }}
        >
          <Box sx={{ fontSize: '2rem', fontWeight: 500 }}> 15 </Box>
          <Typography sx={{ fontSize: 14, color: '#717171ff' }}>Anos de Experiência</Typography>
        </Card>
        <Card
          sx={{
            paddingX: 6,
            paddingY: 4,
            borderRadius: 3,
            boxShadow: 3,
            color: '#00a63e',
            height: '150px',
          }}
        >
          <Box sx={{ fontSize: '2rem', fontWeight: 500 }}> 30% </Box>
          <Typography sx={{ fontSize: 14, color: '#717171ff' }}>
            Aumento Médio de Produtividade
          </Typography>
        </Card>
        <Card
          sx={{
            paddingX: 6,
            paddingY: 4,
            borderRadius: 3,
            boxShadow: 3,
            color: '#00a63e',
            height: '150px',
          }}
        >
          <Box sx={{ fontSize: '2rem', fontWeight: 500 }}> 98% </Box>
          <Typography sx={{ fontSize: 14, color: '#717171ff' }}>Satisfação dos Clientes</Typography>
        </Card>
      </Box>
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 3, marginTop: 6 }}>
        <Card
          sx={{
            textAlign: 'left',
            paddingX: 2,
            paddingY: 2,
            borderRadius: 3,
            boxShadow: 3,
            color: '#00a63e',
          }}
        >
          <Box
            sx={{
              backgroundColor: '#e7ffecff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 40,
              height: 40,
              borderRadius: 2,
              transition: '0,2s',
              '&:hover': { backgroundColor: '#abd5b4ff', transition: '0.2s' },
            }}
          >
            <Target color="#00a63e" />
          </Box>
          <Typography sx={{ fontSize: 16, color: '#000', fontWeight: 500, marginY: 2 }}>
            Resultados Comprovados
          </Typography>
          <Typography sx={{ fontSize: 14, color: '#575757ff', fontWeight: 400 }}>
            Mais de 15 anos transformando propriedades rurais em negócios altamente produtivos.
          </Typography>
        </Card>
        <Card
          sx={{
            textAlign: 'left',
            paddingX: 2,
            paddingY: 2,
            borderRadius: 3,
            boxShadow: 3,
            color: '#00a63e',
          }}
        >
          <Box
            sx={{
              backgroundColor: '#e7ffecff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 40,
              height: 40,
              borderRadius: 2,
              transition: '0,2s',
              '&:hover': { backgroundColor: '#abd5b4ff', transition: '0.2s' },
            }}
          >
            <Lightbulb color="#00a63e" />
          </Box>
          <Typography sx={{ fontSize: 16, color: '#000', fontWeight: 500, marginY: 2 }}>
            Resultados Comprovados
          </Typography>
          <Typography sx={{ fontSize: 14, color: '#575757ff', fontWeight: 400 }}>
            Mais de 15 anos transformando propriedades rurais em negócios altamente produtivos.
          </Typography>
        </Card>
        <Card
          sx={{
            textAlign: 'left',
            paddingX: 2,
            paddingY: 2,
            borderRadius: 3,
            boxShadow: 3,
            color: '#00a63e',
          }}
        >
          <Box
            sx={{
              backgroundColor: '#e7ffecff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 40,
              height: 40,
              borderRadius: 2,
              transition: '0,2s',
              '&:hover': { backgroundColor: '#abd5b4ff', transition: '0.2s' },
            }}
          >
            <Shield color="#00a63e" />
          </Box>
          <Typography sx={{ fontSize: 16, color: '#000', fontWeight: 500, marginY: 2 }}>
            Resultados Comprovados
          </Typography>
          <Typography sx={{ fontSize: 14, color: '#575757ff', fontWeight: 400 }}>
            Mais de 15 anos transformando propriedades rurais em negócios altamente produtivos.
          </Typography>
        </Card>

        <Card
          sx={{
            textAlign: 'left',
            paddingX: 2,
            paddingY: 2,
            borderRadius: 3,
            boxShadow: 3,
            color: '#00a63e',
          }}
        >
          <Box
            sx={{
              backgroundColor: '#e7ffecff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 40,
              height: 40,
              borderRadius: 2,
              transition: '0,2s',
              '&:hover': { backgroundColor: '#abd5b4ff', transition: '0.2s' },
            }}
          >
            <Users color="#00a63e" />
          </Box>
          <Typography sx={{ fontSize: 16, color: '#000', fontWeight: 500, marginY: 2 }}>
            Resultados Comprovados
          </Typography>
          <Typography sx={{ fontSize: 14, color: '#575757ff', fontWeight: 400 }}>
            Mais de 15 anos transformando propriedades rurais em negócios altamente produtivos.
          </Typography>
        </Card>
      </Box>
    </Box>
  )
}
