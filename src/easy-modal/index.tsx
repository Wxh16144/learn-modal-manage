import { Button, Space } from "antd";
import Modal from "easy-antd-modal";
import { UserProfile } from "../shared/type";

const DemoOne = () => {
  const userAlice: UserProfile = {
    name: 'Alice',
    age: Math.floor(Math.random() * 100)
  }
  const userBob: UserProfile = {
    name: 'Bob',
    age: Math.floor(Math.random() * 100)
  }

  return (
    <Space>
      <Modal
        title={`User Info: ${userAlice.name}`}
        trigger={<Button>Open Modal(demo one .1)</Button>}
      >
        profile: {JSON.stringify(userAlice)}
      </Modal>

      <Modal
        title={`User Info: ${userBob.name}`}
        trigger={<Button>Open Modal(demo one .2)</Button>}
      >
        profile: {JSON.stringify(userBob)}
      </Modal>
    </Space>
  )
}

function App() {
  return (
    <>
      <h3>Easy Antd Modal</h3>
      <DemoOne />
    </>
  )
}

export default App;