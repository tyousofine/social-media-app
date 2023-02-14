const appName = "Social Media App";

/**
 * List of available categories
 */
const categories = [
  { id: 'edu', text: 'Education' },
  { id: 'ent', text: 'Entertainment' },
  { id: 'gam', text: 'Gaming' },
  { id: 'nws', text: 'News' },
  { id: 'oth', text: 'Other' },

]


/**
 * list of available statuses
*/
export const statuses = [
  { id: 'd', text: 'Draft' },
  { id: 'p', text: 'Published' },
  { id: 'a', text: 'Archived' },
]
/**
 * Get the category text based on category id
 * @param {string} id
 * the id of the category to retreive 
 * @returns
 * the category text 
 */
export const getCategoryText = (id) => {
  const item = categories.find((category) => category.id === id);
  return item?.text || 'None';
}

/**
 * Get status text from status ID
 * @param {string} id
 * receivs status id 
 * @returns 
 * retursn status text based on Id received
 */
export const getStatusText = (id) => {
  const item = statuses.find((status) => status.id === id);
  return item?.text || 'Not set';
}

export { appName, categories }


