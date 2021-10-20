export default function SmolButton({ onClick, children, onCopy }) {
    return (
        <div className='smol-button' onClick={onClick} onCopy={onCopy}>
            {children}
        </div>
    )
}
