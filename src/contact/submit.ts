export type ISubmitEvent = SubmitEvent & { currentTarget: EventTarget & HTMLFormElement }
export default async function submit(
  e: SubmitEvent & { currentTarget: EventTarget & HTMLFormElement },
  handleSuccess: () => void,
  handleError: (err: Error) => void
) {
  e.preventDefault()
  const data = new FormData(e.currentTarget)
  try {
    const response = await fetch(e.currentTarget.action, {
      method: e.currentTarget.method,
      body: data,
      headers: {
        Accept: 'application/json'
      }
    })
    if (response.status === 200) {
      handleSuccess()
    } else throw new Error('There was a problem submitting your form')
  } catch (error: unknown) {
    if (error instanceof Error) handleError(error)
    else throw new Error('There was a problem submitting your form')
  }
}
