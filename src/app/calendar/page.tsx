import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import type { CalendarEvent } from "@/types";

export const metadata: Metadata = {
  title: "Calendar",
  description: "Upcoming talks, availability and events.",
};

// Placeholder — replace with a real data source (Prisma / calendar API).
const events: CalendarEvent[] = [];

export default function CalendarPage() {
  return (
    <section>
      <PageHeader
        title="Calendar"
        subtitle="Upcoming talks, availability and events."
      />
      {events.length === 0 ? (
        <p className="opacity-70">Nothing scheduled yet — check back soon.</p>
      ) : (
        <ul className="space-y-4">
          {events.map((event) => (
            <li key={event.id} className="border-b border-black/10 pb-4 dark:border-white/15">
              <p className="text-sm opacity-60">
                {new Date(event.date).toLocaleDateString()}
              </p>
              <h2 className="font-medium">{event.title}</h2>
              {event.description ? (
                <p className="mt-1 text-sm opacity-80">{event.description}</p>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
