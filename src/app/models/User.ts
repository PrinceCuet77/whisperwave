import mongoose, { Schema, Document } from 'mongoose';

export interface User extends Document {
  username: string;
  email: string;
  password: string;
  imageUrl?: string | null;
  isAdmin: boolean;
  verifyCode: string;
  verifyCodeExpiry: Date;
  isVerified: boolean;
  isAcceptingMessages: boolean;
  isAcceptingReplies: boolean;
  refreshToken: string;
  messages: string[];
  deleteMessages: string[];
  resetPasswordToken?: string | undefined;
  resetPasswordExpire?: Date | undefined;
}

const userSchema: Schema<User> = new Schema(
  {
    username: {
      type: String,
      required: [true, 'Username is required'],
      unique: [true, 'Username already exists'],
      minlength: [3, 'Username must be at least 3 characters long'],
      maxlength: [20, 'Username can not exceed 20 characters'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: [true, 'Email already exists'],
      minlength: [3, 'Email must be at least 3 characters long'],
      maxlength: [30, 'Email can not exceed 30 characters'],
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    imageUrl: {
      type: String,
      default: null,
      trim: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    verifyCode: {
      type: String,
      required: [true, 'Verification code is required'],
      maxlength: [6, 'Verification code can not exceed 6 characters'],
      minlength: [6, 'Verification code must be at least 6 characters long'],
      trim: true,
    },
    verifyCodeExpiry: {
      type: Date,
      required: [true, 'Verification code expiry is required'],
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isAcceptingMessages: {
      type: Boolean,
      default: false,
    },
    isAcceptingReplies: {
      type: Boolean,
      default: false,
    },
    refreshToken: {
      type: String,
      default: '',
    },
    messages: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Message',
        default: [],
      },
    ],
    deleteMessages: [
      {
        type: Schema.Types.ObjectId,
        ref: 'DeleteMessage',
        default: [],
      },
    ],
    resetPasswordToken: {
      type: String,
      default: undefined,
    },
    resetPasswordExpire: {
      type: Date,
      default: undefined,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>('User', userSchema);

export default UserModel;
