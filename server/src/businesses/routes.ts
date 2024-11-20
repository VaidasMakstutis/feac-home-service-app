import express from 'express';
import { getAllBusinesses } from './queries/getAllBusinesses';
import { getBusinessById } from './queries/getBusinessById';
import { getBusinessesByCategory } from './queries/getBusinessesByCategory';
import { newBusiness } from './mutations/newBusiness';
import { updateBusiness } from './mutations/updateBusiness';

export const businessesRouter = express.Router();

businessesRouter.get('/', getAllBusinesses);
businessesRouter.get('/:id', getBusinessById);
businessesRouter.get('/category/:category', getBusinessesByCategory);
businessesRouter.post('/', newBusiness);
businessesRouter.put('/:id', updateBusiness);
