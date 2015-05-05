Rails.application.routes.draw do
 
  devise_for :users
 root to: 'application#angular'

 resources :mlists
 
end
