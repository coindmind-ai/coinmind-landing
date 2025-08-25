import { ImageResponse } from '@vercel/og'

export const runtime = 'edge'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)

    // Get dynamic values from query params or use defaults
    const title = searchParams.get('title') || 'AI-Powered Expense Tracker'
    const description = searchParams.get('description') || 'Track expenses with voice & chat in 170+ languages'

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0f172a',
            backgroundImage: 'radial-gradient(circle at 25% 25%, #1e293b 0%, #0f172a 50%)',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '0 50px',
            }}
          >
            {/* Logo/Icon */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '30px',
              }}
            >
              <div
                style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '30px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '60px',
                  fontWeight: 'bold',
                  color: 'white',
                  boxShadow: '0 20px 40px rgba(102, 126, 234, 0.4)',
                }}
              >
                C
              </div>
            </div>

            {/* Title */}
            <h1
              style={{
                fontSize: '72px',
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                backgroundClip: 'text',
                color: 'transparent',
                marginBottom: '20px',
                lineHeight: '1.2',
                maxWidth: '900px',
              }}
            >
              {title}
            </h1>

            {/* Description */}
            <p
              style={{
                fontSize: '32px',
                color: '#94a3b8',
                marginBottom: '40px',
                lineHeight: '1.4',
                maxWidth: '800px',
              }}
            >
              {description}
            </p>

            {/* Features/Tags */}
            <div
              style={{
                display: 'flex',
                gap: '20px',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              {['AI-Powered', 'Voice Input', 'Receipt OCR', 'Multi-Language', 'Auto-Categorize'].map((feature) => (
                <div
                  key={feature}
                  style={{
                    padding: '12px 24px',
                    borderRadius: '100px',
                    backgroundColor: 'rgba(102, 126, 234, 0.1)',
                    border: '2px solid rgba(102, 126, 234, 0.3)',
                    color: '#a5b4fc',
                    fontSize: '20px',
                    fontWeight: '600',
                  }}
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom branding */}
          <div
            style={{
              position: 'absolute',
              bottom: '40px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <div
              style={{
                fontSize: '24px',
                color: '#64748b',
                fontWeight: '600',
              }}
            >
              coinmind-ai.com
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}