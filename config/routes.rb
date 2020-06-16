Rails.application.routes.draw do
  resources :cart_products
  resources :carts
  resources :users
  resources :products
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
