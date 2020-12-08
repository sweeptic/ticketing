//name of channel

export enum Subjects {
  TicketCreated = 'ticket:created',
  OrderUpdated = 'order:updated',
}

const printSubject = (subject: Subjects) => {};
printSubject(Subjects.OrderUpdated);
printSubject(Subjects.TicketCreated);
