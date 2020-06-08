Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :show]
    resources :profiles, only: [:index, :create, :show, :update]
    resources :requests, only: [:index, :create, :destroy]
    resources :friendships, only: [:index, :create, :destroy]
    resources :posts, only: [:index, :create, :show, :destroy, :update]
    resources :comments, only: [:index, :create, :show, :destroy]
    resource :session, only: [:create, :destroy]
  end
end
