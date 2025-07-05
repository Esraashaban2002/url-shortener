import mongoose from 'mongoose'

const Connection =async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/urlShorterProject')
    console.log('MongoDB Connected')
  } catch (error) {
    console.error('MongoDB connection failed:', error.message)
  }
}

export default Connection