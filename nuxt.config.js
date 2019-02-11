export default {
  build: {
    filenames: {
     app: () => '[chunkhash].js',
     chunk: () => '[chunkhash].js'
    }
  }
}
