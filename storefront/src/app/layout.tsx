import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import { ReactNode } from "react"
import SitePasswordGate from "@modules/layout/components/site-password-gate"
import "styles/globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
  icons: {
    icon: [{ url: "/san-garden.png", type: "image/png" }],
    shortcut: ["/san-garden.png"],
    apple: [{ url: "/san-garden.png", type: "image/png" }],
  },
}

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body>
        <SitePasswordGate>
          <main className="relative">{props.children}</main>
        </SitePasswordGate>
      </body>
    </html>
  )
}
