import { AddToCalendarButton } from "add-to-calendar-button-react"
import type { AddToCalendarButtonType } from "add-to-calendar-button-react"

export default function atcb(props: AddToCalendarButtonType) {
  return (
    //@ts-ignore
    <AddToCalendarButton
      label={props.label}
      name={props.name}
      options="'Apple','Google'"
      location={props.location}
      startDate={props.startDate}
      endDate={props.endDate}
      startTime={props.startTime}
      endTime={props.endTime}
      timeZone="Europe/Berlin"
      //@ts-ignore
      options={["Apple", "Google", "iCal", "Outlook.com", "Yahoo"]}
    ></AddToCalendarButton>
  )
}
