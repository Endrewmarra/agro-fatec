import { Box, Button, Typography } from '@mui/material'
import { Leaf } from 'lucide-react'
import Link from 'next/link'

export const Header = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingX: 15,
        paddingY: 2,
        position: 'fixed',
        backgroundColor: 'white',
        zIndex: 2,
        borderBottom: '1px solid var(--header-divider)',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box
          sx={{
            backgroundColor: 'primary.main',
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

        <Typography variant="h2" sx={{ fontSize: 24, fontWeight: 500, color: 'primary.main' }}>
          AgroConsult
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          gap: 4,
          fontSize: 16,
          fontWeight: 600,
          color: 'grey.400',
          textDecoration: 'none',
        }}
      >
        <Box
          component={Link}
          href="../../"
          sx={{
            textDecoration: 'none',
            color: 'primary.main',
            transition: 'color 0.2s',
            '&:hover': { color: 'primary.light' },
          }}
        >
          Home
        </Box>

        <Box
          component={Link}
          href="/Artigos"
          sx={{
            textDecoration: 'none',
            color: 'grey.700',
            transition: 'color 0.2s',
            '&:hover': { color: 'primary.main' },
          }}
        >
          Artigos
        </Box>
        <Box
          component={Link}
          href="/FaleConosco"
          sx={{
            textDecoration: 'none',
            color: 'grey.700',
            transition: 'color 0.2s',
            '&:hover': { color: 'primary.main' },
          }}
        >
          Fale Conosco
        </Box>
      </Box>

      <Box>
        <Button
          variant="contained"
          sx={{
            borderRadius: 2,
            textTransform: 'none',
            boxShadow: 'none',
            backgroundColor: 'primary.light',
            '&:hover': { backgroundColor: 'primary.main', boxShadow: 'none' },
          }}
        >
          Solicitar Consultoria
        </Button>
      </Box>
    </Box>
  )
}
