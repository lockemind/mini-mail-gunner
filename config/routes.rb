Rails.application.routes.draw do
  
 post 'msender/send'

 devise_for :users
 root to: 'application#angular'

 resources :mlists
 resources :templates
end
