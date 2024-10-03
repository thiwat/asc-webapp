export const getSpan = (span: number, screenWidth?: number) => {
  if (screenWidth < 768) {
    return `span 12 / span 12`
  }
  span = span || 12
  return `span ${span / 2} / span ${span / 2}`
}