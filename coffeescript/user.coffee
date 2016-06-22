class User
  constructor (@id, @firstName, @lastName) ->

  getId: ->
    @id

  getFirstName: ->
    @firstName

  setFirstName: (@firstName) ->

  getLastName: ->
    @lastName

  setLastName: (@lastName) ->
