import { Router } from 'express';
import { getAllPersons, createPerson } from '../controllers/personController';

const router = Router();

router.get('/people', getAllPersons);
router.post('/people', createPerson);

export default router;