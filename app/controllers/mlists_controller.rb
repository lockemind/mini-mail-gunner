class MlistsController < ApplicationController

	before_filter :authenticate_user!, only: [:create,:destroy,:update]

	def index
	  respond_with Mlist.where("user_id = #{current_user.id}")
	end

	def create
	  respond_with Mlist.create(mlist_params.merge(user_id: current_user.id))
	end

	def show
	  respond_with Mlist.find(params[:id])
	end

	def update
	  @mlist = Mlist.find(params[:id])
	  respond_with @mlist.update(mlist_params)
	end

	def destroy
	  respond_with Mlist.destroy(params[:id])
	end

	def mlist_params
	    params.require(:mlist).permit(:title, :mails)
	end
end
