const plugins = process.env.NODE_ENV
  ? [
      [
        '@babel/plugin-transform-runtime',
        {
          helpers: true
        }
      ]
    ]
  : null

module.exports = {
  presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
  plugins
}
