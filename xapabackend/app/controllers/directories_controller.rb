class DirectoriesController < ApplicationController
  before_action :set_directory, only: [:show, :edit, :update, :destroy]

 # GET /directories
 def index
  @directories = Directory.all
  render json:  @directories 
end

 # GET /directories/1
def show
  render json: @directory
end
  # POST /directories
def create
  @directory = Directory.new(directory_params)

  if @directory.save
    render json: @directory, status: :created, location: @directory
  else
    render json:@directory.errors, status: :unprocessable_entity
  end
end
# PATCH/PUT /directories/1
def update
  if @directory.update(league_params)
    render json: @directory
  else
    render json: @directory.errors, status: :unprocessable_entity
  end
end

# DELETE /leagues/1
def destroy
  @directory.destroy
end

private
  # Use callbacks to share common setup or constraints between actions.
  def  set_directory
    @directory = Directory.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def directory_params
    params.require(:directory).permit(:company, :founder, :revenue, :logo)
  end
end
