import React, { useState, useEffect } from 'react'
import {Section, Box, H1, TableRow, TableCell, Table, TableHead, TableBody} from '@adminjs/design-system'
import { ApiClient } from 'adminjs'

const api = new ApiClient()

const ProductRow = ({soldProduct}) =>  (
    <TableRow>
        <TableCell>{soldProduct.name}</TableCell>
        <TableCell>{soldProduct.cost}</TableCell>
        <TableCell>{soldProduct.total_quantity}</TableCell>
    </TableRow>
)

const Statistics = () => {

    const [soldProducts, setSoldProducts] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        api.getPage({ pageName: 'Statistic' }).then((res) => {
            setSoldProducts(res.data.soldProducts);
            setUsers(res.data.users);
        })
    }, [])

    return (
    <Box p={'xl'}>
        <H1>Sold Products</H1>
        <Section bg="white">
            {soldProducts
                ? <Table>
                    <TableHead>
                        <TableCell>Name</TableCell>
                        <TableCell>Cost</TableCell>
                        <TableCell>Number of sold</TableCell>
                    </TableHead>
                    <TableBody>
                        {soldProducts.map((soldProduct) =>
                            <ProductRow key={soldProduct.product_id} soldProduct={soldProduct} />
                        )}
                    </TableBody>
                </Table>
            : <div>No sold products</div>}
        </Section>

        <H1>User Accounts</H1>
        <Section bg="white">
            {users
                ? <Table>
                    <TableHead>
                        <TableCell>Name</TableCell>
                        <TableCell>Statistical data</TableCell>
                    </TableHead>
                    <TableBody>
                       <TableRow>
                           <TableCell>Registered accounts</TableCell>
                            <TableCell>{users.length}</TableCell>
                       </TableRow>
                    </TableBody>
                   </Table>
            : <div>No users</div>}
        </Section>
    </Box>
    )
}

export default Statistics
