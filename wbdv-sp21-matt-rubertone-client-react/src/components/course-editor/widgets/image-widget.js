import React from 'react'

const ImageWidget = ({widget, setWidget, editing}) => {
    return (
        <div>
            <h2>Image Widget</h2>
            <img
                src={widget.src}
                alt="image"
                width={widget.width}
                height={widget.height}
            />
            {
                editing &&
                    <div>
                        Image URL
                        <input
                               onChange={(event) => setWidget({...widget, src: event.target.value})}
                               className="form-control"/>
                        Image width
                        <input
                               onChange={(event) => setWidget({...widget, height: event.target.value})}
                               className="form-control"/>
                        Image height
                        <input
                               onChange={(event) => setWidget({...widget, width: event.target.value})}
                               className="form-control"/>
                    </div>
            }
        </div>
    )
}

export default ImageWidget