require 'rails_helper'

RSpec.describe Character, type: :model do
  
  describe 'available_kudos' do
    before(:each) do
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
    end

    context 'checking available kudos before sending any' do
      it 'should return MAX_KUDOS_BY_TYPE for every type' do
        char = Character.create(name: "Test Char", image_url: "image.png")
 
        available_kudos = char.available_kudos

        expect(available_kudos.length).to eq(3)
        expect(available_kudos.values).to eq([2,2,2])
      end
    end

    context 'after sending three kudos' do
      it 'should return less kudos for each type' do
        char = Character.create(name: "Test Char", image_url: "image.png")
        char2 = Character.create(name: "Test Char 2", image_url: "image.png")

        Kudo.create(sender_id: char.id, receiver_id: char2.id, kudo_type_id: KudoType.first.id)
        Kudo.create(sender_id: char.id, receiver_id: char2.id, kudo_type_id: KudoType.first.id)
        Kudo.create(sender_id: char.id, receiver_id: char2.id, kudo_type_id: KudoType.last.id)
        available_kudos = char.available_kudos

        expect(available_kudos.length).to eq(3)
        expect(available_kudos.values).to include(0, 1, 2)
      end
    end

  end
end
