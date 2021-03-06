Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'


  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  scope '/api' do #, defaults: { format: :json } do
    scope '/v1' do
      resources :questions, only: [:index, :show]
      resources :answer_options, only: [:index, :show]
      resources :proposal_requests, only: [:create]
    end
  end

  # get '*path', to: "application#fallback_index_html", constraints: ->(request) do
  #   !request.xhr? && request.format.html?
  # end

end
