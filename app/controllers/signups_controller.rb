class SignupsController < ApplicationController

def new
@signup = Signup.new
end

def create
@signup = Signup.new(signup_params)

@signup.save
redirect_to :thanks
end


private
 def signup_params
  params.require(:signup).permit(:firstname, :email)
 end













end
