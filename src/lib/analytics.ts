'use client'

import { track } from '@vercel/analytics'

export type LandingEventName =
  | 'hero_signup_click'
  | 'header_signup_click'
  | 'header_login_click'
  | 'google_play_click'
  | 'interactive_demo_try'
  | 'interactive_demo_continue'
  | 'pricing_cta_click'
  | 'cta_banner_signup_click'
  | 'locale_toggle'
  | 'faq_expand'

export function trackLandingEvent(
  name: LandingEventName,
  properties?: Record<string, string | number | boolean>,
) {
  try {
    track(name, properties)
  } catch {
    // Analytics must never interrupt user navigation
  }
}
