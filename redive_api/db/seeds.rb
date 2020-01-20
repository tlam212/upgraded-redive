# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# -----------------IMAGES------------------------------------------
Image.create(title: "Towering New York skyscraper", artist_name: "Lucas Franco", img_url: "https://source.unsplash.com/aRTjFXs6HNc", img_type: "Building")
Image.create(title: "Monochrome Woman With Umbrella", artist_name: "Jesse Williams", img_url: "https://source.unsplash.com/Bj0LJahdZQo", img_type: "Street")
Image.create(title: "One Day in New York", artist_name: "Valou_c", img_url: "https://source.unsplash.com/Lg5JH54zalg", img_type: "Subway")
Image.create(title: "New York Subway", artist_name: "Adi Goldstein", img_url: "https://source.unsplash.com/B2sNfHkjagM", img_type: "Subway")
Image.create(title: "A View From Dumbo", artist_name: "Dylan Freedom", img_url: "https://source.unsplash.com/iEgP_YHs-jM", img_type: "Bridge")
Image.create(title: "Black White Train Flatiron", artist_name: "Jesse Williams", img_url: "https://source.unsplash.com/jGwyxVSQ9uM", img_type: "Subway")
Image.create(title: "Verrazano-Narrows", artist_name: "Manny Ribera", img_url: "https://source.unsplash.com/dV_Blc0bols", img_type: "Bridge")
Image.create(title: "Urban Wall", artist_name: "Tatiana Rodriguez", img_url: "https://source.unsplash.com/m0wZhtII1FU", img_type: "Street")
Image.create(title: "Brighton Beach", artist_name: "Paulo Silva", img_url: "https://source.unsplash.com/mHv2CDYhDWU", img_type: "Street")
Image.create(title: "The Stock Exchange", artist_name: "Aditya Vyas", img_url: "https://source.unsplash.com/mHdATQY9fIU", img_type: "Building")
Image.create(title: "Standing Tall!", artist_name: "Aditya Vyas", img_url: "https://source.unsplash.com/ZtrahFp1pjA", img_type: "Building")
Image.create(title: "Person Walks On West Village Street", artist_name: "Chanan Greenblat", img_url: "https://source.unsplash.com/684kZ4oqB6c", img_type: "Street")
Image.create(title: "Looking Up At The Manhattan Bridge", artist_name: "Hieu Vu Minh", img_url: "https://source.unsplash.com/IRkAbNRT_Yg", img_type: "Bridge")
Image.create(title: "Statue Of Liberty", artist_name: "James Pond", img_url: "https://source.unsplash.com/hqpG5Ijhsyo", img_type: "Monument")
Image.create(title: "102 Stops Elevator Ride To Heaven", artist_name: "Mark Ashtoff", img_url: "https://source.unsplash.com/Y_7wXiRn_J8", img_type: "Building")
Image.create(title: "Lady Liberty", artist_name: "Lucas Franco", img_url: "https://source.unsplash.com/NMlad_sUGTo", img_type: "Monument")


User.create(name:"Kelly", email:"qb@somewhere.com", password_digest: "pwd1234")

Collection.create(user_id: 1, image_id: 1)
