const { wrapper } = require('./utils');

const name = 'climateChange';

const search = '\\"climate change\\" | \\"global warming\\"';

const body = wrapper(builder => (
  builder
    .orFilter('match_phrase', 'text', 'climate change')
    .orFilter('match_phrase', 'text', 'global warming')
));

module.exports = { body, name, search };
