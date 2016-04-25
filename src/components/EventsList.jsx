import React from 'react'
import { Table, TableHead, TableBody, TableRow } from 'components/lib/Table'

export default class EventsList extends React.Component {
  
  handleClick(event) {
    const { modalActions } = this.props
    return () => {
      modalActions.setModalContent({
        title: event.title,
        imgsrc: event.imgsrc,
        info: [
          ['Date',      event.date],
          ['Start',     event.start_time],
          ['End',       event.end_time],
          ['Location',  event.place],
          ['RSVP',      event.rsvp]
        ],
        description: event.description
      })
      modalActions.showModal()
    }
  }

  render() {
    return (
      <div>
        <h1>{ 'Events' }</h1>
        <Table>
          <TableHead>
            <TableRow cells={ ['Name', 'Start Time'] } />
          </TableHead>
          <TableBody>{
            this.props.events.map(event =>
              <TableRow
                key={ event.title }
                cells={ [event.title, event.start_time] }
                onClick={ this.handleClick(event) }
              />
            )
          }</TableBody>
        </Table>
      </div>
    )
  }
}
