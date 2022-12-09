import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hook';
import { fetchProducts, fetchDelete, fetchUpdate, fetchAdd } from '../../slice/product';
import { IProduct } from '../../interfaces/product';
import { Table, Popconfirm, message, Space, Button, Drawer, Row, Col, Input, Form } from 'antd';
import axios from 'axios';


const Product = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const products: IProduct[] | IProduct = useAppSelector((state) => state.products.value);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [])
  const getdata = () => {
    return products.map((product) => ({
      key: product.id,
      name: product.name,
      price: product.price,
      quantity: product.quantity
    }))
  }
  const confirm = (key: string, action: string) => {
    if (action == 'delete') {
      message.info(`Clicked on Yes. and delete id =${key}`);
      return dispatch(fetchDelete(Number(key)));
    }
  }
  const addProduct = (values: IProduct) => {
    message.info('im click')
    console.log(values)
    setOpen(false);
    return dispatch(fetchAdd(values));
  }
  return (
    <>
      <Space>
        <Popconfirm title='add' okText='add' cancelText='thoi d add dau' onConfirm={() => setOpen(true)}>
          <Button>Add</Button>
        </Popconfirm>
      </Space>
      <Table style={{ width: '100%' }} dataSource={getdata()}>
        <Table.Column title='Id' dataIndex='key' key='key' />
        <Table.Column title='name' dataIndex='name' key='name' />
        <Table.Column title='price' dataIndex='price' key='price' />
        <Table.Column title='quantity' dataIndex='quantity' key='quantity' />
        <Table.Column
          title='Action'
          key='key'
          dataIndex='key'
          render={(key) => (
            <>
              <Space>
                <Popconfirm title='xoa ko?' okText='xoa chu?' cancelText='thoi d xoa dau' onConfirm={() => { confirm(key, 'delete') }}>
                  <Button>Delete</Button>
                </Popconfirm>
              </Space>
              <Space>
                <Popconfirm title='update' okText='update' cancelText='thoi d update dau' onConfirm={() => { confirm(key, 'update') }}>
                  <Button>Update</Button>
                </Popconfirm>
              </Space>
            </>

          )}
        />

      </Table>
      <Drawer title='update product' width={750} onClose={() => { setOpen(false) }} open={open} bodyStyle={{ paddingBottom: 80 }} extra={
        <Space>
          <Button onClick={() => { setOpen(false) }}>Cancel
            Submit
          </Button>
        </Space>
      }>
        <Form onFinish={addProduct}>
          <Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[{ required: true, message: 'Please enter user name' }]}
                >
                  <Input placeholder="Please enter user name" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="price"
                  label="price"
                  rules={[{ required: true, message: 'Please enter price' }]}
                >
                  <Input
                    style={{ width: '100%' }}         
                    placeholder="Please enter price"
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="quantity"
                  label="quantity"
                  rules={[{ required: true, message: 'Please enter quantity' }]}
                >
                  <Input
                    style={{ width: '100%' }}         
                    placeholder="Please enter quantity"
                  />
                </Form.Item>
              </Col>
            </Row>
          </Row>
          <Button htmlType='submit' >
            Submit
          </Button>
        </Form>
      </Drawer>
    </>

  )
}

export default Product

function setOpen(arg0: boolean) {
  throw new Error('Function not implemented.');
}
