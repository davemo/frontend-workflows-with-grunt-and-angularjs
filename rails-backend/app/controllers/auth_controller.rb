class AuthController < ApplicationController

  def csrf
    render json: { csrf_token: form_authenticity_token }
  end

  def login
    @user ||= User.find_by(email: params['email'])
    if @user and @user.authenticate(params['password'])
      session[:user_id] = @user.id
      render json: @user.to_json
    else
      render json: {flash: 'Invalid username or password'}, status: 500
    end
  end

  def logout
    session.delete("user_id")
    render json: {flash: 'Logged Out!'}
  end

end
