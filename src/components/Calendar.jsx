import FullCalendar from '@fullcalendar/react'
import daygrid from '@fullcalendar/daygrid'
import timegrid from '@fullcalendar/timegrid'
import interaction from '@fullcalendar/interaction'
import esLocale from '@fullcalendar/core/locales/es'
import useEvents from '../hooks/useEvents'

const Calendar = () => {
  const { events } = useEvents()

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
