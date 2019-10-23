class RegistrationsController < ApplicationController
    def create
        user = user.create!(
            email: params["user"]["email"],
            password: params["user"]["password"],
            password_confirmation: params["user"]["password"]
        )
        if user
            session[:user_id] = user.user_id
            render json: {
                status: :created,
                user: user
            }
        else
            render json: {
                status: 500
            }
    end
end