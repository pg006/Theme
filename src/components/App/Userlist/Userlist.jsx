import React from 'react'
import PageHeader from '../../../commonComponents/PageHeader/PageHeader'
import { Row } from 'react-bootstrap';
import { UserList } from '../../../Data/App/DataUserList'
import './Userlist.scss'

const Userlist = () => {
  return (
    <React.Fragment>
      <div>
        <PageHeader titles="User Lists" active="User List" items={['Apps']} />
        <Row className="row-cards">
          <UserList />
        </Row>
      </div>
    </React.Fragment>
  )
}

export default Userlist