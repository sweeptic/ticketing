import mongoose from 'mongoose';
import { updateIfCurrentPlugin } from 'mongoose-update-if-current';

// An new ticket interface - TO TYPESCRIPT
interface TicketAttrs {
  id: string;
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
}

// ticket model interface
interface TicketModel extends mongoose.Model<TicketDoc> {
  build(attrs: TicketAttrs): TicketDoc;
}

//describe properties - MONGOOSE VALUE TYPE
const TicketSchema = new mongoose.Schema(
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
TicketSchema.set('versionKey', 'version');
TicketSchema.plugin(updateIfCurrentPlugin);

//with the help of TS
TicketSchema.statics.build = (attrs: TicketAttrs) => {
  return new Ticket({
    _id: attrs.id,
    title: attrs.title,
    price: attrs.price,
  });
};

const Ticket = mongoose.model<TicketDoc, TicketModel>('Ticket', TicketSchema);

export { Ticket };
