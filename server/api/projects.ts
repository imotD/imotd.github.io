export default defineEventHandler(async (event) => {
  const { spaceId, apiAccessToken, public: { apiBase } } = useRuntimeConfig(event)

  const content = await $fetch(`${apiBase}/spaces/${spaceId}/environments/master/entries?content_type=product`, {
    headers: {
      Authorization: `Bearer ${apiAccessToken}`
    }
  })

  return content
})
