class ProductSerializer
    def initialize(product_obj)
        @product = product_obj
    end

    def to_serialized_json
        @product.to_json(:include => {
            :only => [:name, :price]})
    end
end