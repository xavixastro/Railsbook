# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


users = User.create([{ email: 'javi@aa.io', password: '123456', first_name: 'Javier', last_name: 'Castro', birthdate: '2000-04-04', gender: 'male'},
{ email: 'pamela@aa.io', password: '123456', first_name: 'Pamela', last_name: 'Castro', birthdate: '2010-06-06', gender: 'female'}])

profiles = Profile.create([{owner_id: users[0].id}, {owner_id: users[1].id} ])