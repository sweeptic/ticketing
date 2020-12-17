import mongoose from 'mongoose';
import { updateIfCurrentPlugin } from 'mongoose-update-if-current';

// An new ticket interface - TO TYPESCRIPT
interface TicketAttrs {
  title: string;
  price: number;
  userId: string;
}

// ticket document interface
//to sadd some additional properties in the future
interface TicketDoc extends mongoose.Document {
  title: string; // typescript type
  price: number;
  userId: string;
  version: number;
  orderId?: string;
}

// ticket model interface
interface TicketModel extends mongoose.Model<TicketDoc> {
  build(attrs: TicketAttrs): TicketDoc;
}

//describe properties - MONGOOSE VALUE TYPE
const ticketSchema = new mongoose.Schema(
  {
    title: {
      type: String, //JS global string constructor
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    orderId: {
      type: String,
      required: false,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        //modify data
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);
ticketSchema.set('versionKey', 'version');
ticketSchema.plugin(updateIfCurrentPlugin);

//with the help of TS
ticketSchema.statics.build = (attrs: TicketAttrs) => {
  return new Ticket({ attrs });
};

const Ticket = mongoose.model<TicketDoc, TicketModel>('Ticket', ticketSchema);

export { Ticket };
