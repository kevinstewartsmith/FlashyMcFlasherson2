import { Schema, model, models } from 'mongoose';

const fcCollectionsSchema = mongoose.Schema({
    // _id: {
    //   type: String,
    //   required: false
    // },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    },
    flashCards: {
      type: [flashCardSchema],
      required: true
    }
  })

const FlashCardsCollections = models.FlashCardsCollections || model('FlashCardsCollections', fcCollectionsSchema)   

export default FlashCardsCollections;