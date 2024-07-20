export const useEvents = () => {

  const events = [
    {
      name: 'Annual Student Concert 2024',
      code: 'asc_2024',
      date: new Date(),
      time: '18:00 - 22:00',
      location: 'Satorn'
    },
    {
      name: 'Annual Student Concert 2025',
      code: 'asc_2025',
      date: new Date(),
      location: 'Satorn'
    }
  ]

  return {
    data: events
  }
}