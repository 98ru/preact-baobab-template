import Baobab from 'baobab'
import {jsdom} from 'jsdom'
import React from 'react'
import ReactDOM from 'react-dom'
import should from 'should'
import * as actions from 'actions'
import Dao from 'common/dao'
import defaultState from 'common/state'

const document = jsdom('<!doctype html>')
const {defaultView: window} = document

for (let key in window) {
	if (!window.hasOwnProperty(key)) continue
	if (key in global) continue
	global[key] = window[key]
}

Object.assign(global, {
	actions,
	Baobab,
	Dao,
	defaultState,
	document,
	jsdom,
	React,
	ReactDOM,
	should,
	window
})