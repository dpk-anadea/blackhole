import React from 'react'
import { Section, Table, TableBody, TableRow, TableHead, TableCell } from '@adminjs/design-system'

const OrderItems = ({orderItems}) => (
    <ul>
        {orderItems.map((orderItem) => <li key={orderItem.id}>{orderItem.product.name}</li>)}
    </ul>
)

const OrderRow = ({order}) =>  (
    <TableRow>
        <TableCell>{order.id}</TableCell>
        <TableCell>{order.total_cost}</TableCell>
        <TableCell><OrderItems orderItems={order.orderItems} /></TableCell>
    </TableRow>
)

const UserOrders = ({record}) => {
    const orders = record.params.userOrders
    return (
    <Section bg="white">
        {orders 
        ? <Table>
            <TableHead>
                <TableCell>Id</TableCell>
                <TableCell>Total cost</TableCell>
                <TableCell>Items</TableCell>
            </TableHead>
            <TableBody>
                {orders.map((order) => 
                    <OrderRow key={order.id} order={order} />
                )}
            </TableBody>
        </Table> 
        : <div>No orders</div>}
    </Section>)
}

export default UserOrders
