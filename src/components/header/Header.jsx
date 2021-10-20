export default function Header({ element }) {
    function scrollBot() {
        element.current.scrollTo(0, element.current.scrollHeight)
    }
    return (
        <div className='header' onClick={scrollBot}>
            <p>cv</p>
        </div>
    )
}
