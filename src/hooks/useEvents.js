import moment from 'moment'
import names from '../helpers/names'

function useEvents () {
  const events = []
  const startDate = moment('2023-03-10', 'YYYY-MM-DD').startOf('day')
  const endDate = moment(startDate).add(12, 'months')

  const currentDate = startDate.clone()
  let currentIndex = 0 // Índice del nombre actual en la lista

  while (currentDate.isSameOrBefore(endDate, 'day')) {
    // Genera un evento para el nombre correspondiente
    const currentName = names[currentIndex]
    let event = {
      title: currentName,
      start: currentDate.format('YYYY-MM-DD'),
      end: currentDate.format('YYYY-MM-DD')
    }

    if (currentDate.isBefore(new Date())) {
      event = {
        ...event,
        backgroundColor: '#B8B8B8',
        borderColor: '#B8B8B8'
      }
    }
    if (currentDate.isSame(moment(), 'week')) {
      event = {
        ...event,
        backgroundColor: '#32de84',
        borderColor: '#32de84'
      }
    }
    events.push(event)
    // Avanza al siguiente viernes y al siguiente nombre en la lista
    currentDate.add(7, 'days')
    currentIndex = (currentIndex + 1) % names.length
  }
  return { events }
}

export default useEvents
