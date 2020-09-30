import { Publisher, Subjects, TicketCreatedEvent } from '@poudel/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
