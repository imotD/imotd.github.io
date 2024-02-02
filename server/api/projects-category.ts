export default defineEventHandler(async (event) => {
    const { spaceId, apiAccessToken, public: { apiBase } } = useRuntimeConfig(event)

    const {category} = getQuery(event)
    
    const content = await $fetch(`${apiBase}/spaces/${spaceId}/environments/master/entries?content_type=product&fields.category=${category}`, {
        headers: {
            Authorization: `Bearer ${apiAccessToken}`
        }
    })
    
  return content
})
