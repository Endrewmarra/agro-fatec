import { Box, Typography, Button } from '@mui/material'
import { Leaf, MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'
import {Links} from '../Links'

export const Footer = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        paddingX: 15,
        paddingY: 10,
        backgroundColor: 'secondary.dark',
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
                backgroundColor: 'primary.light',
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
          {/* Alinhar as redes sociais */}
          <Box sx={{ display: 'flex', justifyItems: 'left' }}>
            <Button
              variant="outlined"
              sx={{
                textTransform: 'none',
                backgroundColor: 'white',
                borderRadius: 4,
                scale: 0.5,
                height: 70,
              }}
            >
              <Facebook size={'40px'} color="grey" />
            </Button>
            <Button
              variant="outlined"
              sx={{
                textTransform: 'none',
                backgroundColor: 'white',
                borderRadius: 4,
                scale: 0.5,
                height: 70,
              }}
            >
              <Instagram size={'40px'} color="grey" />
            </Button>
            <Button
              variant="outlined"
              sx={{
                textTransform: 'none',
                backgroundColor: 'white',
                borderRadius: 4,
                scale: 0.5,
                height: 70,
              }}
            >
              <Linkedin size={'40px'} color="grey" />
            </Button>
          </Box>
        </Box>
        <Box sx={{ color: 'white' }}>
          Nossos Serviços
          <Box sx={{ lineHeight: 2 }}>
            <Links rote='/' text='Consultoria em Milho' />
            <Links rote='/' text='Consultoria em Soja' />
            <Links rote='/' text='Consultoria em Sorgo' />
            <Links rote='/' text='Análise de Solo' />
            <Links rote='/' text='Manejo Integrado' />
            <Links rote='/' text='Monitoramento de Safra' />            
          </Box>
        </Box>
        <Box sx={{ color: 'white' }}>
          Empresa
          <Box sx={{ lineHeight: 2 }}>
            <Links rote='/' text='Sobre Nós' />
            <Links rote='/' text='Nossa Equipe' />
            <Links rote='/' text='Casos de Sucesso' />
            <Links rote='/' text='Artigos e Blog' />
            <Links rote='/' text='Carreiras' />
            <Links rote='/' text='Política de Privacidde' />
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
      <Box sx={{ borderTop: '2px solid #364153' }}></Box>
    </Box>
  )
}
