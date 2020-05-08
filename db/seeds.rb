# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


users = User.create([{ email: 'demo@aa.io', password: '123456', first_name: 'Jon', last_name: 'Snow', birthdate: '2015-10-10', gender: 'male'},
{ email: 'cersei@aa.io', password: '123456', first_name: 'Cersei', last_name: 'Lannister', birthdate: '2000-04-04', gender: 'female'},
{ email: 'nightking@aa.io', password: '123456', first_name: 'Night', last_name: 'King', birthdate: '2010-06-06', gender: 'male'},
{ email: 'arya@aa.io', password: '123456', first_name: 'Arya', last_name: 'Stark', birthdate: '2008-10-06', gender: 'female'},
{ email: 'bran@aa.io', password: '123456', first_name: 'Bran', last_name: 'Stark', birthdate: '2004-06-06', gender: 'male'},
{ email: 'tyrion@aa.io', password: '123456', first_name: 'Tyrion', last_name: 'Lannister', birthdate: '1990-06-06', gender: 'male'}])

profiles = Profile.create([{owner_id: users[0].id, current_city: 'San Francisco, California', hometown: 'Winterfell', about: 'We look up at the same stars and see such different things.', education: 'App Academy'}, 
{owner_id: users[1].id, current_city: 'San Jose, California', hometown: 'Kings Landing', about: 'When You Play The Game Of Thrones, You Win Or You Die.', education: 'Hack Reactor'},
{owner_id: users[2].id, current_city: 'Oakland, California', hometown: 'Westeros', about: '...', education: 'General Assembly'},
{owner_id: users[3].id, current_city: 'San Francisco, California', hometown: 'Winterfell', about: 'Nothing isn’t better or worse than anything. Nothing is just nothing.', education: 'App Academy'},
{owner_id: users[4].id, current_city: 'San Francisco, California', hometown: 'Winterfell', about: 'An endless night. He wants to erase this world, and I am its memory.', education: 'App Academy'},
{owner_id: users[5].id, current_city: 'San Mateo, California', hometown: 'Kings Landing', about: 'I drink and I know things', education: 'Hack Reactor'}

])