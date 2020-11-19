class Character < ApplicationRecord
  has_many :sent_kudos,     class_name: "Kudo", foreign_key: "sender_id"
  has_many :received_kudos, class_name: "Kudo", foreign_key: "receiver_id"

  validates :name, :image_url, presence: true

  before_create :slugify
  
  SENDER_ID = 1      # TODO: Implement login
  MAX_KUDOS_BY_TYPE = 2

  def slugify
    self.slug = name.parameterize
  end

  def available_kudos
    available_by_type = {}

    KudoType.all.each do |type|
      given_kudos = sent_kudos.where(kudo_type_id: type.id).count
      available_by_type[type] = [(MAX_KUDOS_BY_TYPE - given_kudos), 0].max
    end

    available_by_type
  end
end
