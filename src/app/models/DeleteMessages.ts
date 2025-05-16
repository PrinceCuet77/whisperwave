import { Schema, Document } from 'mongoose';

export interface DeleteMessage extends Document {
  content: string;
  sendAt: Date;
  isRead: boolean;
  reply?: string | null;
  isReplied: boolean;
  repliedAt?: Date | null;
  senderId?: Schema.Types.ObjectId | null;
  senderUsername?: string | null;
  senderEmail?: string | null;
  isFavorite: boolean;
}

export const deleteMessageSchema: Schema<DeleteMessage> = new Schema(
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
      default: null,
    },
    senderUsername: {
      type: String,
      default: null,
      trim: true,
    },
    senderEmail: {
      type: String,
      default: null,
      trim: true,
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
