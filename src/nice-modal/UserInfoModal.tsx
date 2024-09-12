
import { antdModalV5, create, useModal } from '@ebay/nice-modal-react'
import { UserProfile } from '../shared/type'
import { Modal } from 'antd';

const UserInfoModal = create((user: UserProfile) => {
  const modal = useModal();
  return (
    <Modal
      title={`User Info: ${user.name}`}
      {...antdModalV5(modal)}
    >
      profile: {JSON.stringify(user)}
    </Modal>
  )
});

export default UserInfoModal;