

export async function getSiteMetrics() {
  const baseURL = process.env.NEXT_PUBLIC_PAYLOAD_URL || ''
  
  const res = await fetch(`${baseURL}/api/globals/site-metrics`, {
    next: { revalidate: 60 }, // ISR: atualiza a cada 60s
  })

  if (!res.ok) {
    throw new Error('Erro ao buscar métricas do site')
  }

  return res.json()
}
