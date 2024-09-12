import { Provider, useModal } from '@ebay/nice-modal-react'
import { Button, Space } from 'antd'
import UserInfoModal from './UserInfoModal';

const DemoOne = () => {
  const modal = useModal(UserInfoModal, {
    name: 'Alice',
    age: Math.floor(Math.random() * 100)
  });

  return (
    <Space>
      <Button onClick={() => modal.show()}>
        Open Modal(demo one .1)
      </Button>
      <Button
        onClick={() => modal.show({
          name: 'Bob',
          age: Math.floor(Math.random() * 100),
        })}
      >
        Open Modal(demo one .2)
      </Button>
    </Space>
  )
}

function App() {

  return (
    <>
      <h3>Nice Antd Modal</h3>
      {/* <Button>Click me</Button> */}
      <DemoOne />
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