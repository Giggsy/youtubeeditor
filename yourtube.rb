require 'sinatra'

get '/' do
  erb :edit
end

get '/play' do
  @id = params[:id]
  @start = params[:start].to_i
  @end = params[:end].to_i
  erb :play
end
