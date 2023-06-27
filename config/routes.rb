Rails.application.routes.draw do
  # get 'calculators/index'
  # get 'calculator/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "calculators#index"
  resources :calculators, only: [:index]
end
