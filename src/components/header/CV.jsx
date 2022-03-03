export default function CV({ scroll, tabIndex, width, height }) {
    return (
        <div
            tabIndex={tabIndex}
            className="cv"
            onKeyDown={e => e.key === 'Enter' && scroll()}
            onClick={scroll}
            style={{
                width, height,
                border: "1px solid rgba(0,0,0,0.1)",
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                background: 'white',
                color: 'black',
                boxSizing: 'border-box',
                fontSize: "24px"

            }}
        >
            <p>cv</p>
        </div>

    )
}
