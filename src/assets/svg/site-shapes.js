export const Hamburger = () => {
    return (
        <svg viewBox='0 0 100 70' width='40' >
            <rect width='100' height='10'></rect>
            <rect y='30' width='100' height='10'></rect>
            <rect y='60' width='100' height='10'></rect>
        </svg>
    )
}

export const LineBackground = ({screenDims}) => {
    return (
        <div className='home-background' >
            {screenDims.height > screenDims.width ? (
                <svg viewBox='0 0 100 100' width='100%' height='100%' preserveAspectRatio='none' >
                    <line vectorEffect="non-scaling-stroke" x1='0' y1='0' x2='100' y2='9' />
                    <line vectorEffect="non-scaling-stroke" x1='0' y1='98' x2='100' y2='78' />
                    <line vectorEffect="non-scaling-stroke" x1='0' y1='36' x2='100' y2='9' />
                    <line vectorEffect="non-scaling-stroke" x1='0' y1='4' x2='100' y2='91' />
                    <line vectorEffect="non-scaling-stroke" x1='0' y1='32' x2='100' y2='42' />
                    <line vectorEffect="non-scaling-stroke" x1='0' y1='69' x2='100' y2='17' />
                </svg>
            ) : (
                <svg viewBox='0 0 100 100' width='100%' height='100%' preserveAspectRatio='none' >
                    <line vectorEffect="non-scaling-stroke" y1='0' x1='0' y2='100' x2='9' />
                    <line vectorEffect="non-scaling-stroke" y1='0' x1='98' y2='100' x2='78' />
                    <line vectorEffect="non-scaling-stroke" y1='0' x1='36' y2='100' x2='9' />
                    <line vectorEffect="non-scaling-stroke" y1='0' x1='4' y2='100' x2='91' />
                    <line vectorEffect="non-scaling-stroke" y1='0' x1='32' y2='100' x2='42' />
                    <line vectorEffect="non-scaling-stroke" y1='0' x1='69' y2='100' x2='17' />
                </svg>
            )}
            
        </div>
    )
}