import Link from 'next/link'
import { Box } from '@mui/material'

interface LinksProps {
  rote: string
  text: string
}

export const Links = ({ rote, text }:LinksProps) => {
  return (
    <Box
      component={Link}
      href={rote}
      sx={{
        display: 'block',
        textDecoration: 'none',
        color: 'grey',
        fontSize: '16px',
        fontWeight: 500,
        transition: 'color 0.2s',
        '&:hover': { color: 'primary.light' },
      }}
    >
      {text}
    </Box>
  )
}
