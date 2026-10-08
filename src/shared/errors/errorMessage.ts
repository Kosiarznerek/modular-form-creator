export function errorMessage(reason: unknown) {
  return reason instanceof Error
    ? reason.message
    : 'Something went wrong. Please try again.'
}
