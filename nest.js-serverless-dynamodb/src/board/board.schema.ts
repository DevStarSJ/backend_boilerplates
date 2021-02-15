import { Schema } from 'dynamoose';

export const BoardSchema = new Schema({
  id: {
    type: String,
    hashKey: true,
  },
  category: {
    type: String,
    index: {
      global: true
    },
  },
  title: {
    type: String,
  },
  url: {
    type: String,
  },
  valid: {
    type: String,
    index: {
      global: true
    },
  },
  createdAt: {
    type: String,
  },
  updatedAt: {
    type: String,
  },
});
