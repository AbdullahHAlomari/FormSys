import express, {Router} from 'express'
import PrismaClient from '@prisma/client'
import { deleteAll, sendForm } from '../controller/formCont'

const router = express.Router()

router.post("/sendForm", sendForm)
router.delete("/deleteAll", deleteAll)






export default router