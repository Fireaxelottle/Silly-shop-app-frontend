import React, { useState } from 'react'
import AdminSidebar from '../../components/admin/AdminSidebar'
import Table from '../../components/admin/Table'



const Customer = () => {

    const columns = [
        {
          Header: "Avatar",
          accessor: "avatar",
        },
        {
          Header: "Name",
          accessor: "name",
        },
        {
          Header: "Gender",
          accessor: "gender",
        },
        {
          Header: "Email",
          accessor: "email",
        },
        {
          Header: "Role",
          accessor: "role",
        },
        {
          Header: "Action",
          accessor: "action",
        },
      ];
      
      const img = "https://randomuser.me/api/portraits/women/54.jpg";
      const img2 = "https://randomuser.me/api/portraits/women/50.jpg";

      const [rows] = useState([
        {
          avatar: (
            <img
              style={{
                borderRadius: "50%",
              }}
              src={img}
              alt="Shoes"
            />
          ),
          name: "Emily Palmer",
          email: "emily.palmer@example.com",
          gender: "female",
          role: "user",
          action: (
            <button className='trash'>
              <i className='fa-solid fa-trash'></i>
            </button>
          ),
        },
      
        {
          avatar: (
            <img
              style={{
                borderRadius: "50%",
              }}
              src={img2}
              alt="Shoes"
            />
          ),
          name: "May Scoot",
          email: "aunt.may@example.com",
          gender: "female",
          role: "user",
          action: (
            <button className='trash'>
              <i className='fa-solid fa-trash'></i>
            </button>
          ),
        },
      ]);

      const data = React.useMemo(() => rows, [rows]);

      const showPagination = false;

  return (
    <div className="admin-container ">
    <AdminSidebar />
    <main>
      <div>
        <h3>PRODUCTS</h3>
      </div>
      <Table columns={columns} data={data}  showPagination={showPagination} CCN={"admin-customer-table"}/> 
    </main>
  </div>
  )
}

export default Customer
