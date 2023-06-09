import ResponsiveDrawer from "./drawer"

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ResponsiveDrawer>{children}</ResponsiveDrawer>
      </body>
    </html>
  )
}
