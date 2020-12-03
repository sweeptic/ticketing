import mongoose from 'mongoose';

// An new ticket interface
interface TicketAttrs {
  title: string;
  price: number;
  userId: string;
}

// ticket document interface
//to sadd some additional properties in the future
interface TicketDoc extends mongoose.Document {
  title: string;
  price: number;
  userId: string;
}

// ticket model interface
interface TicketModel extends mongoose.Model<TicketDoc> {
  build(attrs: TicketAttrs): TicketDoc;
}

/*
import { Password } from '../src/services/password';



//describe properties
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
      },
    },
  }
);

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

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

// User.build({
//   email: 'dfsd',
//   password: 'sdfsd',
// });

export { User };
*/
