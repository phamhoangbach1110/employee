import PropTypes from "prop-types";

export default function PopUp({event, name, email, phone, role, gender, setName, setEmail, setPhone, setRole ,setGender}) {
    function handleSave (e) {
        e.preventDefault();

        //Gọi addItem()
        const isSuccess = event();

        if (isSuccess) {
            const modalElement = document.getElementById("addItem");
            const modalInstance = window.bootstrap.Modal.getInstance(modalElement);
            modalInstance.hide();
        }
    }
    
    return(
        <>
            <div className="modal fade" id="addItem">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <form className="modal-content" onSubmit={handleSave}>

                        <div className="modal-header bg-primary text-white">
                            <h4 className="modal-title">Thêm nhân sự mới</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            <div className="row py-2">
                                <div className="col">
                                    <label htmlFor="name">Họ tên</label>
                                    <input name="name" type="text" id="name" className="form-control" value={name} onInput={(e) => setName(e.target.value)} required maxLength="30"/>
                                </div>

                                <div className="col">
                                    <label htmlFor="email">Email</label>
                                    <input name="email" type="email" id="email" className="form-control" value={email} onInput={(e) => setEmail(e.target.value)} required/>
                                </div>
                            </div>
                                
                            <div className="row py-2">
                                <div className="col">
                                    <label htmlFor="phone">Số điện thoại</label>
                                    <input name="phone" type="text" id="phone" className="form-control" value={phone} onInput={(e) => setPhone(e.target.value)} required pattern="^0[35789][0-9]{8}$" title="Số điện thoại phải đúng 10 chữ số!"/>
                                </div>

                                <div className="col">
                                    <label htmlFor="role">Vị trí</label>
                                    <select name="role" id="role" className="form-control" value={role} onChange={(e) => setRole(e.target.value)}>
                                        <option value="" disabled>--Chọn vị trí--</option>
                                        <option value="Nhân viên">Nhân viên</option>
                                        <option value="Quản lý">Quản lý</option>
                                        <option value="Giám đốc">Giám đốc</option>
                                    </select>
                                </div>
                            </div>
                                    
                            <div>
                                <label htmlFor="gender">Giới tính</label><br />
                                <div className="d-flex gap-2">
                                    <input type="radio" id="male" name="gender" value="Nam" checked={gender==="Nam"} onChange={(e) => setGender(e.target.value)}/>
                                    <label htmlFor="male">Nam</label>
                                    <input type="radio" id="female" name="gender" value="Nữ" checked={gender==="Nữ"} onChange={(e) => setGender(e.target.value)}/>
                                    <label htmlFor="female">Nữ</label>
                                </div>
                            </div>
                       </div>
                            
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-success" onSubmit={handleSave}>Lưu</button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>    
        </>
    )
}