Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'children/index'
      get 'children/:id', to: 'children#show', as: 'child'
      post 'children/create'
      get 'children/:id', to: 'children#edit'
      put 'children/:id', to: 'children#update'
      delete 'children/:id', to: 'children#destroy'
    end
  end

  root 'children#index'
  get '*path', to: 'children#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
