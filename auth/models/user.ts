import mongoose from 'mongoose';

// An new user interface
interface UserAttrs {
  email: string;
  password: string;
}

// user model interface
interface UserModel extends mongoose.Model<any> {
  build(attrs: UserAttrs): any;
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<any, UserModel>('User', userSchema);

User.build({
  email: 'dfsd',
  password: 'sdfsd',
});

export { User };
