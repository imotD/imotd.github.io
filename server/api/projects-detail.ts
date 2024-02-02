export default defineEventHandler(async (event) => {
    const { spaceId, apiAccessToken, public: { apiBase } } = useRuntimeConfig(event)

    const {id} = getQuery(event)

    
    const content = await $fetch(`${apiBase}/spaces/${spaceId}/environments/master/entries?content_type=product&fields.id=${id}`, {
        headers: {
            Authorization: `Bearer ${apiAccessToken}`
        }
    })
    
  return content
})
