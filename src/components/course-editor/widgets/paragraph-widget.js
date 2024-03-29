import React, {useState, useEffect} from 'react'

const ParagraphWidget = ({widget, setWidget, editing}) => {
    return (
        <div>
            {
                editing &&
                <textarea
                    onChange={(e) => setWidget({...widget, text: e.target.value})}
                    className="form-control"/>
            }
            {
                !editing &&
                    <p>
                        {widget.text}
                    </p>
            }
        </div>
    )
}

export default ParagraphWidget