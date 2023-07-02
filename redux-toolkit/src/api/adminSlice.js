import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const adminApi = createApi({
    reducerPath: 'admin',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }), 
    endpoints: (builder) => ({
      getAccounts: builder.query({
        query: () => `account`,
        providesTags:[`account`],
      }),
      addAccount:builder.mutation({
        query: (amount, id) => ({
            url:'account',
            method:'POST',
            body:{
                amount:amount,
                id:id
            }
        }),
        invalidatesTags:[`account`]
      }),
      deleteAccount:builder.mutation({
        query:(id) => ({
            url:`account/${id}`,
            method:'DELETE',
        }),
        invalidatesTags:[`account`]
      }),
      updateAccount:builder.mutation({
        query:({id, amount}) => ({
            url: `account/${id}`,
            method:'PATCH',
            body:{
                amount
            },
        }),
        invalidatesTags:[`account`]
      })
    }),
  })

export const { userGetAccountsQuery, useAddAccountMutation, useDeleteAccountMutation, useUpdateAccountMutation} = adminApi