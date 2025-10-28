import { Box, Typography } from '@mui/material'
import { Leaf, MapPin, Phone, Mail } from 'lucide-react'
import Link from 'next/link'
import { T } from 'vitest/dist/chunks/reporters.d.DL9pg5DB.js'

export const Footer = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        paddingX: 15,
        paddingY: 10,
        backgroundColor: '#0a012dff',
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          justifyContent: 'space-between',
          marginBottom: 2,
        }}
      >
        <Box sx={{ display: 'inline', width: '19vw' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
            <Box
              sx={{
                backgroundColor: '#00a63e',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40,
                borderRadius: 2,
              }}
            >
              <Leaf color="white" />
            </Box>

            <Typography
              variant="h2"
              sx={{ fontSize: 24, fontWeight: 500, color: 'white', marginLeft: 2 }}
            >
              AgroConsult
            </Typography>
          </Box>
          <Typography
            sx={{ color: 'grey.500', fontSize: '16px', fontWeight: 500, lineHeight: 1.5 }}
          >
            Especialistas em consultoria agronômica para milho, soja e sorgo. Transformamos
            conhecimento em resultados práticos para o seu agronegócio.
          </Typography>
        </Box>
        <Box sx={{ color: 'white' }}>
          Nossos Serviços
          
          <Box sx={{ lineHeight: 2 }}>
            <Box component={Link}
              href={'/'}
              sx={{
                display: 'block',
                textDecoration: 'none',
                color: 'grey',
                fontSize: '16px',
                fontWeight: 500,
                transition: 'color 0.2s',
            '&:hover': { color: '#00a63e' }
              }}
            >
              Consultoria em Milho
            </Box>
            <Box component={Link}
              href={'/'}
              sx={{
                display: 'block',
                textDecoration: 'none',
                color: 'grey',
                fontSize: '16px',
                fontWeight: 500,
                transition: 'color 0.2s',
            '&:hover': { color: '#00a63e' }
              }}
            >
              Consultoria em Soja
            </Box>
            <Box component={Link}
              href={'/'}
              sx={{
                display: 'block',
                textDecoration: 'none',
                color: 'grey',
                fontSize: '16px',
                fontWeight: 500,
                transition: 'color 0.2s',
            '&:hover': { color: '#00a63e' }
              }}
            >
              Consultoria em Sorgo
            </Box>
            <Box component={Link}
              href={'/'}
              sx={{
                display: 'block',
                textDecoration: 'none',
                color: 'grey',
                fontSize: '16px',
                fontWeight: 500,
                transition: 'color 0.2s',
            '&:hover': { color: '#00a63e' }
              }}
            >
              Análise de Solo
            </Box>
            <Box component={Link}
              href={'/'}
              sx={{
                display: 'block',
                textDecoration: 'none',
                color: 'grey',
                fontSize: '16px',
                fontWeight: 500,
                transition: 'color 0.2s',
            '&:hover': { color: '#00a63e' }
              }}
            >
              Manejo Integrado
            </Box>
            <Box component={Link}
              href={'/'}
              sx={{
                display: 'block',
                textDecoration: 'none',
                color: 'grey',
                fontSize: '16px',
                fontWeight: 500,
                transition: 'color 0.2s',
            '&:hover': { color: '#00a63e' }
              }}
            >
              Monioramento de Safras
            </Box>
          </Box>
        </Box>
        <Box sx={{ color: 'white' }}>
          Empresa
          
          <Box sx={{ lineHeight: 2 }}>
            <Box component={Link}
              href={'/'}
              sx={{
                display: 'block',
                textDecoration: 'none',
                color: 'grey',
                fontSize: '16px',
                fontWeight: 500,
                transition: 'color 0.2s',
            '&:hover': { color: '#00a63e' }
              }}
            >
              Sobre Nós
            </Box>
            <Box component={Link}
              href={'/'}
              sx={{
                display: 'block',
                textDecoration: 'none',
                color: 'grey',
                fontSize: '16px',
                fontWeight: 500,
                transition: 'color 0.2s',
            '&:hover': { color: '#00a63e' }
              }}
            >
              Nossa Equipe
            </Box>
            <Box component={Link}
              href={'/'}
              sx={{
                display: 'block',
                textDecoration: 'none',
                color: 'grey',
                fontSize: '16px',
                fontWeight: 500,
                transition: 'color 0.2s',
            '&:hover': { color: '#00a63e' }
              }}
            >
              Casos de sucesso
            </Box>
            <Box component={Link}
              href={'/'}
              sx={{
                display: 'block',
                textDecoration: 'none',
                color: 'grey',
                fontSize: '16px',
                fontWeight: 500,
                transition: 'color 0.2s',
            '&:hover': { color: '#00a63e' }
              }}
            >
              Artigos e Blog
            </Box>
            <Box component={Link}
              href={'/'}
              sx={{
                display: 'block',
                textDecoration: 'none',
                color: 'grey',
                fontSize: '16px',
                fontWeight: 500,
                transition: 'color 0.2s',
            '&:hover': { color: '#00a63e' }
              }}
            >
              Carreiras
            </Box>
            <Box component={Link}
              href={'/'}
              sx={{
                display: 'block',
                textDecoration: 'none',
                color: 'grey',
                fontSize: '16px',
                fontWeight: 500,
                transition: 'color 0.2s',
            '&:hover': { color: '#00a63e' }
              }}
            >
              Política de Privacidade
            </Box>
          </Box>
        </Box>

        <Box sx={{ color: 'white' }}>
          Contato
          <Box sx={{ color: 'grey', fontWeight: 500 }}>
            <Box>
              <MapPin color="#00a63e" />

              <Typography
                sx={{
                  display: 'inline',
                  verticalAlign: 'top',
                  marginLeft: 2,
                  fontSize: 16,
                  marginBottom: 1,
                }}
              >
                Rua do Agronegócio, 123
                <Typography sx={{ marginLeft: 5, fontSize: 16, marginBottom: 1 }}>
                  Ribeirão Preto, SP
                </Typography>
                <Typography sx={{ marginLeft: 5, fontSize: 16, marginBottom: 1 }}>
                  CEP: 14000-000
                </Typography>
              </Typography>
            </Box>
            <Box sx={{ marginBottom: 1 }}>
              <Phone color="#00a63e" />
              <Typography
                sx={{ display: 'inline', verticalAlign: 'top', marginLeft: 2, fontSize: 16 }}
              >
                (16) 3333-4444
              </Typography>
            </Box>
            <Box sx={{ marginBottom: 1 }}>
              <Mail color="#00a63e" />
              <Typography
                sx={{ display: 'inline', verticalAlign: 'top', marginLeft: 2, fontSize: 16 }}
              >
                contato@agroconsult.com.br
              </Typography>
            </Box>
          </Box>
          Horário de Atendimento
          <Typography sx={{ color: 'grey.500', fontSize: 14 }}>
            Segunda a Sexta: 8h às 18h
          </Typography>
          <Typography sx={{ color: 'grey.500', fontSize: 14 }}>Sábado: 8h às 12h</Typography>
        </Box>
      </Box>
      {/* Add copyright */}
      <Box sx={{ borderTop: '2px solid #393b4fff' }}></Box>
    </Box>
  )
}
