class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token #set of rules when we communicate with route CSRF Token.
end
