import { Schema, model, models } from 'mongoose';

const flashCardSchema = Schema({
  
    front: {
      type: String,
      required: true
    },
    back: {
      type: String,
      required: true
    },
  
  })

const FlashCard = models.FlashCard || model('FlashCard', flashCardSchema)

export default FlashCard;