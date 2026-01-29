import { EventsList } from "../../components";
import { events } from "../../mocks/mock-data";

export default function Events() {
  return <EventsList events={events} />;
}
