import express from 'express'; 
import { interpreteController } from '../controllers/interprete.controller';
const router = express.Router();

router.get('/ping', interpreteController.pong);

router.post('/interpretar', interpreteController.interpretar);
export default router;

