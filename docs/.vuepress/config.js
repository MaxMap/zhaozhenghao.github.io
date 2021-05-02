module.exports = {
    title:'Hello vuepress',
    description: '用于测试',
    head: [
        ['link',{rel:'icon', href:'https://vuepress.vuejs.org/logo.png'}]
    ],
    search: true,
    searchMaxSuggestions: 10,
    themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
          { text: 'External', link: 'https://google.com' },
        ],
        sidebar:{
            '/guide/two/': ['','1','2']
        }
      },
      
}