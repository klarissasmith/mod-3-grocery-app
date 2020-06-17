class CartProductsController < ApplicationController
  before_action :set_cart_product, only: [:show, :update, :destroy]

  # GET /cart_products
  def index
    @cart_products = CartProduct.all

    render json: @cart_products
  end

  # GET /cart_products/1
  def show
    render json: @cart_product
  end

  # POST /cart_products
  def create
    @cart_product = CartProduct.new(cart_product_params)

    if @cart_product.save
      render json: @cart_product, status: :created, location: @cart_product
    else
      render json: @cart_product.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /cart_products/1
  def update
    if @cart_product.update(cart_product_params)
      render json: @cart_product
    else
      render json: @cart_product.errors, status: :unprocessable_entity
    end
  end

  # DELETE /cart_products/1
  def destroy
    @cart_product.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_cart_product
      @cart_product = CartProduct.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def cart_product_params
      params.require(:cart_product).permit(:product_id, :cart_id)
    end
end
