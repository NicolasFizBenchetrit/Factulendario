import FullCalendar from '@fullcalendar/react'
import daygrid from '@fullcalendar/daygrid'
import timegrid from '@fullcalendar/timegrid'
import interaction from '@fullcalendar/interaction'
import moment from 'moment'
import esLocale from '@fullcalendar/core/locales/es'

const Calendar = () => {
  const names = ['Nico F.', 'Paco', 'Quique', 'Ale', 'Nico C.', 'Jessy']
  const events = []

  const startDate = moment('2023-03-3', 'YYYY-MM-DD').startOf('day')
  const endDate = moment(startDate).add(8, 'months')

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
    if (currentDate.isSame(new Date(), 'day')) {
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

  return (
    <div className='mx-1 my-1'>
      <FullCalendar
        plugins={[daygrid, timegrid, interaction]}
        initialView='dayGridMonth'
        height='80vh'
        events={events}
        headerToolbar={{
          start: '',
          center: 'title',
          end: 'prev,next'
        }}
        locale={esLocale}
      />
    </div>
  )
}

export default Calendar
