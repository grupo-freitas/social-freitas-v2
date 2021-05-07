import express, { Application } from 'express'

class App {
  public express: Application

  constructor () {
    this.express = express()
    this.database()
    this.middlewares()
    this.routes()
  }

  private database () {

  }

  private middlewares () {
    this.express.use(express.json())
  }

  private routes () {

  }
}

export default new App().express
