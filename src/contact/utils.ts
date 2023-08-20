export type ISubmitEvent = SubmitEvent & { currentTarget: EventTarget & HTMLFormElement }
export type ISubmitEventHandler = (e: ISubmitEvent, submitter: ISubmitter) => void
export type ISubmitter = (data: FormData) => Promise<Response>

function submitForm(form: HTMLFormElement, submitter: ISubmitter) {
  const data = new FormData(form)
  return submitter(data)
}

function formSpreeSubmitter(data: FormData) {
  return fetch('https://formspree.io/f/moqbgdqb', {
    method: 'POST',
    body: data,
    headers: {
      Accept: 'application/json'
    }
  })
}

export const mockSubmitter: ISubmitter = () =>
  new Promise<Response>(resolve => {
    setTimeout(() => resolve(new Response()), 2000)
  })

export const mockRejectSubmitter: ISubmitter = () =>
  new Promise<Response>((_, reject) => {
    setTimeout(() => reject(new Response()), 2000)
  })

function submitEmail(form: HTMLFormElement) {  
  switch (process.env.NODE_ENV) {
    case 'production':
      return submitForm(form, formSpreeSubmitter)
    case 'development':
    default:
      return submitForm(form, mockSubmitter)
  }
}
export default submitEmail
