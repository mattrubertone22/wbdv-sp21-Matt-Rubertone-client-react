const WIDGET_URL = "http://localhost:8080/api/widgets"
const TOPIC_URL = "http://localhost:8080/api/topics"

export const findAllWidgets = () =>
    fetch(WIDGET_URL)
        .then(response => response.json());

export const createWidget = (topicId) =>
    fetch(`http://localhost:8080/api/topics/${topicId}/widgets`, {
        method: "POST",
        body: JSON.stringify({type: "HEADING", size: 2, text: "New Widget"}),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const createWidgetForTopic = (topicId) => {
    fetch(`${TOPIC_URL}/${topicId}/widgets`, {
        method: "POST",
        body: JSON.stringify({type: "HEADING", size: 2, text: "New Widget"}),
        headers: {
            "content-type": 'application/json'
        }
    }).then(response => response.json());
}

export const findWidgetsForTopic = (topicId) =>
    fetch(`http://localhost:8080/api/topics/${topicId}/widgets`)
        .then(response => response.json());

export const deleteWidget = (widgetId) =>
    fetch(`${WIDGET_URL}/${widgetId}`, {
        method: 'DELETE'
    })
        .then(response => response.json());

export const updateWidget = (widgetId, updatedWidget) => {
    fetch(`${WIDGET_URL}/${widgetId}`, {
        method: "PUT",
        body: JSON.stringify(updatedWidget),
        headers: { 'content-type': 'application/json' }
    }).then(response => response.json());
}

const widgetApi = {
    createWidget, findWidgetsForTopic, deleteWidget, updateWidget, findAllWidgets, createWidgetForTopic
}

export default widgetApi;