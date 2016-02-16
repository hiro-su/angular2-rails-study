Rails.application.routes.draw do
  root 'home#index'
  get 'home/index'

  # テンプレート
  get '/templates/:template/:path.html' => 'templates#template',
      constraints: { template: /.+/, path: /.+/ }, format: 'js'

  get '/templates/:template/:type/:path.html' => 'templates#template_type',
      constraints: { template: /.+/, type: /.+/, path: /.+/ }, format: 'js'

  get '/templates/:template/:type/:item/:path.html' => 'templates#template_type_item',
      constraints: { template: /.+/, type: /.+/, item: /.+/, path: /.+/ }, format: 'js'

  get  '*not_found' => 'application#routing_error', format: false
  post '*not_found' => 'application#routing_error', format: false
end
