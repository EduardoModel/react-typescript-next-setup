module.exports = {
  "presets": ["next/babel"],
  // Plugin to inform the styled components to apply the styles on the server
  "plugins": [["styled-components", {"ssr": true}]]
}
