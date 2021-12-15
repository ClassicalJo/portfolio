export default function Button({ children, onClick }) {
    return (
        <div className='button' onClick={onClick}>
            {children}
        </div>
    )
}