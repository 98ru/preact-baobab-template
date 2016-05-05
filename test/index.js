import * as actions from 'actions'
import Baobab from 'baobab'
import Dao from 'common/dao'
import defaultState from 'state.json'
import {jsdom} from 'jsdom'
import React from 'react'
import ReactDOM from 'react-dom'
import should from 'should'

const document = jsdom('<!doctype html>')
const {defaultView: window} = document
const stateTree = new Baobab(defaultState)
const dao = new Dao({actions, defaultState, stateTree})

for (let key in window) {
	if (!window.hasOwnProperty(key)) continue
	if (key in global) continue
	global[key] = window[key]
}

Object.assign(global, {
	dao,
	document,
	jsdom,
	React,
	ReactDOM,
	should,
	window
})