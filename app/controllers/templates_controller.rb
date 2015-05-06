class TemplatesController < ApplicationController

	before_filter :authenticate_user!, only: [:create, :destroy, :update]

	def index
	  respond_with Template.where("user_id = #{current_user.id}")
	end

	def create
	  respond_with Template.create(template_params.merge(user_id: current_user.id))
	end

	def show
	  respond_with Template.find(params[:id])
	end

	def update
	  @template = Template.find(params[:id])
	  respond_with @template.update(template_params)
	end

	def destroy
	  respond_with Template.destroy(params[:id])
	end

	def template_params
	    params.require(:template).permit(:title, :content)
	  end
end
