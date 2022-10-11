import '../globals.scss'
import 'react-toastify/dist/ReactToastify.css'
import { QueryClientProvider, QueryClient } from 'react-query'

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default MyApp
