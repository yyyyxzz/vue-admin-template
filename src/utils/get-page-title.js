import defaultSettings from '@/settings'

const title = defaultSettings.title || '云浮市'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
