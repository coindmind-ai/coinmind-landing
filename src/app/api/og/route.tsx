import { ImageResponse } from 'next/og'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)

    const title =
      searchParams.get('title') ||
      'Say what you spent. CoinMind handles the rest.'
    const description =
      searchParams.get('description') ||
      'Voice, chat & receipt tracking across 170+ currencies on Web & Android.'

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '64px 72px',
            backgroundColor: '#181719',
            backgroundImage:
              'radial-gradient(circle at 80% 20%, rgba(185, 154, 130, 0.24) 0%, rgba(24, 23, 25, 0) 55%)',
            color: '#fbfbfb',
          }}
        >
          {/* Top brand header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  backgroundColor: '#b99a82',
                  color: '#171717',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '30px',
                  fontWeight: 800,
                }}
              >
                C
              </div>
              <div
                style={{
                  fontSize: '32px',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                }}
              >
                CoinMind AI
              </div>
            </div>

            <div
              style={{
                padding: '10px 20px',
                borderRadius: '999px',
                border: '1px solid rgba(185, 154, 130, 0.45)',
                backgroundColor: 'rgba(185, 154, 130, 0.14)',
                color: '#b99a82',
                fontSize: '20px',
                fontWeight: 600,
              }}
            >
              Web & Android • Free Beta
            </div>
          </div>

          {/* Center headline */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              maxWidth: '980px',
            }}
          >
            <div
              style={{
                fontSize: '64px',
                fontWeight: 800,
                lineHeight: 1.12,
                letterSpacing: '-0.03em',
                color: '#fbfbfb',
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: '28px',
                lineHeight: 1.4,
                color: '#d5d0c8',
                maxWidth: '860px',
              }}
            >
              {description}
            </div>
          </div>

          {/* Bottom feature pills & URL */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <div style={{ display: 'flex', gap: '14px' }}>
              {[
                'Voice & Chat',
                '170+ Currencies',
                'Receipt OCR',
                'Arabic & Multi-Language',
              ].map((pill) => (
                <div
                  key={pill}
                  style={{
                    padding: '10px 20px',
                    borderRadius: '999px',
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.14)',
                    color: '#fbfbfb',
                    fontSize: '18px',
                    fontWeight: 600,
                  }}
                >
                  {pill}
                </div>
              ))}
            </div>
            <div
              style={{
                fontSize: '22px',
                fontWeight: 600,
                color: '#b99a82',
              }}
            >
              www.coinmind-ai.com
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    )
  } catch {
    return new Response('Failed to generate OG image', { status: 500 })
  }
}
