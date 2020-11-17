# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#

characters = Character.create([
  {
    name: "Mario",
    image_url: "01-mario.png"
  },
  {
    name: "Donkey Kong",
    image_url: "02-donkey-kong.png"
  },
  {
    name: "Link",
    image_url: "03-link.png"
  },
  {
    name: "Samus",
    image_url: "04-samus.png"
  },
  {
    name: "Yoshi",
    image_url: "05-yoshi.png"
  },
  {
    name: "Kirby",
    image_url: "06-kirby.png"
  },
  {
    name: "Fox",
    image_url: "07-fox.png"
  },
  {
    name: "Pikachu",
    image_url: "08-pikachu.png"
  },
  {
    name: "Marth",
    image_url: "09-marth.png"
  },
  {
    name: "Sonic",
    image_url: "10-sonic.png"
  },
  {
    name: "Mega Man",
    image_url: "11-mega-man.png"
  },
  {
    name: "Shulk",
    image_url: "12-shulk.png"
  },
  {
    name: "Ryu",
    image_url: "13-ryu.png"
  },
  {
    name: "Hero",
    image_url: "14-hero.png"
  },
  {
    name: "Joker",
    image_url: "15-joker.png"
  },
  {
    name: "Simon",
    image_url: "16-simon.png"
  }
])

kudo_types = KudoType.create([
  {
    name: "I learned!",
    icon: "🎓",
    color: "#33CEFF"
  },
  {
    name: "Awesome!",
    icon: "👏",
    color: "#FFF933"
  },
  {
    name: "I'm grateful!",
    icon: "🙏",
    color: "#FF33A8"
  }  
])

kudos = Kudo.create([
  {
    sender_id: 1,
    receiver_id: 2,
    kudo_type_id: 1
  },
  {
    sender_id: 1,
    receiver_id: 3,
    kudo_type_id: 2
  }
])