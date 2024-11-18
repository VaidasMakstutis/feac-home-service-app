import express from 'express';
import { getAllBusinesses } from '../businesses/queries/getAllBusinesses';
import { getBusinessById } from '../businesses/queries/getBusinessById';
import { getBusinessesByCategory } from '../businesses/queries/getBusinessesByCategory';
import { newBusiness } from '../businesses/mutations/newBusiness';
import { updateBusiness } from '../businesses/mutations/updateBusiness';

export const businessesRouter = express.Router();

businessesRouter.get('/', getAllBusinesses);
businessesRouter.get('/:id', getBusinessById);
businessesRouter.get('/category/:category', getBusinessesByCategory);
businessesRouter.post('/', newBusiness);
businessesRouter.put('/:id', updateBusiness);
