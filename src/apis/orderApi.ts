import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { buildQueries } from "@testing-library/react";
import { url } from "inspector";

const orderApi = createApi({
    reducerPath: "orderApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://redmangoapi.azurewebsites.net/api/",
    }),
    tagTypes: ["Orders"],
    endpoints: (builder)=> ({
       createOrder: builder.mutation({
            query: (orderDetails)=> ({
                url: "order",
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: orderDetails,
                
            }),
            invalidatesTags:["Orders"]
        }),
             getAllOrders: builder.query({
            query: (userId)=> ({
                url: "order",
                params: {
                    userId: userId,
                }
            }),
            providesTags: ["Orders"],
        }),
        getOrderDetails: builder.query({
            query: (id)=> ({
                url: `order/${id}`
            }),
            providesTags: ["Orders"],
             }),
        updateOrderHeader : builder.mutation({
        query:(orderDetails)=>({
            url:"order/" +orderDetails.orderHeaderId,
            method: "PUT",
            headers: {
                "Content-type" : "application/json",
            },
            body: orderDetails
        }),
        invalidatesTags: ["Orders"]
    }),
    })
      
    
});

export const { 
    useCreateOrderMutation, 
    useGetAllOrdersQuery, 
    useGetOrderDetailsQuery ,
    useUpdateOrderHeaderMutation
} = orderApi;
export default orderApi;