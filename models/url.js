import mongoose  from 'mongoose'
import { nanoid } from 'nanoid'

const urlSchema = new mongoose.Schema({
    url :{
        type : String,
        require : true
    },
    shorterURL :{
        type : String,
        default :() => nanoid(8),
        unique : true
    }
})

const URL = mongoose.model('URL' , urlSchema)

export default  URL