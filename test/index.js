import Baobab from 'baobab'
import {jsdom} from 'jsdom'
import React from 'react'
import ReactDOM from 'react-dom'
import should from 'should'
import * as actions from 'actions'
import {Dao, getDefaultState} from 'common/state'

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
	document,
	getDefaultState,
	jsdom,
	React,
	ReactDOM,
	should,
	window
})