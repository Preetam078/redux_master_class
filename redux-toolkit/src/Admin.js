import React from "react";
import "./App.css";
import { adminApi, useAddAccountMutation, useDeleteAccountMutation, useUpdateAccountMutation } from "./api/adminSlice";

const { useGetAccountsQuery } = adminApi;

const Admin = () => {
  const { data, error, isLoading } = useGetAccountsQuery();
  const [addAccount] = useAddAccountMutation();
  const [deleteAccount] =  useDeleteAccountMutation();
  const [updateAccount] = useUpdateAccountMutation();

  return (
    <div className="account_container">
      <h1>Admin Panel</h1>
      <h4>
        {data &&
          data.map((account) => (
            <p key={account.id}>
              {account.id} : {account.amount}
              <button onClick={()=>deleteAccount(account.id)}> Delete info</button>
              <button onClick={()=>updateAccount({id:account.id, amount:10000000})}> Update Info</button>
            </p>
          ))}
      </h4>
      <button onClick={()=>addAccount(1000, data.length+1)}>Add Account</button>
    </div>
  );
};

export default Admin;
