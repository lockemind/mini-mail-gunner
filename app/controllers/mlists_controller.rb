class MlistsController < ApplicationController

	before_filter :authenticate_user!, only: [:create]

	def index
		puts 'MlistsController.index'
	  # respond_with Mlist.all
	  respond_with Mlist.where("user_id = #{current_user.id}")
	end

	def create
		puts 'MlistsController.create'
	  # respond_with Mlist.create(mlist_params)
	  respond_with Mlist.create(mlist_params.merge(user_id: current_user.id))
	end

	def show
		puts 'MlistsController.show'
	  respond_with Mlist.find(params[:id])
	end

	def mlist_params
	    params.require(:mlist).permit(:title, :mails)
	end
end
