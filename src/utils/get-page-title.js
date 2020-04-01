import defaultSettings from '@/settings'

const title = defaultSettings.title || '上海千贯'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
