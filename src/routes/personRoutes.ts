import { Router } from 'express';
import { getAllPeople, createPerson } from '../controllers/personController';

const router = Router();

router.get('/people', getAllPeople);
router.post('/people', createPerson);

export default router;