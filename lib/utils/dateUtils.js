export const currentDayName = () => {
  const date = new Date()
  return date.toLocaleString('default', { weekday: 'long' })
}
