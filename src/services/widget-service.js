const WIDGET_URL = process.env.REACT_APP_WIDGET_URL
const TOPIC_URL = process.env.REACT_APP_TOPICS_URL

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