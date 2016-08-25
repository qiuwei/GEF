/**
 * Created by wqiu on 18/08/16.
 */
'use strict';

import _ from 'lodash';
import actionTypes from './actionTypes';
import {pageNames} from '../containers/Main';

//sync actions
//these are just plain action creators

function pageChange(pageName) {
    return {
        type: actionTypes.PAGE_CHANGE,
        page: pageName
    }
}

function errorOccur(errorMessage) {
    return {
        type: actionTypes.ERROR_OCCUR,
        page: errorMessage
    }
}

function taskFetchStart() {
    return {
        type: actionTypes.TASK_FETCH_START
    }
}

function taskFetchSuccess() {
    return {
        type: actionTypes.TASK_FETCH_SUCCESS
    }
}

function taskFetchError() {
    return {
        type: actionTypes.TASK_FETCH_ERROR
    }
}

function jobFetchStart() {
    return {
        type: actionTypes.JOB_FETCH_START
    }
}

function jobFetchSuccess() {
    return {
        type: actionTypes.JOB_FETCH_SUCCESS
    }
}

function jobFetchError() {
    return {
        type: actionTypes.JOB_FETCH_ERROR
    }
}

//async actions
//these do some extra async stuff before the real actions are dispatched
function fetchJobs() {

}

function showErrorMessageWithTimeout(id, timeout) {

}

function hideErrorMessage(id) {

}

export default {
    pageChange,
    errorOccur,
    taskFetchStart,
    taskFetchSuccess,
    taskFetchError,
    jobFetchStart,
    jobFetchSuccess,
    jobFetchError,
    fetchJobs,
    showErrorMessageWithTimeout,
    hideErrorMessage
}
