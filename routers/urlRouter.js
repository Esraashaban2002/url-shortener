import express from 'express'
const router = express.Router()
import URL from '../models/url.js'

router.post('/shorterURL' , async (req , res) =>{
    const originalURL  = req.body.url
    const found = await URL.findOne({url : originalURL })
    if (found) return res.send(`Shorter URL : http://localhost:3000/${found.shorterURL}`)
    
    const url = new URL(req.body)    
    url.save()
    .then ((url) => {res.status(200).send(`Shorter URL : http://localhost:3000/${url.shorterURL}`)})
    .catch((e)=>{ res.status(400).send(e)})
})

router.get('/:url' , async  (req , res) =>{
    const {url} = req.params 
    const found = await URL.findOne({shorterURL : url})

    if (!found) return res.status(404).send('Link not found')

   res.status(200).send(`URL : ${found.url}`)
})

export default router