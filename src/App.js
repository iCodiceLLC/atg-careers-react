import React from 'react'
import './App.scss'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from './pages'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import 'atg-package/dist/index.css'

function App() {
  return (
    <div className="overflow-hidden">
      <Header showContactInfo={true} subTitle="ARE YOU READY TO JOIN OUR TEAM?" title="CAREERS" style={{ fontWeight: '300' }} />
      <BrowserRouter exact path={['/']}>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
