class BooksController < ApplicationController

  def index
    render json: [
      {title: 'Great Expectations', author: 'Dickens'},
      {title: 'Foundation', author: 'Asimov'},
      {title: 'Treasure Island', author: 'Stephenson'}
    ]
  end

end