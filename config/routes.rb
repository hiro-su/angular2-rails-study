Rails.application.routes.draw do
  root 'templates#index'

  # Template
  get '/templates/:template/:path.html' => 'templates#template',
      constraints: { template: /.+/, path: /.+/ }, format: 'js'

  get '/templates/:template/:type/:path.html' => 'templates#template_type',
      constraints: { template: /.+/, type: /.+/, path: /.+/ }, format: 'js'

  get '/templates/:template/:type/:item/:path.html' => 'templates#template_type_item',
      constraints: { template: /.+/, type: /.+/, item: /.+/, path: /.+/ }, format: 'js'

  # Direct Access
  get '/home' => 'templates#index', format: false
  get '/hoge' => 'templates#index', format: false

  # Routing Error
  get  '*not_found' => 'application#routing_error', format: false
  post '*not_found' => 'application#routing_error', format: false
end
