import mongoose from 'mongoose';

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

//with the help of TS
TicketSchema.statics.build = (attrs: TicketAttrs) => {
  return new Ticket(attrs);
};

const Ticket = mongoose.model<TicketDoc, TicketModel>('Ticket', TicketSchema);

export { Ticket };
/*
import { Password } from '../src/services/password';




// So this is a middleware function implemented in mongoose.
// Anytime we attempt to save a document to our database we are going to execute this function right here
// immediately.
userSchema.pre('save', async function (done) {
  if (this.isModified('password')) {
    const hashed = await Password.toHash(this.get('password'));
    this.set('password', hashed);
  }
  done();
});



// User.build({
//   email: 'dfsd',
//   password: 'sdfsd',
// });

*/
