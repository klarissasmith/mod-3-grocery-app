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

20.times do
    randomNum = Random.new
    Product.create(name: Faker::Food.ingredient, price: randomNum.rand(0.99..9.99).round(2), img_url: "https://picsum.photos/200")
end

5.times do
    User.create(name: Faker::Name.first_name, password: (Faker::TvShows::Seinfeld.business).delete(" "))
end

Cart.create(user_id: 1)
Cart.create(user_id: 2)
Cart.create(user_id: 3)
Cart.create(user_id: 4)
Cart.create(user_id: 5)

40.times do
    CartProduct.create(cart_id: rand(1..5), product_id: rand(1..10))
end
