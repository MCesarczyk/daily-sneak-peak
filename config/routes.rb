Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :children do 
        resources :activities
      end
    end
  end

  root 'children#index'
  get '*path', to: 'children#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
