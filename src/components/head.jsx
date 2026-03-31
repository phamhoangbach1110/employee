import PropTypes from "prop-types";

export default function Header() {
    return (
        <>  
            <nav className="bg-dark text-white d-flex justify-content-between align-items-center px-4 py-2">
                <div className="d-flex align-items-center">
                    <h2>Quản lý nhân sự</h2>
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a href="#" className="nav-link text-white">Trang chủ</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link text-secondary">Liên hệ</a>
                        </li>
                    </ul>
                </div>
                <div className="d-flex align-items-center gap-2">
                    <input type="text" placeholder="Tìm kiếm..." className="form-control"/>
                    <button type="button" className="btn btn-dark  btn-outline-light">Tìm</button>
                </div>
            </nav>
        </>
    )
}