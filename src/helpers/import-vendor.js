const requireCss = require.context('../resources/vendor', true, /\.css$/);
requireCss.keys().forEach(requireCss);

// Import tất cả file JS trong vendor
const requireJs = require.context('../resources/vendor', true, /\.js$/);
requireJs.keys().forEach(requireJs);