import {
  ChevronLeft,
  ChevronRight,
  Calendar as CalendarIcon,
  X,
} from "lucide-react";
import { useState } from "react";

interface CalendarBarProps {
  selectedDay: string;
  onSelectDay: (dayId: string) => void;
}

export function CalendarBar({ selectedDay, onSelectDay }: CalendarBarProps) {
  const [weekOffset, setWeekOffset] = useState(0);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [viewMonth, setViewMonth] = useState(11); // December (0-indexed)
  const [viewYear, setViewYear] = useState(2025);

  const today = 23; // December 23, 2025
  const todayMonth = 11; // December (0-indexed)
  const todayYear = 2025;
  const availableDates = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
  const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const dayNamesShort = ["S", "M", "T", "W", "T", "F", "S"];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Generate horizontal scroll dates
  const generateCalendarDays = (offset: number) => {
    const days = [];
    const startDay = 16 + offset * 7;

    for (let i = 0; i < 7; i++) {
      const dayNum = startDay + i;
      if (dayNum < 1 || dayNum > 31) continue;

      // Calculate day of week (Dec 16, 2025 is Tuesday = 2)
      // Use modulo with proper handling of negative numbers
      let dayOfWeek = (2 + (dayNum - 16)) % 7;
      if (dayOfWeek < 0) dayOfWeek += 7;

      days.push({
        id: `dec-${dayNum}`,
        dayName: dayNames[dayOfWeek],
        dayNumber: dayNum,
        fullDate: `December ${dayNum}, 2025`,
        isToday: dayNum === today,
        hasClasses: availableDates.includes(dayNum),
      });
    }

    return days;
  };

  // Generate full month calendar for any month/year
  const generateMonthCalendar = (month: number, year: number) => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const weeks = [];
    let week = new Array(firstDay).fill(null);

    for (let day = 1; day <= daysInMonth; day++) {
      week.push(day);
      if (week.length === 7) {
        weeks.push(week);
        week = [];
      }
    }

    if (week.length > 0) {
      while (week.length < 7) {
        week.push(null);
      }
      weeks.push(week);
    }

    return weeks;
  };

  const calendarDays = generateCalendarDays(weekOffset);
  const monthWeeks = generateMonthCalendar(viewMonth, viewYear);

  const handlePrevWeek = () => {
    if (weekOffset > -1) setWeekOffset(weekOffset - 1);
  };

  const handleNextWeek = () => {
    if (weekOffset < 2) setWeekOffset(weekOffset + 1);
  };

  const handlePrevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear(viewYear - 1);
    } else {
      setViewMonth(viewMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear(viewYear + 1);
    } else {
      setViewMonth(viewMonth + 1);
    }
  };

  const handleDateSelect = (dayNum: number) => {
    // Only allow selection from December 2025
    if (
      viewMonth === 11 &&
      viewYear === 2025 &&
      availableDates.includes(dayNum)
    ) {
      onSelectDay(`dec-${dayNum}`);
      setShowDatePicker(false);
    }
  };

  const isSelected = (day: number) => {
    // Only show as selected if viewing December 2025
    return (
      viewMonth === 11 && viewYear === 2025 && selectedDay === `dec-${day}`
    );
  };

  const isToday = (day: number) => {
    return viewMonth === todayMonth && viewYear === todayYear && day === today;
  };

  const isAvailable = (day: number) => {
    // Only December 2025 has available dates
    return (
      viewMonth === 11 && viewYear === 2025 && availableDates.includes(day)
    );
  };

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-2.5">
        <div className="flex items-center gap-2">
          {/* Previous Week Button */}
          <button
            onClick={handlePrevWeek}
            disabled={weekOffset <= -1}
            className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed transition-all shrink-0"
          >
            <ChevronLeft className="w-4 h-4 text-gray-700" />
          </button>

          {/* Horizontal Date Selector - Compact */}
          <div className="flex-1 flex items-center gap-1.5 overflow-x-auto scrollbar-hide">
            {calendarDays.map((day) => (
              <button
                key={day.id}
                onClick={() => onSelectDay(day.id)}
                className={`shrink-0 px-3 py-1.5 rounded-lg border transition-all ${
                  selectedDay === day.id
                    ? "border-indigo-600 bg-indigo-600 text-white shadow-sm"
                    : day.isToday
                    ? "border-orange-400 bg-orange-50 text-orange-700"
                    : "border-gray-200 bg-white text-gray-700 hover:border-indigo-300 hover:bg-indigo-50"
                }`}
              >
                <div className="text-center">
                  <div className="text-[10px] leading-none mb-0.5 opacity-75">
                    {day.dayName.substring(0, 3)}
                  </div>
                  <div className="text-sm leading-none">{day.dayNumber}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Next Week Button */}
          <button
            onClick={handleNextWeek}
            disabled={weekOffset >= 2}
            className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed transition-all shrink-0"
          >
            <ChevronRight className="w-4 h-4 text-gray-700" />
          </button>

          {/* Calendar Picker Button */}
          <button
            onClick={() => setShowDatePicker(!showDatePicker)}
            className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center hover:bg-indigo-700 transition-all shrink-0"
          >
            <CalendarIcon className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      {/* Calendar Picker Modal */}
      {showDatePicker && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setShowDatePicker(false)}
          ></div>

          {/* Calendar Modal */}
          <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 w-full max-w-md">
            {/* Header */}
            <div className="bg-linear-to-br from-indigo-600 to-purple-600 rounded-t-2xl px-6 py-4 text-white">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="text-lg">Select Date</h3>
                  <p className="text-sm text-indigo-100 mt-0.5">
                    {monthNames[viewMonth]} {viewYear}
                  </p>
                </div>
                <button
                  onClick={() => setShowDatePicker(false)}
                  className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-all"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Month Navigation */}
              <div className="flex items-center justify-between">
                <button
                  onClick={handlePrevMonth}
                  className="flex items-center gap-2 px-3 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="text-sm">Previous</span>
                </button>
                <button
                  onClick={() => {
                    setViewMonth(todayMonth);
                    setViewYear(todayYear);
                  }}
                  className="px-3 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-all text-sm"
                >
                  Today
                </button>
                <button
                  onClick={handleNextMonth}
                  className="flex items-center gap-2 px-3 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-all"
                >
                  <span className="text-sm">Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Calendar Body */}
            <div className="p-6">
              {/* Legend */}
              <div className="flex items-center justify-center gap-4 mb-4 text-xs">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 bg-orange-500 rounded"></div>
                  <span className="text-gray-600">Today</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 bg-indigo-600 rounded"></div>
                  <span className="text-gray-600">Selected</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">Available</span>
                </div>
              </div>

              {/* Day Names */}
              <div className="grid grid-cols-7 gap-2 mb-2">
                {dayNamesShort.map((name, idx) => (
                  <div
                    key={idx}
                    className="text-center text-xs text-gray-500 py-1"
                  >
                    {name}
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="space-y-2">
                {monthWeeks.map((week, weekIdx) => (
                  <div key={weekIdx} className="grid grid-cols-7 gap-2">
                    {week.map((day, dayIdx) => (
                      <div key={dayIdx} className="aspect-square">
                        {day ? (
                          <button
                            onClick={() => handleDateSelect(day)}
                            disabled={!isAvailable(day)}
                            className={`w-full h-full rounded-lg text-sm transition-all relative ${
                              isSelected(day)
                                ? "bg-indigo-600 text-white shadow-lg scale-105"
                                : isToday(day) && isAvailable(day)
                                ? "bg-orange-500 text-white shadow-md"
                                : isAvailable(day)
                                ? "bg-white border-2 border-gray-200 text-gray-900 hover:border-indigo-400 hover:bg-indigo-50"
                                : "bg-gray-50 text-gray-300 cursor-not-allowed border border-gray-100"
                            }`}
                          >
                            <div className="flex flex-col items-center justify-center h-full">
                              <span>{day}</span>
                              {isAvailable(day) &&
                                !isSelected(day) &&
                                !isToday(day) && (
                                  <div className="absolute bottom-1 w-1 h-1 bg-green-500 rounded-full"></div>
                                )}
                            </div>
                          </button>
                        ) : (
                          <div className="w-full h-full"></div>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Footer Info */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Available classes:</span>
                  <span className="text-indigo-600">Dec 16 - Dec 28</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
