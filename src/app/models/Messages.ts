import { Schema, Document } from 'mongoose';

export interface Message extends Document {
  content: string;
  sendAt: Date;
  isRead: boolean;
  reply?: string | null;
  isReplied: boolean;
  repliedAt?: Date | null;
  senderId?: Schema.Types.ObjectId | null;
  isFavorite: boolean;
}

export const messageSchema: Schema<Message> = new Schema(
  {
    content: {
      type: String,
      required: [true, 'Content is required'],
      maxlength: [200, 'Content can not exceed 200 characters'],
      trim: true,
    },
    sendAt: {
      type: Date,
      required: [true, 'Send date is required'],
      default: Date.now,
    },
    isRead: {
      type: Boolean,
      default: false,
      required: [true, 'isRead is required'],
    },
    reply: {
      type: String,
      maxlength: [200, 'Reply text can not exceed 200 characters'],
      default: null,
      trim: true,
    },
    isReplied: {
      type: Boolean,
      required: [true, 'isReplied is required'],
      default: false,
    },
    repliedAt: {
      type: Date,
      default: null,
    },
    senderId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      default: null, // Store null for guest/unknown users
    },
    isFavorite: {
      type: Boolean,
      default: false,
      required: [true, 'isFavorite is required'],
    },
  },
  {
    timestamps: true,
  }
);
