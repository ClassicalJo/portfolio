import { writable } from 'svelte/store'
import { EmailService, emailProvider } from '../contact/utils'

function generateEmailStore() {
  const submission = writable<null | Promise<Response>>(null)
  const service = new EmailService(emailProvider)
  const time = 2000
  let messageTimeout: null | NodeJS.Timeout = null

  function setMessageTimeout(): Promise<void> {
    return new Promise(resolve => {
      messageTimeout = setTimeout(() => cleanup(), time)
      resolve()
    })
  }

  function cleanup() {
    submission.set(null)
    if (messageTimeout) clearTimeout(messageTimeout)
  }

  function submit(form: HTMLFormElement) {
    if (messageTimeout) clearTimeout(messageTimeout)
    const promise = service.submit(form)
    promise.then(() => setMessageTimeout()).then(() => form.reset())

    submission.set(promise)
  }

  return { submission, service, submit }
}

export const emailStore = generateEmailStore()
