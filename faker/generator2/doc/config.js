docute.init({
  homes: 'README.md',
  telo: 'README.md',
  // landing: 'README.md',
	nav: [
    // homepage
    {title: 'Home', path: '/'},
    {title: 'Api', type: 'dropdown', items: [
      {title: 'post test api', path: '/api/post'},
      {type: 'sep'},
      {title: 'post test api', path: '/api/post'},
      {type: 'label', title: 'Help'},
      {title: 'post test api', path: '/api/post'},
    ]}
  ],
  icons: [{
    icon: 'github',
    label: 'Contribute on GitHub',
    link: 'https://github.com/owner/repo'
  }]
})
