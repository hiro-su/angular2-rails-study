class TemplatesController < ApplicationController
  def index
  end

  def template
    render template: "templates/#{params[:template]}/#{params[:path]}", layout: nil
  end

  def template_type
    render template: "templates/#{params[:template]}/#{params[:type]}/#{params[:path]}", layout: nil
  end

  def template_type_item
    render template: "templates/#{params[:template]}/#{params[:type]}/#{params[:item]}/#{params[:path]}", layout: nil
  end
end
