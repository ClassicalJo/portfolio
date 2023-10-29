import { Environment, environment } from '../common/environment'
export type ISubmitEvent = SubmitEvent & { currentTarget: EventTarget & HTMLFormElement }
export type ISubmitEventHandler = (e: ISubmitEvent, submitter: ISubmitter) => void
export type ISubmitter = (data: FormData) => Promise<Response>

export interface EmailProvider {
  submitter: ISubmitter
}

export class EmailService {
  constructor(public provider: EmailProvider) {}

  submit(form: HTMLFormElement) {
    const formData = new FormData(form)
    return this.provider.submitter(formData)
  }
}

const formspree: EmailProvider = {
  submitter: (data: FormData) =>
    fetch('https://formspree.io/f/moqbgdqb', {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json'
      }
    })
}

const mockSuccess: EmailProvider = {
  submitter: () =>
    new Promise<Response>(resolve => {
      setTimeout(() => resolve(new Response()), 2000)
    })
}

const mockReject: EmailProvider = {
  submitter: () =>
    new Promise<Response>((_, reject) => {
      setTimeout(() => reject(new Response()), 2000)
    })
}

const selectProvider = (env: Environment) => {
  switch (env) {
    case Environment.PRODUCTION:
      return formspree
    default:
      return mockSuccess
  }
}
export const emailProvider = selectProvider(environment)
