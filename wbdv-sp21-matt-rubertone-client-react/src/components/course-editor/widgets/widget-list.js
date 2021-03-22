import React, {useState, useEffect} from 'react'
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom"
import widgetApi from "../../../services/widget-service";
import widgetActions from "../../../actions/widget-actions";
import {connect} from "react-redux";

const WidgetList = () => {
    const service = widgetApi
    const {topicId} = useParams()
    const [widgets, setWidgets] = useState([])
    const [widget, setWidget] = useState({})

    useEffect(() => {
        service.findWidgetsForTopic(topicId)
            .then(widgets => setWidgets(widgets))
    }, [topicId])

    const createWidget = () => {
        // TODO: move all server communication to widgets-service
        fetch(`http://localhost:8080/api/topics/${topicId}/widgets`, {
            method: 'POST',
            body: JSON.stringify({type: "HEADING", size: 2, text: "New Widget"}),
            headers: {
                "content-type": 'application/json'
            }
        })
            .then(response => response.json())
            .then(widget => setWidgets((widgets) => [...widgets, widget]))
    }
    
    return(
        <div>
            <i onClick={createWidget}
               className="fas fa-plus float-right fa-2x"/>
            <h1>Widget List {widget.id}</h1>
            <ul className="list-group">
                {
                    widgets.map(_widget =>
                        <li key={_widget.id} className="list-group-item">
                            {
                                _widget.id === widget.id &&
                                    <>
                                        <i onClick={() => service.deleteWidget(_widget.id)}
                                           className="fas fa-trash float-right"/>
                                        <i onClick={() => {service.updateWidget(_widget.id, widget)}}
                                           className="fas fa-check float-right"/>
                                    </>
                            }
                            {
                                _widget.id !== widget.id &&
                                <i onClick={() => setWidget(_widget)} className="fas fa-cog float-right"/>
                            }
                            {
                                _widget.type === "HEADING" &&
                                <HeadingWidget
                                    setWidget={setWidget}
                                    editing={_widget.id === widget.id}
                                    widget={widget}/>
                            }
                            {
                                _widget.type === "PARAGRAPH" &&
                                <ParagraphWidget
                                    setWidget={setWidget}
                                    editing={_widget.id === widget.id}
                                    widget={_widget}/>
                            }
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

const stpm = (state) => ({
    widgets: state.widgetReducer.widgets
})
const dtpm = (dispatch) => ({
    createWidget: (widget) => widgetActions.createWidget(dispatch, widget),
    updateWidget: (newItem) => widgetActions.updateWidget(dispatch, newItem),
    deleteWidget: (widgetToDelete) => widgetActions.deleteWidget(dispatch, widgetToDelete),
    findWidgetsForTopic: (topicId) => widgetActions.findWidgetsForTopic(dispatch, topicId)
})

export default connect(stpm, dtpm) (WidgetList)