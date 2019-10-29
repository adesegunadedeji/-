class StaticController < ApplicationController
    def home
        render json: {
            status: 201
        }
    end
end