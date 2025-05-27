import React, { useState } from "react"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import { strDate } from "@/utils/strDate"

export default function CalendarSelect({ handler, control = "" }) {
  const [value, setValue] = useState(new Date())
  const [dateValue, setDateValue] = useState("")

  function onChange(nextValue) {
    handler()
    setDateValue(strDate(nextValue))
    setValue(nextValue)
  }

  return (
    <>
      <Calendar onChange={onChange} value={value} />
      <input type="hidden" name={control} value={dateValue} />
    </>
  )
}
