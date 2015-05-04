class MlistsController < ApplicationController

	def index
	  respond_with Mlist.all
	end

	def create
	  respond_with Mlist.create(mlist_params)
	end

	def show
	  respond_with Mlist.find(params[:id])
	end

	def mlist_params
	    params.require(:mlists).permit(:mails, :title)
	end
end
