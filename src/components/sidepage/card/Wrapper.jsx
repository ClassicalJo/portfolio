export default function Wrapper({ children, expand, reduce, toggle }) {
    let className = 'project-card-wrapper ' + (
        reduce ? 'reduced' :
        expand ? 'expanded' : ''
    )
    
    return (
        <div
            onClick={toggle}
            className={className}  >
            {children}
        </div>
    )

}
