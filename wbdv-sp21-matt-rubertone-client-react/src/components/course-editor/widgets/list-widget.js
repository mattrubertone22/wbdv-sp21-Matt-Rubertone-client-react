import React from 'react'

const ListWidget = ({widget, setWidget, editing}) => {
    return (
        <div>
            <h2>List Widget</h2>
            {
                !editing &&
                <>
                    {
                        widget.ordered &&
                        <ol>
                            {
                                widget.text.split("\n").map(item => {
                                    return(
                                        <li>{item}</li>
                                    )
                                })
                            }
                        </ol>
                    }
                    {
                        !widget.ordered &&
                        <ul>
                            {
                                widget.text.split("\n").map(item => {
                                    return(
                                        <li>{item}</li>
                                    )
                                })
                            }
                        </ul>
                    }
                </>
            }
            {
                editing &&
                <div>
                    <input type="checkbox"
                           onChange={(event) => setWidget({...widget, ordered: event.target.value})}
                           /> Ordered
                    <br/>
                    List Items
                    <textarea onChange={(e) => setWidget({...widget, text: e.target.value})}
                              rows={10}
                              placeholder="Enter one list item per line"
                              className="form-control"></textarea>
                </div>
            }

        </div>
    )
}

export default ListWidget