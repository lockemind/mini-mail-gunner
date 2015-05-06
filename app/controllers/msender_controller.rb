class MsenderController < ApplicationController
  
	def send input

	  RestClient.post "https://api:key-141b646a02b5ed3298026638d40dbea8"\
	  "@api.mailgun.net/v3/sandboxaaffbce7b3a7472880506d9a64568de9.mailgun.org/messages",
	  :from => "Mailgun Sandbox <postmaster@sandboxaaffbce7b3a7472880506d9a64568de9.mailgun.org>",
	  :to => "#{params[:mails]}",
	  :subject => "#{params[:content]}",
	  :text => "test 2 #{params[:mails]} and #{params[:content]}"
	end

	private
  def msender_params
	    params.require(:msender).permit(:content, :mails)
	end
end
