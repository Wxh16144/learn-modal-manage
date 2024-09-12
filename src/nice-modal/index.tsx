import { Provider } from '@ebay/nice-modal-react'
import { Button } from 'antd'


function App() {

  return (
    <>
      <h3>Nice Antd Modal</h3>
      <Button>Click me</Button>
    </>
  )
}

export default function NiceModalApp() {
  return (
    <Provider>
      <App />
    </Provider>
  )
}