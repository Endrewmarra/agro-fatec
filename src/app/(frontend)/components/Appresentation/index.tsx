import { Box, Button, Card, Typography } from '@mui/material'
import { CircleCheckBig } from 'lucide-react'
import { Span } from 'next/dist/trace'
import Image from 'next/image'
import { TrendingUp } from 'lucide-react'
import { Users } from 'lucide-react'
import { Award } from 'lucide-react'

export const Appresentation = () => {
  return (
    <Box
      sx={{
        paddingLeft: 11,
        paddingRight: 11,
        bgcolor: 'rgba(240, 254, 240)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        justifyItems: 'center',
        gap: 2,
        paddingY: 10,
      }}
    >
      <Box sx={{ paddingX: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="h1" sx={{ fontSize: 48, fontWeight: 600 }}>
          Maximize o Potencial do seu{' '}
          <Typography
            sx={{ color: 'primary.main', fontSize: 48, fontWeight: 600, display: 'inline' }}
            variant="h1"
          >
            Agronegócio
          </Typography>
        </Typography>

        <Typography
          variant="body1"
          sx={{ fontSize: 20, fontWeight: 300, color: 'grey.800', lineHeight: 2 }}
        >
          Consultoria especializada em milho, soja e sorgo. Aumentamos sua produtividade com
          tecnologia de ponta e expertise comprovada no campo.
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <CircleCheckBig color="#00a63e" size={20} />
            <Typography variant="body1" sx={{ fontSize: 16, fontWeight: 300, color: 'grey.800' }}>
              + 15 Anos de Experiência
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <CircleCheckBig color="#00a63e" size={20} />
            <Typography variant="body1" sx={{ fontSize: 16, fontWeight: 300, color: 'grey.800' }}>
              + 500 Fazendas Atendidas
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <CircleCheckBig color="#00a63e" size={20} />
            <Typography variant="body1" sx={{ fontSize: 16, fontWeight: 300, color: 'grey.800' }}>
              30% Aumento Médio
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <CircleCheckBig color="#00a63e" size={20} />
            <Typography variant="body1" sx={{ fontSize: 16, fontWeight: 300, color: 'grey.800' }}>
              Suporte 24/7
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', gap: 3 }}>
          <Button
            variant="contained"
            color="secondary"
            sx={{ textTransform: 'none', borderRadius: 2 }}
          >
            Solicitar Consultoria Gratuita
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            sx={{ textTransform: 'none', backgroundColor: 'white', borderRadius: 2 }}
          >
            Conhecer Nossos Casos
          </Button>
        </Box>
      </Box>

      <Box>
        <Image
          src="https://images.unsplash.com/photo-1562672767-51120ccfdfeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBjb25zdWx0YW50fGVufDF8fHx8MTc1NzYxODM1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Appresentation"
          width={600}
          height={550}
          style={{ borderRadius: 18 }}
        />

        <Box sx={{ marginTop: -5, marginLeft: -2, display: 'flex', gap: 2 }}>
          <Card
            sx={{
              padding: 2,
              borderRadius: 3,
              boxShadow: 3,
              display: 'grid',
              color: '#717171ff',
              gridTemplateColumns: '1fr 4fr',
              width: '185px',
              alignItems: 'center',
            }}
          >
            <TrendingUp color="#00a63e" />

            <Typography>
              <Typography sx={{ fontSize: 12 }}>Produtividade</Typography>
              <Typography sx={{ fontSize: 16, color: '#016630', fontWeight: '600' }}>
                +30%
              </Typography>
            </Typography>
          </Card>
          <Card
            sx={{
              padding: 2,
              borderRadius: 3,
              boxShadow: 3,
              display: 'grid',
              color: '#717171ff',
              gridTemplateColumns: '1fr 4fr',
              width: '185px',
              alignItems: 'center',
            }}
          >
            <Users color="#00a63e" />

            <Typography>
              <Typography sx={{ fontSize: 12 }}>Clientes</Typography>
              <Typography sx={{ fontSize: 16, color: '#016630', fontWeight: '600' }}>
                500+
              </Typography>
            </Typography>
          </Card>
          <Card
            sx={{
              padding: 2,
              borderRadius: 3,
              boxShadow: 3,
              display: 'grid',
              color: '#717171ff',
              gridTemplateColumns: '1fr 4fr',
              width: '185px',
              alignItems: 'center',
            }}
          >
            <Award color="#00a63e" alignmentBaseline="middle" />

            <Typography>
              <Typography sx={{ fontSize: 12 }}>Experiência</Typography>
              <Typography sx={{ fontSize: 16, color: '#016630', fontWeight: '600' }}>
                15 anos
              </Typography>
            </Typography>
          </Card>
        </Box>
      </Box>
    </Box>
  )
}
