import express from 'express';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedback-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';
import { NodemailerMailAdapter } from './adpters/nodemailer/nodemailer-mail-adapter';

export const routes = express.Router()



routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot} = req.body;


   const prismaFeedbacksRepository =  new PrismaFeedbacksRepository()
const nodemailerMailAdapter = new NodemailerMailAdapter()

  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository,
    nodemailerMailAdapter
 )  


await submitFeedbackUseCase.execute({
  type,
  comment,
  screenshot,
})



  
  return res.status(201).send();

});