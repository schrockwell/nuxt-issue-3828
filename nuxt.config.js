export default {
  build: {
    filenames: {
     app: () => '[name].[hash].js',
     chunk: () => '[name].[hash].js'
    }
  }
}
