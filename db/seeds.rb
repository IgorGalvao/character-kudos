# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#

characters = Character.create([
  {
    name: "Mario",
    image_url: "images/01-mario.png"
  },
  {
    name: "Donkey Kong",
    image_url: "images/02-donkey-kong.png"
  },
  {
    name: "Link",
    image_url: "images/03-link.png"
  },
  {
    name: "Samus",
    image_url: "images/04-samus.png"
  },
  {
    name: "Yoshi",
    image_url: "images/05-yoshi.png"
  },
  {
    name: "Kirby",
    image_url: "images/06-kirby.png"
  },
  {
    name: "Fox",
    image_url: "images/07-fox.png"
  },
  {
    name: "Pikachu",
    image_url: "images/08-pikachu.png"
  },
  {
    name: "Marth",
    image_url: "images/09-marth.png"
  },
  {
    name: "Sonic",
    image_url: "images/10-sonic.png"
  },
  {
    name: "Mega Man",
    image_url: "images/11-mega-man.png"
  },
  {
    name: "Shulk",
    image_url: "images/12-shulk.png"
  },
  {
    name: "Ryu",
    image_url: "images/13-ryu.png"
  },
  {
    name: "Hero",
    image_url: "images/14-hero.png"
  },
  {
    name: "Joker",
    image_url: "images/15-joker.png"
  },
  {
    name: "Simon",
    image_url: "images/16-simon.png"
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