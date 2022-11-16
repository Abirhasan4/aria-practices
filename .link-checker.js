module.exports = {
  filesToIgnore: ['content/shared/templates/example-usage-warning.html'],
  excludedLinks: {
    'content/patterns/menubar/examples/menubar-navigation.html': [
      '#ex1 [role=menuitem]',
    ],
    'content/patterns/treeview/examples/treeview-navigation.html': [
      '#ex1 [role=treeitem]',
    ],
    'content/patterns/carousel/examples/carousel-2-tablist.html': [
      '.carousel-image a',
    ],
  },
  ignoreHashesOnExternalPagesMatchingRegex: [
    // Some hash links are resolved with JS and are therefore difficult to check algorithmically
    /^https:\/\/github\.com\/.*\/wiki\//,
    /^https:\/\/html\.spec\.whatwg\.org\/multipage\//,
  ],
};
