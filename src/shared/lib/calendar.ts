/**
 * Builds an .ics file for the stay and triggers a download,
 * so guests can add the booking to their calendar.
 */
export function downloadStayEvent(): void {
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Maison Soleil//Booking//EN",
    "BEGIN:VEVENT",
    "UID:MS-2026-0421-AH@maison-soleil",
    "DTSTAMP:20260101T000000Z",
    "DTSTART:20260425T150000",
    "DTEND:20260429T110000",
    "SUMMARY:Stay at Maison Soleil · La Garrigue",
    "LOCATION:Maison Soleil\\, 12 Rue des Oliviers\\, Cassis",
    "DESCRIPTION:Booking MS-2026 0421-AH. Check-in from 15:00\\, check-out by 11:00.",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([ics], { type: "text/calendar" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "maison-soleil-stay.ics";
  link.click();
  URL.revokeObjectURL(url);
}
