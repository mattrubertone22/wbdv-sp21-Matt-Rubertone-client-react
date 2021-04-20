import {CREATE_WIDGET, DELETE_WIDGET, FIND_WIDGETS_FOR_COURSE, UPDATE_WIDGET} from "../actions/widget-actions";

const initialState = {
    widgets: []
}

const widgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_WIDGET:
            // const newModule = {
            //     title: "New Module",
            //     _id: (new Date()).getTime()
            // }
            return {
                ...state,
                widgets: [
                    ...state.modules,
                    action.module
                ]
            }
        case DELETE_WIDGET:
            return {
                ...state,
                widgets: state.widgets.filter(widget => {
                    if(widget._id !== action.widgetToDelete._id) {
                        return true
                    } else {
                        return false
                    }
                })
            }
        case UPDATE_WIDGET:
            return {
                ...state,
                widgets: state.widgets.map(widget => {
                    if(widget._id === action.updateWidget._id) {
                        return action.updateWidget
                    } else {
                        return widget
                    }
                })
            }
        case FIND_WIDGETS_FOR_COURSE:
            return {
                ...state,
                widgets: action.widgets
            }
        default:
            return state
    }
}

export default widgetReducer;
