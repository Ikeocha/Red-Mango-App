import React from 'react'
import { withAdminAuth } from '../../HOC';
import { useSelector } from 'react-redux';
import { useGetAllOrdersQuery } from '../../apis/orderApi';
import OrderList from './OrderList';
import { MainLoader } from '../../Components/Layout/Page/Home/Common';


function AllOrders() {
    const {data, isLoading} =  useGetAllOrdersQuery('');

  return (
    <>
    {isLoading && <MainLoader />}
    {!isLoading && ( 
        <OrderList isLoading={isLoading} orderData={data.result} />
    )}
    
    </>
  )
}

export default withAdminAuth(AllOrders);