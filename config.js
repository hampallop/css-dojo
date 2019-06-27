const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://css-dojo.netlify.com',
    gaTrackingId: null,
  },
  header: {
    logo: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_white.svg',
    title: 'CSS Dojo',
    githubUrl: 'https://github.com/hamcompe/css-dojo',
    helpUrl: '',
    tweetText: '',
    links: [{ text: '', link: '' }],
  },
  sidebar: {
    forcedNavOrder: ['/css-selector', '/state-of-component', '/images', '/layout', '/typography', '/styling-component', '/accessibility'],
    links: [{ text: '', link: '' }],
  },
  siteMetadata: {
    title: 'CSS Dojo',
    description: 'CSS Dojo — your best friend cheatsheet',
    ogImage: null,
    docsLocation:
      'https://github.com/hamcompe/css-dojo/tree/master/content',
    favicon: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg',
  },
}

module.exports = config
