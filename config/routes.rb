Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :characters, param: :slug
      resources :kudos, only: [:create, :destroy]
      resources :kudo_types, only: [:index]

      get 'kudo_types/available', to: 'kudo_types#available'
    end
  end

  get '*path', to: 'pages#index', via: :all
end