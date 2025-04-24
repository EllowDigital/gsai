import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }

    // Initial check
    onResize()

    // Adding resize event listener
    window.addEventListener("resize", onResize)

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return isMobile
}
