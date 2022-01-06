# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Child.create(name:'Jaś', surname:'Kowalski', group: 'Oposy')
Child.create(name:'Małgosia', surname:'Nowak', group: 'Żabki')
Child.create(name:'Zenek', surname: 'Brzęczyszczykiewicz', group:'Zombiaki')

Activity.create(breakfast:'half', soup:'all', second:'all', snack:'all', sleep:'none', pee:3, poo:1, supplies:'towel', comment:'broken tooth', child_id:1)
Activity.create(breakfast:'all', soup:'none', second:'half', snack:'none', sleep:'1 hour', pee:2, poo:2, supplies:'basket', comment:'beaten up wolf', child_id:2)
Activity.create(breakfast:'none', soup:'half', second:'none', snack:'a bit', sleep:'half an hour', pee:4, poo:0, supplies:'10 palettes of Suporex bricks', comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum, libero at facilisis molestie, orci mi sagittis ipsum, in utlrices nisi velit id purus. Etiam in ipsum consectetur lacus consectetur condimentum. Maecenas posuere justo in arcu euismod, et interdum ipsum iaculis. Praesent rutrum orci neque, dictum euismod ipsum rhoncus vel. Morbi commodo justo eu velit blandit, ut aliquam diam vulputate.', child_id:3)