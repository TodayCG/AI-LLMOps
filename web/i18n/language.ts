import data from './languages.json'
export type Item = {
  value: number | string
  name: string
  example: string
}

export type I18nText = {
  'zh-Hans': string
}

export const languages = data.languages

export const LanguagesSupported = languages.filter(item => item.supported).map(item => item.value)

export const getLanguage = (locale: string) => {
  if (locale === 'zh-Hans')
    return locale.replace('-', '_')

  return LanguagesSupported[0].replace('-', '_')
}

export const NOTICE_I18N = {
  title: {
    zh_Hans: '重要公告',
  },
  desc: {
    zh_Hans:
      '为了有效提升数据检索能力及稳定性，SHJFlow 将于 2023 年 8 月 29 日 03:00 至 08:00 期间进行服务升级，届时 SHJFlow 云端版及应用将无法访问。感谢您的耐心与支持。',
  },
  href: '#',
}
