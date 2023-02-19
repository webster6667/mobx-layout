import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { primaryTheme } from '@app-theme'
import { Template } from './components/template'
import { GlobalStyle } from "./styles/global-styles"
import { routes } from './routes'

export const App = () => {

	return (
		<BrowserRouter>
			<ThemeProvider theme={primaryTheme} >
				<GlobalStyle/>
				<Template>
					<Switch>
						{routes.map(({...routeProps}, i) => (<Route key={i} {...routeProps} />))}
					</Switch>
				</Template>
			</ThemeProvider>
		</BrowserRouter>
	)
}


