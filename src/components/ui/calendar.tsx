
import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          "hidden sm:flex overflow-hidden relative transition-colors ease-in-out duration-100 text-muted-foreground hover:text-accent-foreground data-[disabled]:bg-transparent data-[disabled]:opacity-50 data-[disabled]:pointer-events-none rounded-md h-7 w-7 bg-accent items-center justify-center"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "text-center text-sm p-0 relative [&:has([data-selected])]:bg-primary-foreground first:[&:has([data-selected])]:rounded-l-md last:[&:has([data-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100 transition-colors ease-in-out duration-100 data-[selected]:bg-primary-foreground data-[selected]:text-primary text-muted-foreground hover:text-accent-foreground data-[disabled]:bg-transparent data-[disabled]:opacity-50 data-[disabled]:pointer-events-none rounded-md items-center justify-center flex"
        ),
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "text-muted-foreground opacity-50 data-[disabled]:pointer-events-none",
        day_disabled: "opacity-50",
        day_range_middle:
          "aria-selected:opacity-100 bg-accent text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        // Using the correct property names for DayPicker components
        IconRight: () => <ChevronRight className="h-4 w-4" />,
        IconLeft: () => <ChevronLeft className="h-4 w-4" />,
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
