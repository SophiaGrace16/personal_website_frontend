import { combineReducers } from 'redux'
import educations from './educationReducer'
import experiences from './experienceReducer'
import projects from './projectReducer'

export default combineReducers({
    educations,
    experiences,
    projects
})