class CharacterSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :image_url, :slug

  has_many :received_kudos, record_type: :kudo
end
