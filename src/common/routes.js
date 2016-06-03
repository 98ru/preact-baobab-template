import {Component, h} from 'preact'
import HomeView from 'views/home'
import NotFoundView from 'views/404'
import Router from 'preact-router'

export default (
	<Router>
		<HomeView path="/" />
		<NotFoundView default />
	</Router>
)