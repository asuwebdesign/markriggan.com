// Major feature activation
$.pjax({
  // Multiple area update
  // Fallback area matching
  area: [
    '#app-header',
    '#app-content',
    '#app-footer',
    'body'
  ],
  // Sync and load
  load: {
    head: 'base, meta, link, script',
    css: true,
    script: true
  },
  cache: {
    click: true, submit: true, popstate: true,
    get: true, post: false
  }
});
