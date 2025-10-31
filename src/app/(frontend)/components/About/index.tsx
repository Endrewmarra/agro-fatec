import { Box , Typography} from "@mui/material";

export const About = () => {
    return(
        <Box sx={{
            bgcolor:'#f5f5f5ff',
        width: '100vw',
        paddingX: 15,
        paddingY: 8,
        justifyItems: 'center',
        textAlign: 'center',
            }}>
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
          Somos uma empresa especializada em consultoria para o agronegócio, com foco exclusivo em milho, soja e sorgo. Nossa missão é maximizar a produtividade e rentabilidade das propriedades rurais através de soluções inovadoras e sustentáveis.
        </Typography>
      </Box>


        </Box>
    )
}