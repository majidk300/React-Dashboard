import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Stack,
    Text,
    Tag,
  } from '@chakra-ui/react'

const TransactionTable = () => {


    const tableData = [
        {
          id: "HD82Na2H",
          date: "2024-01-09",
          time: "11:39 PM",
    
          type: {
            name: "INR Deposit",
            tag: "E-Transfer",
          },
          amount:"+₹81,123.10",
          status: "pending",
        },
        {
          id: "HD82Na2H",
          date: "2024-01-09",
          time: "11:39 PM",
    
          type: {
            name: "INR Widthdraw",
            tag: "Wire Transfer",
          },
          amount:"-₹81,123.10",
          status: "processing",
        },
        {
          id: "HD82Na2H",
          date: "2024-01-09",
          time: "11:39 PM",
    
          type: {
            name: "BUY",
            tag: "BTC",
          },
          amount:"+12.0554484 BTC",
          status: "cancelled",
        },
        {
          id: "HD82Na2H",
          date: "2024-01-09",
          time: "11:39 PM",
    
          type: {
            name: "Sell",
            tag: "BTC",
          },
          amount:"-2,0554484 BTC",
          status: "completed",
        },
        {
          id: "HD82Na2H",
          date: "2024-01-09",
          time: "11:39 PM",
    
          type: {
            name: "BTC Deposit",
          },
          amount:"+15.5000000 BTC",
          status: "completed",
        },
        {
          id: "HD82Na2H",
          date: "2024-01-09",
          time: "11:39 PM",
    
          type: {
            name: "BTC Widthdraw",
          },
          amount:"-5.05555544 BTC",
          status: "completed",
        },
      ];


      const statusColor = {
        pending: "#797E82",
        processing:"#F5A50B",
        completed: "#27AE60",
        cancelled: "#DC2626",
    
      }

  return (
    <TableContainer>
  <Table variant='simple' colorScheme="gray">

    <Thead>
      <Tr>
        <Th>ID</Th>
        <Th>Date & Time</Th>
        <Th>Type</Th>
        <Th>Amount</Th>
        <Th>Status</Th>
      </Tr>
    </Thead>
    <Tbody color="p.black">
     {
        tableData.map((data) => (
            <Tr key={data.id}>
                <Td fontSize="sm" fontWeight="medium">{data.id}</Td>
                <Td>
                    <Stack spacing={0}>
                    <Text fontSize="sm" fontWeight="medium">{data.date}</Text>
                    <Text fontSize="xs" color="black.60">{data.time}</Text>
                    </Stack></Td>
                <Td>{" "}
                    <Stack spacing={0}>
                    <Text fontSize="sm" fontWeight="medium">{data.type.name}</Text>
                    <Text fontSize="xs" color="black.60">{data.type?.tag}</Text>
                    </Stack></Td>
                <Td fontSize="sm" fontWeight="medium">{data.amount}</Td>
                <Td fontSize="sm" fontWeight="medium">
                    <Tag bg={statusColor[data.status]} color="white" borderRadius="full">{data.status}</Tag>
                </Td>
            </Tr>
        ))
     }
    </Tbody>
    
  </Table>
</TableContainer>
  )
}

export default TransactionTable
