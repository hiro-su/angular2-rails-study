class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  rescue_from ActionController::RoutingError do |e|
    render text: "Not Found", status: 404
  end

  # ルーティングエラー
  def routing_error
    raise ActionController::RoutingError.new(params[:path])
  end
end
