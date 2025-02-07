export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-14'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  process.env.SANITY_API_TOKEN="sklfqH7FeETSPFk4AWq2ZzBZbTYPVE2KyMvVrVQRQTnMfDUTsBihvbjVEaTjAbEhyJLiDQVD3Ue3uj21FvGJ83bWdso4xkX6VICYG8nNHtchdg7Z1gefk0ae7wN4z3nvJhRsH8pZz3FW6mO3MKjI4rm53FXKRzIiLkp007ijtfIcIUynznGv"
  ,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)



function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
