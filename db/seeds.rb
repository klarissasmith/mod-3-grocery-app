# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Product.destroy_all
User.destroy_all
Cart.destroy_all
CartProduct.destroy_all

10.times do
    Product.create(name: Faker::Food.ingredient, price: rand(10).to_f)
end

5.times do
    User.create(name: Faker::Name.first_name, password: (Faker::TvShows::Seinfeld.business).delete(" "))
end

Cart.create(user_id: 1)
Cart.create(user_id: 2)
Cart.create(user_id: 3)
Cart.create(user_id: 4)
Cart.create(user_id: 5)

30.times do
    CartProduct.create(cart_id: rand(5), product_id: rand(10))
end
