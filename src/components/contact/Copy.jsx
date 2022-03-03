export default function Copy({ onClick, children }) {
    return (
        <div  className='copy' onClick={onClick} tabIndex={0} onKeyDown={e=> e.key === 'Enter' && onClick()}>
            {children}
        </div>
    )
}
