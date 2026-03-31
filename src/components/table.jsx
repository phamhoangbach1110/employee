import PropTypes from "prop-types"

export default function Table({index, name, email, phone, role, onDelete, onEdit}) {
    return (
        <>
            <tr>
                <td>{index}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{role}</td>
                <td className="d-flex gap-2">
                    <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#addItem" onClick={() => onEdit({name, email, phone, role})}>Sửa</button>
                    <button type="button" className="btn btn-danger" onClick={() => onDelete(email)}>Xóa</button>
                </td>
            </tr>
        </>
    )
}