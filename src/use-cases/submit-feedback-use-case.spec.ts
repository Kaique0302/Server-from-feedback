import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";


const createFeedbacksSpy = jest.fn();
const sendMailSpy = jest.fn();


const submitFeedback = new SubmitFeedbackUseCase(
  {create: async()=> {}},
  {sendMail: sendMailSpy}
)


describe('Submit feedback', () =>{
  it('should be able to submit a feedback', async () => {
 await expect(submitFeedback.execute({
  type:'BUG',
  comment:'example comment',
  screenshot: 'test.jpg'
})).resolves.not.toThrow();


expect(createFeedbacksSpy).toHaveBeenCalled();
expect(sendMailSpy).toHaveBeenCalled();

  });

});

it('should not able to submit  feedback without type', async () => {

  
   await expect(submitFeedback.execute({
    type:'',
    comment:'example comment',
    screenshot: 'test.jpg'
  })).rejects.toThrow();
  
  
    });
  

    it('should not able to submit  feedback without comment', async () => {

  
      await expect(submitFeedback.execute({
       type:'',
       comment:'type',
       screenshot: 'test.jpg'
     })).rejects.toThrow();
     
     
       });


       it('should not able to submit  feedback without an invalid screenshot', async () => {

  
        await expect(submitFeedback.execute({
         type:'',
         comment:'ta tudo bugado',
         screenshot: 'test.jpg'
       })).rejects.toThrow();
       
       
         });
       
     