require 'sinatra/base'
require 'sinatra/reloader'

class MuzzleyGamepad < Sinatra::Base
  configure :development do
    register Sinatra::Reloader
  end

  get '/' do
    erb :index
  end
end