import {Router} from "express"
import {create, deleteServer, getAll} from "../controllers/servers.js";
const router = Router()

router.get('/api/server',  getAll)

router.post('/api/server', create)

router.delete('/api/server:id', deleteServer)

export default router