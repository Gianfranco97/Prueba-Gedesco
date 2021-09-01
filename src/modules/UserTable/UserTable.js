import React, { useState, useEffect } from "react"
import { Table } from 'antd'

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    sorter: (a, b) => a.id - b.id,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
    sorter: (a, b) => a.username.localeCompare(b.username),
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    sorter:(a, b) => a.email.localeCompare(b.email),
  },
]

const UserTable = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchUsers = async () => {
    const userEnpoint = "https://jsonplaceholder.typicode.com/users"

    try {
      const resUsers = await fetch(userEnpoint)

      setUsers(await resUsers.json())
      setIsLoading(false)
    } catch (e) {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <Table
      columns={columns}
      dataSource={users}
      loading={isLoading}
      rowKey="id"
      pagination={{ defaultPageSize: 10, showSizeChanger: true, pageSizeOptions: ['3', '5', '10']}}
    />
  )
}

export default UserTable
