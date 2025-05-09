
import { useCallback, useState } from 'react';
import { DayClickEventHandler } from 'react-day-picker';
import { format, isValid, parse } from 'date-fns';

/**
 * Interface for calendar hook state
 */
interface CalendarState {
  date: Date | undefined;
  month: Date;
}

/**
 * Interface for calendar hook return value
 */
interface UseCalendarReturn {
  date: Date | undefined;
  month: Date;
  formattedDate: string;
  setDate: (date: Date | undefined) => void;
  setMonth: (month: Date) => void;
  handleDayClick: DayClickEventHandler;
  parseDate: (value: string, format: string) => Date | undefined;
}

/**
 * Custom hook to manage calendar state and operations
 * 
 * @param initialDate - Optional initial date
 * @returns Calendar state and helper functions
 */
export function useCalendar(initialDate?: Date): UseCalendarReturn {
  // Initialize state with provided date or current date
  const [state, setState] = useState<CalendarState>({
    date: initialDate,
    month: initialDate || new Date(),
  });
  
  /**
   * Handle day selection in calendar
   */
  const handleDayClick = useCallback<DayClickEventHandler>((day, modifiers) => {
    if (modifiers.disabled) return;
    setState(prev => ({ ...prev, date: day }));
  }, []);
  
  /**
   * Set the selected date
   */
  const setDate = useCallback((date: Date | undefined) => {
    setState(prev => ({
      ...prev,
      date,
      // If a date is selected, also update the visible month
      month: date || prev.month,
    }));
  }, []);
  
  /**
   * Set the visible month
   */
  const setMonth = useCallback((month: Date) => {
    setState(prev => ({ ...prev, month }));
  }, []);
  
  /**
   * Format date for display, with fallback for undefined dates
   */
  const formattedDate = state.date 
    ? format(state.date, 'PPP') 
    : 'Select a date';
  
  /**
   * Parse date string to Date object
   */
  const parseDate = useCallback((value: string, formatString: string): Date | undefined => {
    const parsedDate = parse(value, formatString, new Date());
    return isValid(parsedDate) ? parsedDate : undefined;
  }, []);
  
  return {
    date: state.date,
    month: state.month,
    formattedDate,
    setDate,
    setMonth,
    handleDayClick,
    parseDate,
  };
}
