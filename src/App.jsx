import { use, useState } from 'react'
import './App.css'
import Table from './components/table'
import {myData} from './components/data'
import Header from './components/head'
import PopUp from './components/popup'

function App() {
  const [employee, setEmployee] = useState(myData);
  const [newName, setName] = useState("");
  const [newEmail, setEmail] = useState("");
  const [newPhone, setPhone] = useState("");
  const [newRole, setRole] = useState("");
  const [newGender, setGender] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editEmail, setEditEmail] = useState("");

  function addItem() {

    let isDuplicate = false
    if (isEdit) {
      // Trường hợp Sửa: Email mới không được trùng với bất kỳ ai KHÁC ngoài chính nó (editEmail)
      isDuplicate = employee.some(item => 
        item.email === newEmail && item.email !== editEmail
      );
    } else {
      // Trường hợp Thêm mới: Email không được trùng với bất kỳ ai trong danh sách
      isDuplicate = employee.some(item => 
        item.email === newEmail
      );
    }
    if (isDuplicate){ 
        Swal.fire({
          title: "Email này đã tồn tại",
          text: "Vui lòng chọn email khác",
          icon: "error"
        });
        return false;
    }
    
    if (isEdit) {
      setEmployee(employee => employee.map(item => 
        (item.email === editEmail) ? ({...item, 
          name: newName,
          email: newEmail,
          phone: newPhone,
          role: newRole,
          gender: newGender,
        }) : item
      ));
      Swal.fire({
        title: "Cập nhật thành công!",
        icon: "success",
      });

      setName(""); setEmail(""); setPhone(""); setRole(""); setGender("");
      setIsEdit(false); // Đưa về chế độ thêm mới cho lần sau
      return true;
      
    } 

    setEmployee((employee) => [...employee, {
      index: employee.length + 1,
      name: newName,
      email: newEmail,
      phone: newPhone,
      role: newRole,
    }])

    setName("");
    setEmail("");
    setPhone("");
    setRole("");
    setGender("");

    Swal.fire({
      title: "Thêm thành công",
      icon: "success"
    });
    return true;
  }

  function removeItem(email) {
    setEmployee((employee) => employee.filter(item => {
      return (item.email !== email)
    }));
  }

  function handleEdit(person) {
    setIsEdit(true);
    setName(person.name);
    setEmail(person.email);
    setPhone(person.phone);
    setRole(person.role);
    setGender(person.gender || "Nam");
    setEditEmail(person.email);
  }

  return (
    <>
      <div className='bg-light vh-100'>
        <Header />
        <main>
          <div className="container">
            <div className="d-flex justify-content-between align-items-center my-2">
              <h2>Danh sách nhân sự</h2>
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addItem" onClick={() => {setIsEdit(false); setName(""); setEmail(""); setPhone(""); setRole(""); setGender("")}}>+ Thêm mới</button>
            </div>
            <table className='table shadow'>
                <thead>
                  <tr>
                    <th>Index</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Role</th>
                    <th>Activity</th>
                  </tr>
                </thead>
                <tbody>
                  {employee.map((row, idx) => (
                    <Table key={row.email} {...row} index={idx + 1} onDelete={removeItem} onEdit={handleEdit}></Table>
                  ))}
                </tbody>
            </table>
          </div>
          <PopUp 
            event={addItem}
            name={newName}
            email={newEmail}
            phone={newPhone}
            role={newRole}
            gender={newGender}
            setName={setName}
            setEmail={setEmail}
            setPhone={setPhone}
            setRole={setRole}
            setGender={setGender}
          />
          {console.log(employee)}
        </main>
      </div>
    </>
  )
}

export default App
