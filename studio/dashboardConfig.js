export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61eebe718741821d707f9583',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-xoi21q49',
                  apiId: '03569b23-c984-4a0e-9a45-3c8f77e4d745'
                },
                {
                  buildHookId: '61eebe71fe16e51eace641f2',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-nvrtbrdc',
                  apiId: 'ea092f4a-7567-45ba-8a45-4547365f071d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hallsmall/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-nvrtbrdc.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
