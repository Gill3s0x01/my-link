export const getLinkSave = async (key) => {
  const myLinks = await localStorage.getItem(key)

  let linkSave = JSON.parse(myLinks) || []
  return linkSave
}

export const saveLink = async (key, newLink) => {
  let linkStored = await getLinkSave(key)

  const hasLink = linkStored.some((link) => link.id === newLink.id)
  if (hasLink) {
    console.log('Link já existe')
    return
  }

  linkStored.push(newLink)
  await localStorage.setItem(key, JSON.stringify(linkStored))
  console.log('Link salvo')
}
export const deleteLink = (link, id) => {
  const myLinks = link.filter((item) => {
    return item.id !== id
  })
  localStorage.setItem('@myLinks', JSON.stringify(myLinks))
  return myLinks
}
