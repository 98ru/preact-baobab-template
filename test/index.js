import Baobab from 'baobab'
import {jsdom} from 'jsdom'
import React from 'react'
import ReactDOM from 'react-dom'
import should from 'should'

const document = jsdom('<!doctype html>')
const {defaultView: window} = document

for (let key in window) {
	if (!window.hasOwnProperty(key)) continue
	if (key in global) continue
	global[key] = window[key]
}

Object.assign(global, {
	Baobab,
	document,
	jsdom,
	React,
	ReactDOM,
	should,
	window
})