Rails.application.routes.draw do
  root to: "static_pages#root"
  resources :benches, only: [:index, :create]
end
