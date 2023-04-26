import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import babel from '@vitejs/plugin-babel'

export default defineConfig({
  plugins: [
    reactRefresh(),
    babel({
      extensions: ['.jsx'],
      babelHelpers: 'bundled'
    })
  ],
})